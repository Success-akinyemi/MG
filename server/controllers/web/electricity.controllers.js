import axios from 'axios'
import UserModel from '../../model/User.js'
import TransctionHistroyModel from "../../model/TransactionHistroy.js";

export async function buyElectricBill(req, res) {
    console.log(req.body)
    const { providerCode, providerName, meterNumber, amount, transactionId, phoneNumber, meterType, } = req.body
    const { _id, email } = req.user
    try {
        if(!providerCode || !meterNumber || !amount || !phoneNumber){
            return(406).json({ success: false, data: 'Fill all required Fields' })
        }
        const getUser = await UserModel.findById({ _id: _id})

        const payNepaLight = await axios.post(
            `${process.env.HUSSY_URL}/electricity/`,
            {
                "provider": providerCode, 
                "meternumber": meterNumber,
                "amount": Number(amount),
                "metertype":"prepaid/postpaid",
                "phone": phoneNumber,
                "ref": transactionId,
            },
            {
                headers: {
                    "Authorization": `Token ${process.env.HUSSY_API_KEY}`,
                    "Content-Type": 'application/json',
                    "Accept" : '*/*'
                },
            }
        )

        const dataResponse = payNepaLight?.data
        if (dataResponse.Status.toLowerCase() === 'successful') {
            //debit user
            getUser.acctBalance -= Number(amount);
            await getUser.save();
        
            // Create new transaction
            const newTransaction = await TransctionHistroyModel.create({
                userId: _id,
                email: email,
                service: `Electric bills`,
                platform: providerName,
                number: meterNumber,
                amount: amount,
                totalAmount: amount,
                status: dataResponse.Status,
                paymentMethod: 'Wallet',
                transactionId: transactionId,
                serviceId: Date.now()
            });

            const { amount, ...transactionData } = newTransaction._doc;
            const { resetPasswordToken, resetPasswordExpire, password: hashedFinalPassword, pin, ...userData } = getUser._doc;

            return res.status(206).json({
                success: true,
                msg: `${amount}  electric bill for ${providerName} purchase successful`,
                data: { success: true, data: userData },
                transaction: transactionData
            });
        } else {
            return res.status(400).json({ success: false, data: 'Electricity purchase failed' });
        }
        
    } catch (error) {
        console.log('UNABLE TO BUY ELECTRIC BILL', error)
        res.status(500).json({ success: false, data: 'Unable to buy electric bill'})
    }
}

export async function validateMeterNumber(req, res){
    const { meterNumber, providerCode } = req.body
    console.log(req.body)
    try{
        try {
            if(!meterNumber || !providerCode){
                return res.status(400).json({ success: false, data: '' })
            }
            console.log('HI CARD',)
            try{
                const validateCardNumber = await axios.post(
                    `${process.env.HUSSY_URL}/electricity/verify/`,
                    {
                        "provider": providerCode, 
                        "meternumber": meterNumber,
                        "metertype": "prepaid/postpaid"
                        
                    },
                    {
                        headers: {
                            "Authorization": `Token ${process.env.HUSSY_API_KEY}`,
                            "Content-Type": 'application/json',
                            "Accept" : '*/*'
                        },
                    }
                )
                const cardName = validateCardNumber.data
    
                return res.status(200).json({ success: true, data:cardName })
            } catch(error) {
                console.log('ERROR UNABLE TO GET NAME', error)
                res.end()
            }
        } catch (error) {
            console.log('UNABLE TO VERIFY SMART CARD NAME', error)
            res.status(500).json({ success: false, data: 'unable to verify smart card name' })
        }
    } catch {
        console.log('UNABLE TO VERIFY SMART CARD NAME', error)
        res.status(500).json({ success: false, data: 'unable to verify smart card name' })
    }
}