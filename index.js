import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";

/* import pg from "pg"

 const db=new pg.Client({
    user:"postgres",
    host:"localhost",
    database:"mentoradmin",
    password:"bereket",
    port:5433,
  });
  
  db.connect()

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

  


  app.get("/Testimonials", (req, res) => {
    res.render("Testimonials.ejs");
  });
  ;

  


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
      const result = await db.query("SELECT * FROM admin WHERE email = $1", [email]);
  
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
      res.render("jobs.ejs", { message: "Welcome Admin! You can now post jobs." });
  
    } catch (err) {
      console.error("Error checking admin login:", err.message);
    }
  });
  
  app.post("/jobs", async (req, res) => {
  const { title, description, position, requirements } = req.body;

  try {
    // Insert the job details into the jobs table
    const result = await db.query(
      `INSERT INTO jobs (title, description, position, requirements)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [title, description, position, requirements]
    );

    const job = result.rows[0]; // Get the inserted job data

    res.status(201).send("Job added successfully!");
  } catch (err) {
    console.error("Error inserting job:", err.message);
    res.status(500).send("Error adding job to the database.");
  }
});
 

// Route to display all available jobs to applicants
app.get('/jobs-list', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM jobs');
    const jobs = result.rows;

    res.render('jobs-list', { jobs });
  } catch (err) {
    console.error('Error fetching jobs:', err.message);
    res.status(500).send('Error loading jobs.');
  }
});

app.post('/apply/:jobId', async (req, res) => {
  const { jobId } = req.params; 
  const { applicantName, applicantEmail } = req.body; 
  try {
    
    await db.query(
      `INSERT INTO applications (job_id, applicant_name, applicant_email)
       VALUES ($1, $2, $3)`,
      [jobId, applicantName, applicantEmail]
    );

   
    res.send("Your application has been submitted successfully!");
  } catch (err) {
    console.error('Error submitting application:', err.message);
    res.status(500).send("There was an error submitting your application. Please try again.");
  }
});



//app.get('/about', (req, res) => {
// res.render('about', { title: 'About Us' });
//});

//app.get('/contact', (req, res) => {
//   res.render('contact', { title: 'Contact Us' });
//});



  res.render("index", { title: "Mentor" });

});

app.get("/our_products", (req, res) => {
  res.render("our_products", { title: "Our products" });
});
app.get("/contact", (req, res) => {
  res.render("contact", { title: "contact us" });
});
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use 'smtp.ethereal.email' for testing
      auth: {
        user: "azebmehrete13@gmail.com", // Your email
        pass: "crbr inga ohvv sojb", // Your email password (use App Password if 2FA is enabled)
      },
    });

    const mailOptions = {
      from: email,
      to: "azebmehrete13@gmail.com", // The email you want to receive messages at
      subject: `Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    res.render("thank-you", { title: "Thank You", name });
    
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("An error occurred. Please try again later.");
  }
});


app.get("/request-service", (req, res) => {
  res.render("request", { title: "Request a Service" });
});

app.post("/request-service", async (req, res) => {
  const { name, email, serviceType, details } = req.body;
  // Setup Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (e.g., Gmail, Outlook)
    auth: {
      user: "azebmehrete13@gmail.com", // Your email
      pass: "crbr inga ohvv sojb" // Replace with your generated app password
    }
  });

  // Configure email options
  const mailOptions = {
    from: email, // Sender's email
    to: "azebmehrete13@gmail.com", // Receiver's email (you can change this)
    subject: `Service Request: ${serviceType}`,
    text: `
            New service request from ${name} (${email}):
            Service Type: ${serviceType}
            Details: ${details || "No additional details provided."}
        `
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.status(200);
    res.render("thank-you", { title: "Thank You", name });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .send("An error occurred while sending your request. Please try again.");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/
