import express from"express";
const app = express();
import cors from "cors";
import  productRoutes from "./routes/productRoutes.js";
import databaseConnection  from './database.js';


databaseConnection();

// Middlewares
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    
    res.send('Hello world');
    });

// Routes
app.use("/api/products", productRoutes);

// // Default route
// app.get("/", (req, res) => {
//   res.send("Product API is running...");
// });
app.listen(9000);
