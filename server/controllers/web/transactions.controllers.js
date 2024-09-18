import TransctionHistroyModel from "../../model/TransactionHistroy.js"


//FETCH ALL USER TRANSCATIONS
export async function fetchAllUserTransactions(req, res) {
    const { _id } = req.user
    try {
        const getAllTransctions = await TransctionHistroyModel.find({ userId: _id })

        res.status(200).json({ success: true, data: getAllTransctions })
    } catch (error) {
        console.log('UNABLE TO FETCH ALL TRANSACTIONS')
        res.status(500).json({ success: false, data: error.message || 'Unable to get all transactions'})
    }
}

//FETCH A TRANSACTION OF A USER
export async function fetchAUserTransaction(req, res) {
    const { _id } = req.user
    const { id } = req.params
    try {
        const getTransction = await TransctionHistroyModel.findById({ _id: id })

        if(getTransction.userId.toString() !== _id.toString()){
            return res.status(403).json({ success: false, data: 'Not allowed to fetch transaction details' })
        }
        console.log('first', getTransction)
        res.status(200).json({ success: true, data: getTransction })
    } catch (error) {
        console.log('UNABLE TO THE TRANSACTIONS')
        res.status(500).json({ success: false, data: error.message || 'Unable to get all transactions'})
    }
}

//UPDTAE USER TRANSACTIONS