// import Axios from "axios";
const Api = require('../../models/api');
const Axios = require("axios");
const cors = require("cors");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "this is the all route" }));

router.get('/flights', function (req, res) {
    // console.log(req.query)
    const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/${req.query.country}/${req.query.currency}/${req.query.locale}/${req.query.origin}/${req.query.destination}/${req.query.outbound}/${req.query.inbound}?apikey=prtl6749387986743898559646983194`;
//  {country} /{currency} /{locale} /{origin} /{destination} /{outboundPartialDate} /{inboundPartialDate}
    Axios.get(url)
        .then(resp => res.status(201).send(resp.data))
        .catch(err => res.send(err))
    });
    
    router.get('/geo', function(req, res){
    const url = `http://partners.api.skyscanner.net/apiservices/geo/v1.0?apikey=prtl6749387986743898559646983194`;
    Axios.get(url)
    .then(resp => res.status(201).send(resp.data))
    .catch(err => res.send(401, err));
});

module.exports = router;