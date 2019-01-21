"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
    apiKey: 'b2ec6ba69021a61d7471b7cbe03ff135ab043431693e3b892abd3c9a4fc53d58',
    username: 'hollaapp',
};
const AfricasTalking = require('africastalking')(options);
class AfricasTalkingGateway {
    constructor() {
        console.log("ATGateway invoked");
        // Initialize a service e.g. SMS
        this.sms = AfricasTalking.SMS;
    }
    sendSMS(options) {
        return this.sms.send(options);
    }
    reSendSMS(options) {
        return this.sms.send(options);
    }
}
exports.AfricasTalkingGateway = AfricasTalkingGateway;
//# sourceMappingURL=AfricasTalkingGateway.bk.js.map