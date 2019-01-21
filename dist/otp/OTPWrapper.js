"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const otplib = __importStar(require("otplib"));
const secret = otplib.authenticator.generateSecret();
// Configure otplib settings
otplib.authenticator.options = {
    step: 3000,
    window: 1
};
exports.generateOTPCode = () => {
    return otplib.authenticator.generate(secret);
};
exports.verifyOTPCode = (token) => {
    return otplib.authenticator.check(token, secret);
};
exports.getOTPtimeUsed = () => {
    return otplib.authenticator.timeUsed();
};
exports.getOTPtimeRemaining = () => {
    return otplib.authenticator.timeRemaining();
};
exports.isOTPExpired = () => {
};
exports.isOTPCodeExpired = () => {
    if (this.getOTPtimeRemaining() === 0)
        return true;
    return false;
};
//# sourceMappingURL=OTPWrapper.js.map