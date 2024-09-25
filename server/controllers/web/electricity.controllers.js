export async function buyElectricBill(params) {
    const { _id, email } = req.user
    try {
        
    } catch (error) {
        console.log('UNABLE TO BUY ELECTRIC BILL', error)
        res.status(500).json({ success: false, data: 'Unable to buy electric bill'})
    }
}

export async function validateMeterNumber(res, req){
    const { meterNumber, providerCode } = req.body
    try{
        try {
            if(!meterNumber || !providerCode){
                return res.status(400).json({ success: false, data: '' })
            }
            console.log('HI CARD', id, number)
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