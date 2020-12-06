import { sendMail } from '../utils/sendEmail.js';
import catchAsyncErrors from '../middleware/catchAsync.js';


export const send = catchAsyncErrors(async(req,res,next) => {
    try {
        await sendMail({
            email: user.email,
            subject: 'Din hendvendelse',
            message: 'Din hendvendelse er mottatt, og vi kontakter deg innen kort tid',
        });
    } catch(error) {
        console.log(error);
    }
})