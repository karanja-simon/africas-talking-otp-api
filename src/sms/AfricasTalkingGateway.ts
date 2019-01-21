
import config from './../config/config.json';

const options = {
    apiKey: config.api_key,
    username: config.username,
};

const AfricasTalking = require('africastalking')(options);

const sms = AfricasTalking.SMS;

export let sendSMS = (options: Object): Promise<any> => {
    return sms.send(options);
};

export let reSendSMS = (options: Object): Promise<any> => {
    return sms.send(options);
};