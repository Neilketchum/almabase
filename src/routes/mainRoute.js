const express = require('express')
const router = express.Router();
router.get('/almabase-task/:name', function (req, res) {
    response = {}
    if (req.params.name != null && req.params.name.length > 0) {
        response.message = "Happy Birthday , " + req.params.name + " !";
        response.success = true;
        return res.status(200).json(response);
    } else {
        response.message = "Our servers are downs please try again later.";
        response.success = false;
        return res.status(400).json(response);
    }
});
router.get('/almabase-task/', function (req, res) {
    response = {}
    response.message = "URL parameter name is missing";
    response.success = false;
    return res.status(400).json(response);
});
module.exports = router