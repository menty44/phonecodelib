const custom = require('./service');

let myCountries = {
    ByPhoneNumber: function (phone) {
        custom.getByPhoneNumber(phone);
    },

    ByCountryCode: function (countryCode) {
        custom.getByCountryCode(countryCode);
    },

    ByCountryName: function (CountryName) {
        custom.getByCountryName(CountryName);
    }
}


module.exports = myCountries;

