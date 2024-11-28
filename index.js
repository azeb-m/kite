import express from "express";
import bodyParser from "body-parser";

import pg from "pg";

/*const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "mentoradmin",
  password: "bereket",
  port: 5433
});

db.connect();*/

import path from "path";

const app = express();
const port = 3000;

// Set up the view engine
app.set("view engine", "ejs");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use bodyParser for form submissions (if needed)
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/services", (req, res) => {
  res.render("services.ejs");
});
app.get("/Testimonials", (req, res) => {
  res.render("Testimonials.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/services", (req, res) => {
  res.render("services.ejs");
});
app.get("/admin", (req, res) => {
  res.render("admin.ejs");
});

app.post("/admin", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    // Query the database for the admin by email
    const result = await db.query("SELECT * FROM admin WHERE email = $1", [
      email
    ]);

    if (result.rows.length === 0) {
      // Email not found
      return res.status(401).send("Invalid email or password.");
    }

    const admin = result.rows[0]; // Get the admin details

    if (admin.password !== password) {
      // Password doesn't match
      return res.status(401).send("Invalid email or password.");
    }

    // Authentication successful, render the job form page (jobs.ejs)
    res.render("jobs.ejs", {
      message: "Welcome Admin! You can now post jobs."
    });
  } catch (err) {
    console.error("Error checking admin login:", err.message);
  }
});

//app.get('/about', (req, res) => {
// res.render('about', { title: 'About Us' });
//});

//app.get('/contact', (req, res) => {
//   res.render('contact', { title: 'Contact Us' });
//});
app.get("/", (req, res) => {
  res.render("index", { title: "Your Website Title" });
});

app.get("/portfolio", (req, res) => {
  res.render("portfolio", { title: "Our Portfolio" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact us" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
