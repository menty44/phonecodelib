const custom = require('./service');

module.exports = (args) => {
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
    return myCountries;
};

