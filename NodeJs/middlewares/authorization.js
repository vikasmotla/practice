const authorization = (req, res, next) => {
    console.log('auth code here');
    next();
};

module.exports = authorization;