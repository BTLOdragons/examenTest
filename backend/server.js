import express from "express";
import dotenv from "dotenv";
import tagRoutes from "./routes/tagRoutes.js";


dotenv.config();
const app = express();
app.use(express.json());

// Import necessary modules for handling file paths and URLs
import path from "path";
import { fileURLToPath } from "url";

// Resolve the current file's name and directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.join(__dirname, "../frontend");

// Serve static files from the frontend directory
app.use(express.static(frontendPath));

app.use('/api/tags', tagRoutes);

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
