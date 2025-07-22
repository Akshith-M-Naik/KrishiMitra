const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path'); // Import the 'path' module

const app = express();
const port = 3000;

// --- Middleware Setup ---
// Serves files from the 'public' directory automatically.
// This means any file in 'public' can be accessed directly from the root URL.
// e.g., http://localhost:3000/login.html will serve public/login.html
app.use(express.static('public'));
 
// Body parser middleware to handle form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// --- Database Connection ---
mongoose.connect('mongodb://localhost:27017/krishimitradb')
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Error connecting to MongoDB:", err));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// --- Mongoose Schemas and Models ---
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


// --- HTML File Serving Routes ---
// Use path.join for creating safe, cross-platform file paths.

// Root route serves the main entry page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'entry.html'));
});

// All other GET routes for HTML pages
// Note: These routes are technically not needed if the user can navigate
// via links in the HTML, because express.static will handle them.
// But having them can be useful for direct navigation.
app.get("/signupinvestor", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signupinvestor.html"));
});

app.get("/signupfarmer", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signupfarmer.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "contact.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/farmerhome", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "farmerhome.html"));
});

app.get("/farmer", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "farmer.html"));
});

app.get("/investment-application", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "investment-application.html"));
});

app.get("/investor", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "investor.html"));
});

app.get("/loginfarmer", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "loginfarmer.html"));
});

app.get("/logininvestor", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "logininvestor.html"));
});

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "profile.html"));
});

app.get("/rbiguide", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "rbiguide.html"));
});

app.get("/frontpage", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "frontpage.html"));
});


// --- API/Form Handling Routes (POST requests) ---

app.post("/signupinvestor", async (req, res) => {
    const { username1, password1 } = req.body;
    try {
        const newInvestor = new Investor({ username: username1, password: password1 });
        await newInvestor.save();
        console.log("Investor signed up successfully");
        // CORRECTED: Redirect to the URL without '/public'
        res.redirect("/logininvestor.html");
    } catch (error) {
        console.error("Error signing up investor:", error);
        res.status(500).send("Error signing up investor");
    }
});

app.post("/signupfarmer", async (req, res) => {
    const { username, password } = req.body;
    try {
        const newFarmer = new Farmer({ username: username, password: password });
        await newFarmer.save();
        console.log("Farmer signed up successfully");
        // CORRECTED: Redirect to the URL without '/public'
        res.redirect("/loginfarmer.html");
    } catch (error) {
        console.error("Error signing up farmer:", error);
        res.status(500).send("Error signing up farmer");
    }
});

app.post("/logininvestor", async (req, res) => {
    const { username1, password1 } = req.body;
    try {
        const investor = await Investor.findOne({ username: username1, password: password1 });
        if (investor) {
            // CORRECTED: Redirect to the farmer home page on successful login
            res.redirect("/farmerhome.html");
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
});

app.post("/loginfarmer", async (req, res) => {
    const { username, password } = req.body;
    try {
        const farmer = await Farmer.findOne({ username: username, password: password });
        if (farmer) {
            // CORRECTED: Redirect to the farmer home page on successful login
            res.redirect("/farmerhome.html");
        } else {
            res.status(401).send("Invalid username or password");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send("Error during login");
    }
});

app.post("/profile", async (req, res) => {
    const { name, contact_number, email, land_id, land_size, location, soil_type, irrigation_type, crop_name, yield } = req.body;
    try {
        const newProfile = new FarmerProfile({ name, contact_number, email, land_id, land_size, location, soil_type, irrigation_type, crop_name, yield });
        await newProfile.save();
        console.log("Farmer profile saved successfully");
        // CORRECTED: Redirect to the URL without '/public'
        res.redirect("/farmerhome.html");
    } catch (error) {
        console.error("Error saving farmer profile:", error);
        res.status(500).send("Error saving farmer profile");
    }
});


// --- Start Server ---
app.listen(port, function() {
    console.log(`Server is running at http://localhost:${port}`);
});
