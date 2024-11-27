import express from "express";
import bodyParser from "body-parser";
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
app.get("/", (req, res) => {

app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/services", (req, res) => {
  res.render("services.ejs");
});

//app.get('/about', (req, res) => {
// res.render('about', { title: 'About Us' });
//});

//app.get('/contact', (req, res) => {
//   res.render('contact', { title: 'Contact Us' });
//});

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
