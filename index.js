const custom = require('./service');

function ByPhoneNumber(phone) {
    custom.getByPhoneNumber(phone);
}

function ByCountryCode(countryCode) {
    custom.getByCountryCode(countryCode);
}

function ByCountryName(CountryName) {
    custom.getByCountryName(CountryName);
}


//Exports
module.exports.ByPhoneNumber= ByPhoneNumber;
module.exports.ByCountryCode= ByCountryCode;
module.exports.ByCountryName= ByCountryName;
