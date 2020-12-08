import { imageService } from '../services/index.js';
import catchAsyncError from '../middleware/catchAsync.js';
import ErrorHandler from '../utils/errorHandler.js';

export const create = catchAsyncError(async(req, res, next) =>{
    if(!req.file){
        return next(new ErrorHandler('Last opp en bildefil', 400))
    }

    const image = await imageService.uploadImage(req.file);

    res.status(201).json({
        success: true,
        data: image,
    });

});

export const get = catchAsyncError(async(req, res, next) =>{
    const image = await imageService.getImageById(req.params.id);
    if(!image){
        return next(new ErrorHandler('Noe gikk galt i henting av bilde', 404))
    }

    const imagePath = image.file_path.replace('public\\images\\','images/');
    
    res.status(200).json({
        success: true,
        data: {image, imagePath},
    });

});

