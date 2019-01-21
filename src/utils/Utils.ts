
const PhoneNumber = require( 'awesome-phonenumber' );

export let getISOPhoneNo = (number: string): string => {
    const phoneNumber = new PhoneNumber( number, 'KE' );
    return phoneNumber.getNumber( 'e164' );
};