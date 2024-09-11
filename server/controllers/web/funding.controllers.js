import UserModel from "../../model/User.js";

function convertToNumber(str) {
    return parseFloat(str);
}

function isNumber(value) {
    return Number.isFinite(value);
}

export async function payWithPaystack(req, res) {
    const { _id } = req.user
    const { amount } = req.body
    try {
        const geUser = await UserModel.findById({ _id })
        const makeNumber = convertToNumber(amount)
        const isANumber = isNumber(makeNumber) 

        if(!isANumber){
            return res.status(406).json({ success: false, data: 'Invalid Amount'})
        }

    } catch (error) {
        console.log('UNABLE TO INITIALIZE PAYSTACK PAYMENT', error)
        res.status(500).json({ success: false, data: 'Unable to initailze paystack payment'})
    }
}

export async function payWithMonnify(req, res) {
    const { _id } = req.user
    const { amount } = req.body
    try {
        const geUser = await UserModel.findById({ _id })
        const makeNumber = convertToNumber(amount)
        const isANumber = isNumber(makeNumber) 

        if(!isANumber){
            return res.status(406).json({ success: false, data: 'Invalid Amount'})
        }

    } catch (error) {
        console.log('UNABLE TO INITIALIZE MONNIFY PAYMENT', error)
        res.status(500).json({ success: false, data: 'Unable to initailze monnify payment'})
    }
}