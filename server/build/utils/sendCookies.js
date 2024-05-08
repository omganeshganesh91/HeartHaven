"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLoginCookie = exports.sendOtpCookie = void 0;
const sendOtpCookie = (res, token, phoneNumber) => {
    const expiration = new Date(new Date().getTime() + 5 * 60 * 1000);
    res.cookie("otpToken", token, {
        expires: expiration,
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: `Otp send to ${phoneNumber}`,
    });
};
exports.sendOtpCookie = sendOtpCookie;
const sendLoginCookie = (res, token) => {
    const expiration = new Date(new Date().getTime() + 2 * 60 * 60 * 1000); // 2 hours in milliseconds
    res.cookie("jwtAutToken", token, {
        expires: expiration,
        httpOnly: true,
    });
    res.status(200).json({
        success: true,
        message: `Logged In Successfully 😎 `,
    });
};
exports.sendLoginCookie = sendLoginCookie;
