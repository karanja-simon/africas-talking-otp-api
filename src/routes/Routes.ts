import {Router} from 'express';
import {OTPController} from '../controllers/OTPController';

class Routes {
    router: Router;
    otpCtlr: OTPController;

    constructor() {
        this.router = Router();
        this.otpCtlr = new OTPController();
        this.routes();
    }

    // Authentication & Authorization required for the API
    // requests below.
    private routes(): void {
        this.router.post('otp/', this.otpCtlr.getOTPCode);
        this.router.post('otp/verify', this.otpCtlr.verifyOTPCode);
        this.router.get('otp/time/elapsed', this.otpCtlr.getOTPTimeUsed);
        this.router.get('otp/time/remaining', this.otpCtlr.getOTPTimeRemaining);
    }
}

export default new Routes().router;