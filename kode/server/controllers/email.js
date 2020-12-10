/**
 * Controllerne brukt i prosjektet er basert på de vi har lært fra Marius Wallins' forelesning 'Leksjon 11', 'Leksjon 13' og 'Leksjon 14'.
 */
import { sendMail } from '../utils/sendEmail.js';
import catchAsyncErrors from '../middleware/catchAsync.js';
import { userService, emailService } from '../services/index.js';


export const send = catchAsyncErrors(async(req,res,next) => {
    const {email} = req.body;
    const user = await userService.getUserByEmail({ email });
    try {
        await sendMail({
            email: user.email,
            name: user.name,
            subject: 'Din hendvendelse',
            message: `Din hendvendelse er mottatt, og vi kontakter deg innen kort tid\n${req.body.message}`,
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

export const list = async (req,res,next) => {
    const result = await emailService.list();
    res.status(200).json(result)
}