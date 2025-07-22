# Krishimitra: Empowering Farmers, Enabling Investments

![Krishimitra Logo](public/photos/logo1.png)

Krishimitra is a web platform dedicated to bridging the gap between farmers seeking financial support and investors looking for meaningful opportunities in the agricultural sector. Our mission is to foster sustainable growth, empower rural communities, and unlock the full potential of agricultural land.

## Table of Contents

* [Features](#features)
* [Technologies Used](#technologies-used)
* [Getting Started](#getting-started)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
    * [Running the Application](#running-the-application)
* [Project Structure](#project-structure)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## Features

* **Farmer & Investor Registration/Login:** Secure authentication for both farmers and investors.
* **Farmer Profiles:** Farmers can create detailed profiles including land size, location, soil type, irrigation, crops, and yield.
* **Investment Opportunities:** Investors can browse farmer profiles and discover potential investment opportunities.
* **Informative Sections:**
    * **About Us:** Learn about Krishimitra's story, mission, and team.
    * **Contact Us:** Get in touch with the Krishimitra team.
    * **RBI Guidelines:** Information regarding agricultural investment guidelines.
    * **Crop Information:** Dynamic news section on crops commonly grown during different seasons (e.g., summer crops for sandy loam, loamy, and acidic soils).
* **Responsive Design:** Ensures a seamless experience across various devices.
* **Image Gallery/Slideshow:** Engaging visual content on the home and about pages.

## Technologies Used

### Backend
* **Node.js:** JavaScript runtime environment.
* **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
* **Mongoose:** MongoDB object data modeling (ODM) for Node.js.
* **MongoDB:** NoSQL database for storing user data and farmer profiles.
* **Body-parser:** Middleware for parsing incoming request bodies.
* **Nodemon:** Utility that monitors for any changes in your source and automatically restarts your server.

### Frontend
* **HTML5:** Structure of the web pages.
* **CSS3:** Styling and layout (custom CSS files like `entry.css`, `farmer(home).css`, `info.css`, `aboutus.css`, `contact.css`).
* **JavaScript:** Client-side interactivity (e.g., image slideshow on `about.js`, general client-side logic on `enrty.js`).

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* **Node.js & npm:** Download from [nodejs.org](https://nodejs.org/).
* **MongoDB:** Install MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community). Ensure it's running (usually on `mongodb://localhost:27017`).
* **Git:** For cloning the repository.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Akshith-M-Naik/SportXchange.git](https://github.com/Akshith-M-Naik/SportXchange.git) # Replace with your actual repo URL if different
    cd SportXchange # Or the name of your project directory
    ```
2.  **Install backend dependencies:**
    Navigate to the root directory of your project where `package.json` is located and run:
    ```bash
    npm install
    ```
    This will install all the dependencies listed in your `package.json` file, including `express`, `mongoose`, `body-parser`, `nodemon`, etc.

### Running the Application

1.  **Start the MongoDB server:**
    Ensure your MongoDB instance is running. You can usually start it via your system's services or by running `mongod` in your terminal if it's in your PATH.

2.  **Start the Node.js server:**
    From the project's root directory, run:
    ```bash
    npm start
    ```
    This command uses `nodemon` (as defined in your `package.json` scripts) to start `express.js`. You should see a message in your console like:
    ```
    Server is running at http://localhost:3000
    Connected to MongoDB
    ```

3.  **Access the application:**
    Open your web browser and navigate to:
    ```
    http://localhost:3000
    ```
    This will load the `entry.html` page.

## Project Structure

```
krishi-mitra/
├── express.js             # Main server file (Node.js, Express, MongoDB connection, routes)
├── package.json           # Project dependencies and scripts
├── package-lock.json      # Dependency tree lock file
└── public/                # Static files served to the client
    ├── css/
    │   ├── aboutus.css
    │   ├── contact.css
    │   ├── entry.css
    │   ├── farmer(home).css
    │   └── info.css
    ├── js/
    │   ├── about.js
    │   └── enrty.js         # Renamed from main.js as per entry.html
    ├── photos/              # Image assets (logo2.png, crop-1.jpg, farmer1.jpg, etc.)
    ├── about.html
    ├── contact.html
    ├── entry.html           # Initial landing page
    ├── farmer.html          # Page displaying farmer profiles
    ├── farmerhome.html      # Home page for farmers/investors after login
    ├── frontpage.html       # Likely a more detailed landing page after entry
    ├── investment-application.html
    ├── investor.html        # Page for investors
    ├── loginfarmer.html
    ├── logininvestor.html
    ├── profile.html         # Farmer profile creation page
    ├── rbiguide.html        # RBI guidelines page
    ├── signupfarmer.html
    └── signupinvestor.html
```

## Usage

* **Landing Page (`entry.html`):** Provides an overview of Krishimitra. Click "Explore More" to proceed to `frontpage.html`.
* **Registration/Login:** Separate pages for investors and farmers to sign up and log in.
* **Farmer Home (`farmerhome.html`):** After logging in, users are redirected here. It features a photo gallery and sections on Krishimitra's vision, what they do, how it works, and why to choose Krishimitra.
* **Farmers List (`farmer.html`):** Displays profiles of various farmers with their location, crops, and a call to action to "Invest Now" (which links to RBI guidelines).
* **About Us (`about.html`):** Details the company's story, mission, and team members. Includes a dynamic image slideshow.
* **Contact Us (`contact.html`):** Provides contact information for Krishimitra.
* **Profile (`profile.html`):** Allows farmers to create and save their detailed profiles.

## Contributing

We welcome contributions to Krishimitra! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to the existing style and includes appropriate tests if applicable.

## License

This project is licensed under the ISC License - see the `LICENSE` file for details (if you have one, otherwise specify "No specific license provided yet").

## Contact

For any questions or inquiries, please reach out to:
* Email: info@krishimitra.com (as seen in `contact.html`)
* Project Maintainer: Akshith M Naik (based on your GitHub profile)
