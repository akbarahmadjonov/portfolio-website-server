"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
// CLOUDINARY
const cloudinary_1 = require("cloudinary");
cloudinary_1.v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const upload = async (file) => {
    const image = await cloudinary_1.v2.uploader.upload(file, (result) => result);
    return image;
};
exports.upload = upload;
