const handleError = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: 'Something is wrong!' });
};

module.exports = handleError;