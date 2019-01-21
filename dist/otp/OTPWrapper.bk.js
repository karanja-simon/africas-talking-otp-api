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
const secret = 'KVKFKRCPNZQUYMLXOVYDSQKJKZDTSRLD';
// const secret = otplib.authenticator.generateSecret();
class OTPWrapper {
    constructor() {
        console.log("OTPWrapper invoked");
    }
    generateOTPCode() {
        return otplib.authenticator.generate(secret);
    }
    verifyOTPCode(token) {
        return otplib.authenticator.check(token, secret);
    }
    getOTPtimeUsed() {
        return otplib.authenticator.timeUsed();
    }
    getOTPtimeRemaining() {
        return otplib.authenticator.timeRemaining();
    }
    isOTPCodeExpired() {
        if (this.getOTPtimeRemaining() === 0)
            return true;
        return false;
    }
}
exports.OTPWrapper = OTPWrapper;
//# sourceMappingURL=OTPWrapper.bk.js.map