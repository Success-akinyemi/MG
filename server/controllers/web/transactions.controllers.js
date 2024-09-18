import TransctionHistroyModel from "../../model/TransactionHistroy.js"
import PDFDocument from 'pdfkit';
import fs from 'fs';
import UserModel from "../../model/User.js";


//FETCH ALL USER TRANSCATIONS
export async function fetchAllUserTransactions(req, res) {
    const { _id } = req.user
    try {
        const getAllTransctions = await TransctionHistroyModel.find({ userId: _id }).select('-amount')

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
        const getTransction = await TransctionHistroyModel.findById({ _id: id }).select('-amount')

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

//DOWNLOAD TRANSACTION RECIEPT
export async function downloadReciept(req, res) {
    const { id } = req.body
    try {
        const findTransaction = await TransctionHistroyModel.findOne({ transactionId: id })
        
        if(!findTransaction){
            res.status(404).json({ success: false, data: 'Transaction not found'})
        }
        const findUser = await UserModel.findOne({ email: findTransaction.email })

         // Create a new PDF document using pdfkit
         const outputFilePath = `receipt-${findTransaction.transactionId}.pdf`; // Define output file path
         const outputFileName = `transaction_receipt_${findTransaction.transactionId}.pdf`;
 
         const doc = new PDFDocument({ size: [164, 365], margin: 4 });
         const stream = fs.createWriteStream(outputFilePath);
         doc.pipe(stream);
 
         // Add content to the PDF
         doc.font('Times-Roman')
             .fontSize(12)
             .text('SUBSSUM TRANSACTION RECEIPT', { align: 'center' });
 
         doc.font('Times-Roman')
             .fontSize(10) 
             .text(`Receipt: ${findTransaction.transactionId}`, { align: 'center' })
             //.text(`Date: ${booking.preparedby}`, { align: 'center' });
         
         doc.moveDown(0.7);
         doc.font('Times-Roman')
             .fontSize(11)
             .text('Customer Name:', { align: 'left' })
             .text(`Name: ${findUser.firstName ? findUser.firstName : ''} ${findUser.lastName ? findUser.lastName : ''}`)
             .text(`Service: ${findTransaction.service}`)
             .text(`Platform: ${findTransaction.platform}`)
             .text(`Number: ${findTransaction.number}`)
             .text(`Amount: ${findTransaction.totalAmount}`)
             .text(`Status: ${findTransaction.status}`)
             .text(`Payment Method: ${findTransaction.paymentMethod}`)
             .text(`Transaction Id: ${findTransaction.transactionId}`)
             
             
             
         doc.moveDown(2);
         doc.font('Times-Roman')
             .fontSize(9)
             .text('Built and powered by:', { align: 'center' })
             .text('Fresh Tech Innovation ltd', { align: 'center' })

         doc.end();
 
 
         // Wait for the stream to finish writing
         stream.on('finish', () => {
             try {
             // Read the file content synchronously
             const pdfBuffer = fs.readFileSync(outputFilePath);
         
             // Set appropriate headers for PDF
             res.setHeader('Content-Type', 'application/pdf');
             res.setHeader('Content-Disposition', `attachment; filename="${outputFileName}"`);
         
             // Send the PDF content in the response
             res.send(pdfBuffer);
         
             // Optionally, delete the file after sending
             fs.unlinkSync(outputFilePath);
             console.log('PDF sent to the client successfully');
             } catch (readFileError) {
             console.error('Error reading PDF file:', readFileError);
             res.status(500).json({ success: false, data: 'Could not read the PDF file' });
             }
         });


    } catch (error) {
        console.log('UNABLE TO DOWNLOAD TRANSACTION RECIEPT', error)
        res.status(500).json({ success: false, data: 'Unable to generate transaction reciept'})
    }
}

//UPDTAE USER TRANSACTIONS