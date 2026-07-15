const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

// Import Models
const Registration = require('./models/Registration');
const Payment = require('./models/Payment');
const RefCode = require('./models/RefCode');
const PlanConfig = require('./models/PlanConfig');
const SubAdmin = require('./models/SubAdmin');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

let dbInitialized = false;

const initializeDBData = async () => {
  if (dbInitialized) return;
  try {
    // Create default plan config if not exists
    const configCount = await PlanConfig.countDocuments();
    if (configCount === 0) {
      console.log('Creating default plan configuration...');
      await PlanConfig.create({
        courseName: "MERN Stack",
        courseTagline: "Full Stack Web Development",
        oneTimePrice: 6000,
        oneTimeOriginalPrice: 15000,
        installment1Price: 3200,
        installment2Price: 3200,
        discountPercent: 10,
        oneTimeFeatures: [
          "Full MERN Stack Course Access",
          "Practical Hands-on Training",
          "100% Placement Assistance",
          "Course Completion Certificate",
          "Save 10% Extra using Referral Codes",
        ],
        installmentFeatures: [
          "Full MERN Stack Course Access",
          "Practical Hands-on Training",
          "100% Placement Assistance",
          "Course Completion Certificate",
        ],
        courses: ["Frontend Developer", "Backend Developer", "MERN Stack"],
        colleges: ["PDPS College", "BUIT", "Other"],
        cities: ["Bhopal", "Indore", "Jabalpur", "Other"]
      });
    } else {
      // Check if existing configuration is missing courses, colleges or cities arrays
      const existing = await PlanConfig.findOne();
      if (existing) {
        let updated = false;
        if (!existing.courses || existing.courses.length === 0) {
          existing.courses = ["Frontend Developer", "Backend Developer", "MERN Stack"];
          updated = true;
        }
        if (!existing.colleges || existing.colleges.length === 0) {
          existing.colleges = ["PDPS College", "BUIT", "Other"];
          updated = true;
        }
        if (!existing.cities || existing.cities.length === 0) {
          existing.cities = ["Bhopal", "Indore", "Jabalpur", "Other"];
          updated = true;
        }
        if (updated) {
          await existing.save();
          console.log('Successfully migrated and seeded missing dropdown options on existing DB config.');
        }
      }
    }

    // Create default ref codes if not exists
    const refCodeCount = await RefCode.countDocuments();
    if (refCodeCount === 0) {
      console.log('Creating default referral codes...');
      await RefCode.create([
        { code: "BEANGATE10", discount: "10%", active: true, created: "2024-07-01", uses: 0, creator: "admin" },
        { code: "MERN10", discount: "10%", active: true, created: "2024-07-01", uses: 0, creator: "admin" },
        { code: "REF10", discount: "10%", active: true, created: "2024-07-01", uses: 0, creator: "admin" }
      ]);
    }
    dbInitialized = true;
  } catch (err) {
    console.error('Error initializing database data:', err.message);
  }
};

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    if (!dbInitialized) {
      await initializeDBData();
    }
    return;
  }
  
  await mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://bhumigarg2727_db_user:DwEKJWovWB214zsH@cluster0.vh71iko.mongodb.net/?appName=Cluster0', {
    serverSelectionTimeoutMS: 5000 // 5 seconds timeout
  });
  await initializeDBData();
};

// Database Connection Middleware (Awaited for serverless execution)
app.use(async (req, res, next) => {
  if (req.path === '/' || req.path === '/api') {
    return next();
  }
  try {
    await connectDB();
    next();
  } catch (error) {
    console.error('Database connection error in request:', error.message);
    res.status(500).json({ message: 'Database connection failed: ' + error.message });
  }
});

// Basic Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// --- API Endpoints ---

// 1. Registrations
app.get('/api/registrations', async (req, res) => {
  try {
    const data = await Registration.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (error) { res.status(500).json({ message: error.message }); }
});

app.post('/api/registrations', async (req, res) => {
  try {
    const newReg = new Registration(req.body);
    const saved = await newReg.save();
    res.status(201).json(saved);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

app.delete('/api/registrations/:id', async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Registration deleted' });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

app.put('/api/registrations/:id', async (req, res) => {
  try {
    const updated = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) { res.status(500).json({ message: error.message }); }
});

// 2. Payments
app.get('/api/payments', async (req, res) => {
  try {
    const data = await Payment.find().sort({ timestamp: -1 });
    res.json(data);
  } catch (error) { res.status(500).json({ message: error.message }); }
});

app.post('/api/payments', async (req, res) => {
  try {
    const newPayment = new Payment(req.body);
    const saved = await newPayment.save();
    res.status(201).json(saved);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

app.delete('/api/payments/:id', async (req, res) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Payment deleted' });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

// 3. Referral Codes
app.get('/api/refcodes', async (req, res) => {
  try {
    const data = await RefCode.find();
    res.json(data);
  } catch (error) { res.status(500).json({ message: error.message }); }
});

app.post('/api/refcodes', async (req, res) => {
  try {
    const newCode = new RefCode(req.body);
    const saved = await newCode.save();
    res.status(201).json(saved);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

app.put('/api/refcodes/:id', async (req, res) => {
  try {
    const updated = await RefCode.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

app.delete('/api/refcodes/:id', async (req, res) => {
  try {
    await RefCode.findByIdAndDelete(req.params.id);
    res.json({ message: 'RefCode deleted' });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

// 4. Plan Config
app.get('/api/planconfig', async (req, res) => {
  try {
    const data = await PlanConfig.findOne();
    res.json(data);
  } catch (error) { res.status(500).json({ message: error.message }); }
});

app.put('/api/planconfig/:id', async (req, res) => {
  try {
    const updated = await PlanConfig.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

// 5. Sub-Admins
app.get('/api/subadmins', async (req, res) => {
  try {
    const data = await SubAdmin.find();
    res.json(data);
  } catch (error) { res.status(500).json({ message: error.message }); }
});

app.post('/api/subadmins', async (req, res) => {
  try {
    const newSubAdmin = new SubAdmin(req.body);
    const saved = await newSubAdmin.save();
    res.status(201).json(saved);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

app.put('/api/subadmins/:id', async (req, res) => {
  try {
    const updated = await SubAdmin.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) { res.status(400).json({ message: error.message }); }
});

app.delete('/api/subadmins/:id', async (req, res) => {
  try {
    await SubAdmin.findByIdAndDelete(req.params.id);
    res.json({ message: 'SubAdmin deleted' });
  } catch (error) { res.status(500).json({ message: error.message }); }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
