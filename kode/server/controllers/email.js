import { sendMail } from '../utils/sendEmail.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
//import userService from '../../client/src/utils/userService.js';
import { userService, emailService } from '../services/index.js';


export const send = catchAsyncErrors(async(req,res,next) => {
    console.log(req.body);
    const user = await userService.getUserByEmail(req.body.email);
    console.log(user);
    try {
        await sendMail({
            email: user.email,
            subject: 'Din hendvendelse',
            message: `Din hendvendelse er mottatt, og vi kontakter deg innen kort tid\n${req.body.description}`,
        });
        res.status(200).json("E-post sendt");
    } catch(error) {
        console.log(error);
    }
});

export const create = async (req, res, next) => {

    try{
        const email = await emailService.create(req.body);
        res.status(201).json(email);
    } catch (error) {
        res.status(400).json({error: 'Error creating email'})
    }
};