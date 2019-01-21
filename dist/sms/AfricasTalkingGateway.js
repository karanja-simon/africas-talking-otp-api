"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("./../config/config.json"));
const options = {
    apiKey: config_json_1.default.api_key,
    username: config_json_1.default.username,
};
const AfricasTalking = require('africastalking')(options);
const sms = AfricasTalking.SMS;
exports.sendSMS = (options) => {
    return sms.send(options);
};
exports.reSendSMS = (options) => {
    return sms.send(options);
};
//# sourceMappingURL=AfricasTalkingGateway.js.map