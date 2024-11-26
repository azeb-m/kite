import express from "express";
import bodyParser from "body-parser";

const app = express();
const port=3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
    res.render("index.ejs",{ title: 'Your Website Title' });
});
app.get("/admin", (req, res) => {
    res.render("admin.ejs");
  });
  
//app.get('/about', (req, res) => {
   // res.render('about', { title: 'About Us' });
//});

//app.get('/contact', (req, res) => {
 //   res.render('contact', { title: 'Contact Us' });
//});

// Start the server

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
