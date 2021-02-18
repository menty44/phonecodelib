const custom = require('./service');

module.exports = (args) => {
    return {
        ByPhoneNumber: new
            custom.getByPhoneNumber(args),

        ByCountryCode: new
            custom.getByCountryCode(args),

        ByCountryName: new
            custom.getByCountryName(args)
    };
};

