 const cors = function (req, res, next) {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Headers', 'Content-Type');
     res.header('Access-Control-Allow-Methods','*');
     res.header("Content-Type", "application/json");
     res.header('Access-Control-Allow-Credentials', 'true'); //允许接受跨域cookie
     if(req.method == "OPTIONS")res.status(200).send('allow');
     else next();
 };
 module.exports = cors;