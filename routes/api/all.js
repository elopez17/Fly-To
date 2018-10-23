
const express = require("express");
const router = express.Router();

const cors = require("cors");
const corsOptions = {
    origin: 'http://example.com',
    optionsSuccessStatus: 200
}

const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(cors(corsOptions));


router.get("/test", (req, res) => res.json({ msg: "this is the all route" }));

// function callAPI(){
//     return $.ajax({
//     method: "GET",
//     url: `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/us/anytime/anytime?apikey=prtl6749387986743898559646983194`,
//     data: data
//     }).then( data => console.log(data))

// }


router.get('/flights', function (req, res) {
    res.send(201, res.body);
})



module.exports = router;