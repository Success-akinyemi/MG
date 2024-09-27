import axios from 'axios'
import TransctionHistroyModel from '../../model/TransactionHistroy.js';

export async function checkAirtime2CashAvailbe(req, res){
    //console.log('CHECK AVAI', req.body)
    const { networkCode, networkName, phoneNumber, amount, status, totalAmount, transactionId } = req.body
    const { _id, email } = req.user
    try {
        if(!networkCode || !phoneNumber || !amount || !transactionId){
            return res.status(400).json({ success: false, data: 'Please Fill all Input Feilds'})
        }
        const mobileRegex = /^(090|091|080|081|070|071)\d{8}$/;
        
        if (!mobileRegex.test(phoneNumber)) {
            return res.status(400).json({ success: false, data: 'Invalid phone number' });
        }

        let networkValue
        let totalValue
        if(networkCode === '1'){
            networkValue = 'mtn'
            totalValue = Number(amount) - (( 35 * Number(amount) ) / 100)
        }
        if(networkCode === '2'){
            networkValue = 'glo'
            totalValue = Number(amount) - (( 50 * Number(amount) ) / 100)
        }        
        if(networkCode === '3'){
            networkValue = '9mobile'
            totalValue = Number(amount) - (( 50 * Number(amount) ) / 100)
        }        
        if(networkCode === '4'){
            networkValue = 'airtel'
            totalValue = Number(amount) - (( 40 * Number(amount) ) / 100)
        }

        //make a api call to check availablity
        const checkAvailability = await axios.post(
            `${process.env.VTU_AFRIC_URL}/merchant-verify/?apikey=${process.env.VTU_AFRIC_API_KEY}&serviceName=Airtime2Cash&network=${networkValue}`
        )

        const response = checkAvailability.data
        console.log('IS AVAIL',response)
        if(response.description.Status === 'Completed'){
            const newTransaction = await TransctionHistroyModel.create({
                userId: _id,
                email: email,
                service: 'Airtime to Cash',
                platform: networkName,
                number: phoneNumber,
                amount: amount,
                totalAmount: totalValue,
                status: status,
                paymentMethod: 'Airtime Transfer',
                transactionId: transactionId,
                serviceId: transactionId
            })

            return res.status(200).json({ success: true, data: response.description })
        }
        //on success send msg to client, create temporary airtime2cash db, create a transaction histroy
        //on fail send error msg to client.

        res.status(200).json({ 
            success: true, 
            data: {
                Status: 'Unavailble',
                Phone_Number: '',
                Network: '',
                message: `${networkName} Airtime to cash is Not Availble. Kindly try again after a while`
            } 
        })
    } catch (error) {
        console.log('UNABLE TO CONVERT AIRTIME TO CASH', error)
        res.status(500).json({ success: false, data: error.message || 'Unable to convert airtime to cash'})
    }
}

export async function validateAirtimeTransfer(req, res) {
    const { transactionId } = req.body
    const { _id } = req.user
    try {
        
    } catch (error) {
        console.log('UNABLE TO VALIDATE AIRTME TRANSFER', error)
        res.status(500).json({ success: false, data: 'Unable to validate transafer' })
    }
}

//Handle webhook