import TransctionHistroyModel from "../../model/TransactionHistroy.js";
import UserModel from "../../model/User.js";
import axios from 'axios'

export async function buyAirtime(req, res){
    //console.log('DATA BODY', req.body)
    const { networkCode, phoneNumber, amount, transactionId, networkName, totalAmount, status } = req.body
    const { _id, email } = req.user
    try {
        const mobileRegex = /^(090|080|070)\d{8}$/;
        if (!mobileRegex.test(phoneNumber)) {
            return res.status(400).json({ success: false, data: 'Invalid phone number' });
        }
        const getUser = await UserModel.findById({ _id: _id})

        if(amount < 50){
            return res.status(406).json({ success: false, data: 'Minimium airtime purchase amount is 50' })
        }

        if(amount > getUser.acctBalance){
            return res.status(406).json({ success: false, data: 'Insufficient Wallet Balance' })
        }

        const data = {
          network: networkCode,
          mobile_number: phoneNumber,
          amount: amount,
          airtime_type: 'VTU',
          Ported_number: true
        };

        const config = {
          headers: {
            'Authorization': `Token ${process.env.HUSMODATA_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }

        const runBuyAirtime = await axios.post(`${process.env.HUSMODATA_URL}/topup`, data, config)
        
        const airtimeResponse = runBuyAirtime?.data?.results[0]

        if(airtimeResponse.Status === 'successful'){

            //DEBIT USER
            getUser.acctBalance -= totalAmount
            await getUser.save()

            //New Transaction
            const newTransaction = await TransctionHistroyModel.create({
                userId: _id,
                email: email,
                service: `${airtimeResponse.plan_network} airtime ${airtimeResponse.airtime_type}`,
                platform: airtimeResponse.plan_network,
                number: airtimeResponse.mobile_number,
                amount: airtimeResponse.paid_amount,
                totalAmount: airtimeResponse.amount,
                status: airtimeResponse.Status,
                paymentMethod: 'Wallet',
                transactionId: transactionId,
                serviceId: airtimeResponse.id
            })
            //console.log('DATA', getUser)
            console.log('AIRTIME RESPONSE FROM HUSMODATA AIRTIME API>>',runBuyAirtime.data)

            const { amount, ...transactionData } = newTransaction._doc;
            const { resetPasswordToken, resetPasswordExpire, password: hashedFinalPassword, pin, ...userData } = getUser._doc
            return res.status(206).json({ 
                                            success: true, 
                                            msg: `NGN${airtimeResponse.amount} ${airtimeResponse.plan_network} Airttime purchase successful`,
                                            data: { success: true, data: userData },
                                            transaction: transactionData
                                        })
        }


        console.log('AIRTIME RESPONSE FROM HUSMODATA AIRTIME API>>',runBuyAirtime.data)
        console.log('DATA', getUser)
        res.status(200).json({ success: true, data: '' })
    } catch (error) {
        console.log('UNABLE TO BUY DATA', error)
        res.status(500).json({ success: false, data: error.message || 'Unable to buy data'})
    }
}