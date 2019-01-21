"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PhoneNumber = require('awesome-phonenumber');
exports.getISOPhoneNo = (number) => {
    const phoneNumber = new PhoneNumber(number, 'KE');
    return phoneNumber.getNumber('e164');
};
//# sourceMappingURL=Utils.js.map