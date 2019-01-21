"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const OTPController_1 = require("../controllers/OTPController");
class Routes {
    constructor() {
        this.router = express_1.Router();
        this.otpCtlr = new OTPController_1.OTPController();
        this.routes();
    }
    // Authentication & Authorization required for the API
    // requests below.
    routes() {
        this.router.post('otp/', this.otpCtlr.getOTPCode);
        this.router.post('otp/verify', this.otpCtlr.verifyOTPCode);
        this.router.get('otp/time/elapsed', this.otpCtlr.getOTPTimeUsed);
        this.router.get('otp/time/remaining', this.otpCtlr.getOTPTimeRemaining);
    }
}
exports.default = new Routes().router;
//# sourceMappingURL=Routes.js.map