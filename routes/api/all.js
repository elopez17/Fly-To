// import Axios from "axios";
const Axios = require("axios");
const cors = require("cors");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "this is the all route" }));

router.get('/flights', function (req, res) {
    // console.log(req.query)
    const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/${req.query.country}/${req.query.currency}/${req.query.locale}/${req.query.origin}/${req.query.destination}/${req.query.outbound}/${req.query.inbound}?apikey=prtl6749387986743898559646983194`;
    console.log("WE ARE IN BACK END ------")
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}
    Axios.get(url)
        .then(resp => res.send(201, resp.data))
        .catch(err => res.send(err))
})

module.exports = router;