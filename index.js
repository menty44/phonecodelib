const custom = require('./service');

module.exports = (args) => {
    return {
        ByPhoneNumber: custom.getByPhoneNumber(args),

        ByCountryCode: custom.getByCountryCode(args),

        ByCountryName: custom.getByCountryName(args)
    };
};

