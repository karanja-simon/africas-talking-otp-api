import * as otplib from 'otplib';

const secret = otplib.authenticator.generateSecret();

// Configure otplib settings
otplib.authenticator.options = {
    step: 3000,
    window: 1
};

export let generateOTPCode = (): string => {
    return otplib.authenticator.generate(secret);
};

export let verifyOTPCode = (token: string): boolean => {
    return otplib.authenticator.check(token, secret);
};

export let getOTPtimeUsed = (): number => {
    return otplib.authenticator.timeUsed();
};

export let getOTPtimeRemaining = (): number => {
    return otplib.authenticator.timeRemaining();
};

export let isOTPExpired = () => {

};

export let isOTPCodeExpired = (): boolean => {
    if (this.getOTPtimeRemaining() === 0)
        return true;
    return false;
};
