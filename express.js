const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { Timestamp } = require('mongodb');

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile("entry.html", { root: __dirname + "/public" });
});

app.get("/signupinvestor", (req, res) => {
    res.sendFile("/signupinvestor.html", { root: __dirname + "/public" });
});
app.get("/signupfarmer", (req, res) => {
    res.sendFile("/signupfarmer.html", { root: __dirname + "/public" });
});
app.listen(3000, function() {
    console.log("Server is running at http://localhost:3000");
});

mongoose.connect('mongodb://localhost:27017/krishimitradb')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const Investor = mongoose.model('Investor', { username: String, password: String });
const Farmer = mongoose.model('Farmer', { username: String, password: String });

const farmerSchema = new mongoose.Schema({
    name: String,
    contact_number: String,
    email: String,
    land_id: String,
    land_size: String,
    location: String,
    soil_type: String,
    irrigation_type: String,
    crop_name: String,
    yield: String
});


const FarmerProfile = mongoose.model('FarmerProfile', farmerSchema);

app.post("/signupinvestor", async (req, res) => {
    const { username1, password1 } = req.body;

    try {
        const newInvestor = new Investor({ username: username1, password: password1 });
        await newInvestor.save();
        console.log("Investor signed up successfully");
        res.redirect("/public/logininvestor.html");
    } catch (error) {
        console.error("Error signing up investor:", error);
        res.status(500).send("Error signing up investor");
    }
});

app.post("/signupfarmer", async (req, res) => {
    const { username, password } = req.body;

    try {
        const newFarmer = new Farmer({ username:username, password:password });
        await newFarmer.save();
        console.log("Farmer signed up successfully");
        res.redirect("/public/loginfarmer.html");
    } catch (error) {
        console.error("Error signing up farmer:", error);
        res.status(500).send("Error signing up farmer");
    }
});

app.post("/profile", async (req, res) => {
    const {
        name,
        contact_number,
        email,
        land_id,
        land_size,
        location,
        soil_type,
        irrigation_type,
        crop_name,
        yield
    } = req.body;

    try {
        const newProfile = new FarmerProfile({
            name,
            contact_number,
            email,
            land_id,
            land_size,
            location,
            soil_type,
            irrigation_type,
            crop_name,
            yield
        });
        await newProfile.save();
        console.log("Farmer profile saved successfully");
        res.redirect("/farmerhome");
    } catch (error) {
        console.error("Error saving farmer profile:", error);
        res.status(500).send("Error saving farmer profile");
    }
});
app.post("/logininvestor", async (req, res) => {
    const username1 = req.body.username1;
    const password1 = req.body.password1;

    try {
        const investor = await Investor.findOne({ username: username1, password: password1 });
        if (investor) {
            res.sendFile("/public/farmerhome.html", { root: __dirname });
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
});

app.post("/loginfarmer", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    try {
        const farmer = await Farmer.findOne({ username:username, password:password });
        if (farmer) {
            res.sendFile("/public/farmerhome.html", { root: __dirname });
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
});

app.get("/contact", (req, res) => {
    res.sendFile("/contact.html", { root: __dirname + "/public" });
});
app.get("/entry", (req, res) => {
    res.sendFile("/entry.html", { root: __dirname + "/public" });
});
app.get("/about", (req, res) => {
    res.sendFile("/about.html", { root: __dirname + "/public" });
});
app.get("/farmerhome", (req, res) => {
    res.sendFile("/farmerhome.html", { root: __dirname + "/public" });
});
app.get("/farmer", (req, res) => {
    res.sendFile("/farmer.html", { root: __dirname  + "/public"});
});
app.get("/investment-application", (req, res) => {
    res.sendFile("/investment-application.html", { root: __dirname + "/public"});
});
app.get("/investor", (req, res) => {
    res.sendFile("/investor.html", { root: __dirname + "/public"});
});
app.get("/loginfarmer", (req, res) => {
    res.sendFile("/loginfarmer.html", { root: __dirname + "/public" });
});
app.get("/logininvestor", (req, res) => {
    res.sendFile("/logininvestor.html", { root: __dirname + "/public"});
});
app.get("/profile", (req, res) => {
    res.sendFile("/profile.html", { root: __dirname + "/public"});
});
app.get("/rbiguide", (req, res) => {
    res.sendFile("/rbiguide.html", { root: __dirname + "/public"});
});



app.get("/signupinvestor", (req, res) => {
    res.sendFile("/signupinvestor.html", { root: __dirname + "/public"});
});
app.get("/frontpage", (req, res) => {
    res.sendFile("/frontpage.html", { root: __dirname + "/public" });
});



