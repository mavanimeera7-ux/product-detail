const express = require ("express");
const app = express();
const cors = require ("cors");
const  productRoutes = require ("./routes/productRoutes");
const databaseConnection = require ('./database');


databaseConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    
    req.send('Hello world');
    });

// Routes
app.use("/api/products", productRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Product API is running...");
// });
app.listen(2000);
