/**
 * Services er satt opp basert på Marius Wallins' forelesninger 
 * gjennom semestert, men blitt modifisert for prosjektet. 
 * Denne er hentet direkte fra Marius Wallins' leksjon 13
 */

import Image from '../models/image.js';

export const uploadImage = async (data) => {
    const image = new Image({
        file_path: data.path,
        file_mimetype: data.mimetype,

    });
    const savedImage = await image.save();
    return savedImage;
}

export const getImageById = async (id) => Image.findById(id);