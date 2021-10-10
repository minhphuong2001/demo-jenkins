exports.upload = (req, res, next) => {
    try {
        res.send('ok');
    }
    catch (err){
        res.send("Error",err.message);
    }
}