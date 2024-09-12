import mongoose from "mongoose";

const TransctionHistroySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'User id is required']
    },
    email: {
        type: String,
        required: [true, 'User Email Address is required']
    },
    service: {
        type: String,
        required: [true, 'Type of Service is required']
    },
    number: {
        type: String,
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    totalAmount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['Initiated', 'Successful', 'Failed']
    },
    paymentMethod: {
        type: String
    },
    transactionId: {
        type: String,
        unique: [true, 'Transaction with this Id already Exist']
    },
    credit: {
        type: Boolean
    }
},
{
    timestamps: true
}
)

const TransctionHistroyModel = mongoose.model('transactionHistroy', TransctionHistroySchema)
export default TransctionHistroyModel