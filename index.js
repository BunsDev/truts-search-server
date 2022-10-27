const express = require("express");
const dotenv = require("dotenv");
const compression = require("compression");
const cors = require("cors");
const mongoose = require("mongoose");
const stringSimilarity = require("string-similarity");

dotenv.config();
const app = express();
const corsConfig = {
    origin: true,
    credentials: true,
};

app.use(cors(corsConfig));
app.use(compression());
const mongoDB = process.env.MONGODB_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

//import models

let Dao = require('./models/Dao');

/*_____________________ */

const DAO_STORE_INIT = () => {

    let daos = [];
    let daosNameArray = [];

    const getDaos = () => {
        return daos;
    }

    const getDaosNameList = () => {
        return daosNameArray
    }

    const updateCache = async () => {
        let result = await Dao.find({});
        daos = result;
        console.log(' ---DAO cache updated---');

        // create dao name array
        daosNameArray = daos.map((ele) => {
            return ele.dao_name;
        })
    }

    updateCache();

    return { getDaos, getDaosNameList, updateCache }
}

let DAO_STORE = DAO_STORE_INIT();

setTimeout(() => {
    DAO_STORE.getDaosNameList();
}, 2000)

app.get('/', (req, res) => {
    res.status(200).send("server running");
})

app.get('/update', async (req, res) => {
    await DAO_STORE.updateCache()
    res.status(200).send("update complete");
})

app.get('/search', (req, res) => {
    let term = req.query.term;
    stringSimilarity.findBestMatch
    let { ratings, bestMatch, bestMatchIndex } = stringSimilarity.findBestMatch(term, DAO_STORE.getDaosNameList());
    res.send(ratings.sort((a, b) => b.rating - a.rating).splice(0, 10))
})

const port = process.env.PORT;
db.once("open", function () {
    console.log("DB Connected!");
    app.listen(port, () => {
        console.log("Server is up and running on port number " + port);
    });
});
