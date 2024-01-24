const logger = (req, res, next) => {
    console.log(`All Request comes here`);
    next();
};

module.exports = logger;