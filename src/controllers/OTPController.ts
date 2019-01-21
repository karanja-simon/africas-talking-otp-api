import {Request, Response} from 'express';
import * as OTPWrapper from '../otp/OTPWrapper';
import * as AfricasTalkingGateway from '../sms/AfricasTalkingGateway';
import * as Util from './../utils/Utils';

class OTPController {

    constructor() { }

    public getOTPCode(req: Request, res: Response): void {
        const phoneNo = req.body.phoneNo;
        const otpCode = OTPWrapper.generateOTPCode();
        const isoPhoneNo = Util.getISOPhoneNo(phoneNo);
        const smsOptions = {
            to: [isoPhoneNo],
            message: `Your verification code is ${otpCode}. This code expires in 3 minutes.`
        };

        console.log(smsOptions);

        AfricasTalkingGateway.sendSMS(smsOptions).then((response) => {
            res.status(200).json({success: true, message: 'OTP code sent'}) ;
        }).catch((err) => {
            res.status(200).json({success: false, message: 'Unable to send OTP code'});
        });

    }

    public verifyOTPCode(req: Request, res: Response): void {
        const otpCode: string = req.body.otpCode;
        let verifyMsg: string = '';
        let isOTPValid: boolean;

        if (OTPWrapper.verifyOTPCode(otpCode)) {
            verifyMsg  = 'OTP code valid';
            isOTPValid = true;
        } else {
            verifyMsg  = 'OTP code invalid';
            isOTPValid = false;
        }

        res.status(200).json({isOTPCodeValid: isOTPValid, verificationMsg: verifyMsg});
    }

    public getOTPTimeUsed(req: Request, res: Response): void {
        res.status(200).json({success: true, otpTimeUsed: OTPWrapper.getOTPtimeUsed()});
    }


    public getOTPTimeRemaining(req: Request, res: Response): void {
        res.status(200).json({success: true, otpTimeRemaining: OTPWrapper.getOTPtimeRemaining()});
    }

}

export {OTPController};