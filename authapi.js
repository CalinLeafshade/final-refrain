module.exports = function(req,res,next) {
    if (req.headers['Authorization'] != "HOWDY") {
        res.status(403).end();
    }
    else {
        next();
    }
}