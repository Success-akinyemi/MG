import fetch from 'node-fetch'; 
import TransctionHistroyModel from '../../model/TransactionHistroy.js';
import DataPlansModel from "../../model/DataPlans.js"

//buy airtime with logging
export async function quickBuyAirtime(req, res){
    const { amount, phoneNumber, email, networkCode, networkName, transactionId, status } = req.body
    const { amountPaid, transcationRef } = req.paymentDetails
    try {
        let fullAmount
        fullAmount = Math.ceil(Number(Number(amountPaid) - ((amountPaid * 1.5) / 100) ))
        if(Number(fullAmount) < Number(amount)){
            console.log('first aa1', fullAmount, amount)
            return res.status(406).json({ success: false, data: 'Invalid amount sent' })
        }
        if(Number(amount) >= 2400){
            fullAmount = Math.ceil(Number(Number(amountPaid) - ((amountPaid * 1.5) / 100) ) - 100)
        }
        console.log('first aa3', fullAmount, amount)

        let finalAmount = Number(fullAmount) < Number(amount) ? Number(fullAmount) : Number(amount)

        const data = {
            network: networkCode,
            mobile_number: phoneNumber,
            amount: finalAmount,
            airtime_type: 'VTU',
            Ported_number: true
        };

        // Make the POST request with fetch
        const response = await fetch(`${process.env.HUSMODATA_URL}/topup/`, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${process.env.HUSMODATA_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const runBuyAirtime = await response.json();
        
        const airtimeResponse = runBuyAirtime;
        console.log('RESS', airtimeResponse)

        // Create new transaction
        const newTransaction = await TransctionHistroyModel.create({
            userId: email,
            email: email,
            service: `${networkName} airtime VTU`,
            platform: networkName,
            number: phoneNumber,
            amount: finalAmount,
            totalAmount: finalAmount,
            status: status,
            paymentMethod: 'Paystack',
            transactionId: transactionId,
            serviceId: transcationRef,
            slug: 'Airtime',
            isUserLogin: false
        });

        if (airtimeResponse.Status === 'successful') {
            newTransaction.amount = airtimeResponse.paid_amount,
            newTransaction.status = airtimeResponse.Status,
            newTransaction.serviceId = airtimeResponse.id,

            await newTransaction.save()

            const { amount, ...transactionData } = newTransaction._doc;
            return res.status(206).json({
                success: true,
                msg: `NGN${airtimeResponse.amount} ${airtimeResponse.plan_network} Airtime purchase successful`,
                data: { success: true, data: `NGN${airtimeResponse.amount} ${airtimeResponse.plan_network} Airtime purchase successful` },
                transaction: transactionData
            });
        } else {
            newTransaction.status = 'Failed',
            await newTransaction.save()

            console.log('QUICK BUY AIRTIME ERROR FROM API>>', error)
            return res.status(406).json({ success: false, data: 'Airtime purchase failed' });
        }

    } catch (error) {
        console.log('QUICK BUY AIRTIME ERROR>>', error)
        res.status(500).json({ success: false, data: 'Airtime purchase failed'})    
    }
}

//buy data with logging
export async function quickBuyData(req, res){
    const { networkCode, phoneNumber, planId, planName, transactionId, status } = req.body
    const { amountPaid, transcationRef } = req.paymentDetails
    try {
        const dataPlan = await DataPlansModel.findById({ _id: planId })
        if(!dataPlan){
            console.log('DATA PLAN COULD NOT BE FOUND')
            res.status(406).end()
        }

        let fullAmount
        fullAmount = Math.ceil(Number(Number(amountPaid) - ((amountPaid * 1.5) / 100) ))
        if(Number(fullAmount) < Number(amount)){
            console.log('first aa1', fullAmount, amount)
            return res.status(406).json({ success: false, data: 'Invalid amount sent' })
        }
        if(Number(amount) >= 2400){
            fullAmount = Math.ceil(Number(Number(amountPaid) - ((amountPaid * 1.5) / 100) ) - 100)
        }
        console.log('first aa3', fullAmount, amount)


        if(dataPlan.price > fullAmount){
            return res.status(406).json({ success: false, data: 'Insufficient Funds Transfered' })
        }

        const getData = await axios.post(
            `${process.env.HUSMODATA_URL}/data/`,
            {
                "network": dataPlan?.networkCode,
                "mobile_number": phoneNumber,
                "plan": dataPlan?.dataCode,
                "Ported_number": true
            },
            {
                headers: {
                    "Authorization": `Token ${process.env.HUSMODATA_API_KEY}`,
                    "Content-Type": 'application/json',
                    "Accept" : '*/*'
                },
            }
        )

        // Create new transaction
        const newTransaction = await TransctionHistroyModel.create({
            userId: email,
            email: email,
            service: `${dataPlan?.planName} data`,
            platform: dataPlan.networkName,
            number: phoneNumber,
            amount: dataPlan.price,
            totalAmount: dataPlan.price,
            status: status,
            paymentMethod: 'Paystack',
            transactionId: transactionId,
            serviceId: transactionId,
            slug: 'Data',
            isUserLogin: false
        });

        const dataResponse = getData?.data
        if (dataResponse.Status === 'successful') {
            newTransaction.service = `${dataResponse?.plan_name} ${dataResponse?.plan_network} data`
            newTransaction.amount = dataResponse.plan_amount
            newTransaction.totalAmount = dataPlan.price
            newTransaction.status = dataResponse.Status
            newTransaction.platform = dataResponse.plan_network
            newTransaction.serviceId = dataResponse.id
            await newTransaction.save()

            const { amount, ...transactionData } = newTransaction._doc;
            return res.status(206).json({
                success: true,
                msg: `${dataResponse.plan_name} ${dataResponse.plan_network} Data purchase successful`,
                data: { success: true, data: `${dataResponse.plan_name} ${dataResponse.plan_network} Data purchase successful` },
                transaction: transactionData
            });
        } else {
            newTransaction.status = 'Failed',
            await newTransaction.save()

            console.log('QUICK BUY DATA ERROR FROM API>>', error)
            return res.status(406).json({ success: false, data: 'Data purchase failed' });
        }

    } catch (error) {
        console.log('first', error)
        res.status(500).json({ success: false, data: ''})   
    }
}

//buy cableTv with logging
export async function quickBuyCableTv(req, res){
    const { amountPaid, transcationRef, status} = req.paymentDetails
    try {
        
    } catch (error) {
        console.log('first', error)
        res.status(500).json({ success: false, data: ''})   
    }
}

//buy electricity with logging
export async function quickBuyElectricity(req, res){
    const { amountPaid, transcationRef, status} = req.paymentDetails
    try {
        
    } catch (error) {
        console.log('first', error)
        res.status(500).json({ success: false, data: ''})   
    }
}
