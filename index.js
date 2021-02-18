const myCountries = require('./countries');

let countries = myCountries.data;

function getByPhoneNumber(phone) {

    for (let i = 0; i < countries.length; i++) {
        if (phone.startsWith(countries[i].phonecode)) {
            return countries[i];
        }
    }
}

function getByCountryCode(countryCode) {

    for (let i = 0; i < countries.length; i++) {
        if (countryCode.toUpperCase().startsWith(countries[i].iso)) {
            return countries[i];
        }
    }
}

function getByCountryName(CountryName) {

    for (let i = 0; i < countries.length; i++) {
        if (CountryName.toUpperCase().startsWith(countries[i].name)) {
            return countries[i];
        }
    }
}


module.exports = {
    getByPhoneNumber: getByPhoneNumber,
    getByCountryCode: getByCountryCode,
    getByCountryName: getByCountryName,
};
