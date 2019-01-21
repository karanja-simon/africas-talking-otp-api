"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const OTPWrapper = __importStar(require("../otp/OTPWrapper"));
const AfricasTalkingGateway = __importStar(require("../sms/AfricasTalkingGateway"));
const Util = __importStar(require("./../utils/Utils"));
class OTPController {
    constructor() { }
    getOTPCode(req, res) {
        const phoneNo = req.body.phoneNo;
        const otpCode = OTPWrapper.generateOTPCode();
        const isoPhoneNo = Util.getISOPhoneNo(phoneNo);
        const smsOptions = {
            to: [isoPhoneNo],
            message: `Your verification code is ${otpCode}. This code expires in 3 minutes.`
        };
        console.log(smsOptions);
        AfricasTalkingGateway.sendSMS(smsOptions).then((response) => {
            res.status(200).json({ success: true, message: 'OTP code sent' });
        }).catch((err) => {
            res.status(200).json({ success: false, message: 'Unable to send OTP code' });
        });
    }
    verifyOTPCode(req, res) {
        const otpCode = req.body.otpCode;
        let verifyMsg = '';
        let isOTPValid;
        if (OTPWrapper.verifyOTPCode(otpCode)) {
            verifyMsg = 'OTP code valid';
            isOTPValid = true;
        }
        else {
            verifyMsg = 'OTP code invalid';
            isOTPValid = false;
        }
        res.status(200).json({ isOTPCodeValid: isOTPValid, verificationMsg: verifyMsg });
    }
    getOTPTimeUsed(req, res) {
        res.status(200).json({ success: true, otpTimeUsed: OTPWrapper.getOTPtimeUsed() });
    }
    getOTPTimeRemaining(req, res) {
        res.status(200).json({ success: true, otpTimeRemaining: OTPWrapper.getOTPtimeRemaining() });
    }
}
exports.OTPController = OTPController;
//# sourceMappingURL=OTPController.js.map