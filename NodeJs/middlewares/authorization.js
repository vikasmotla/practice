const authorization = (req, res, next) => {
    console.log('auth code here');
    // throw new Error('BROKEN');
    next();
};

module.exports = authorization;