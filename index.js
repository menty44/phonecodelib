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


module.exports = {
    ByPhoneNumber: ByPhoneNumber,
    ByCountryCode: ByCountryCode,
    ByCountryName: ByCountryName,
};
