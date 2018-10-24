// import Axios from "axios";
const Axios = require("axios");
const cors = require("cors");
const express = require("express");
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: "this is the all route" }));

router.get('/flights', function (req, res) {
    // res.send(201, res.body);
    console.log("CALLING API")
    const url = `http://partners.api.skyscanner.net/apiservices/browsequotes/v1.0/US/usd/en-US/us/us/anytime/anytime?apikey=prtl6749387986743898559646983194`;
    // const url = "localhost:5000/all/test"
    Axios.get(url)
        .then(resp => res.send(resp.data))
        // .then(resp => console.log(Object.keys(resp.data)))
        .then(console.log("Calling setstate."))
        .catch(err => console.log(err))
})

module.exports = router;