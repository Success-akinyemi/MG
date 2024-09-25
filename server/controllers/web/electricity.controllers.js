export async function buyElectricBill(params) {
    const { _id, email } = req.user
    try {
        
    } catch (error) {
        console.log('UNABLE TO BUT ELECTRIC BILL', error)
        res.status(500).json({ success: false, data: 'Unable to buy electric bill'})
    }
}

export async function validateMeterNumber(res, res){
    try{

    } catch {

    }
}