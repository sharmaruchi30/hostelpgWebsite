import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import { login } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import houseRoutes from "./routes/House.js";
import userRoutes from "./routes/users.js";
import { verifyToken } from "./middleware/auth.js";
import { addHouse } from "./controllers/House.js";


// CONFIGURATIONS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy : "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb" , extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb" , extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname , 'public/assets')));

// FILE STORAGE

const storage = multer.diskStorage({
    destination: function(req , file , cb){
        cb(null, "public/assets");
    },
    filename : function (req , file, cb){
        cb(null , file.originalname);
    } 
});

const upload = multer({storage});

app.get("/" , function(req,res){
    res.send("HOME PAGE");    
})

// ROUTES WITH FILES 
// upload.single("picture")
// app.post("/house/addhouse" , upload.single("image_path") , addHouse)


app.post("/auth/" , login);
// ROUTES
app.use("/auth" , authRoutes);
app.use("/user", userRoutes);
app.use("/house" , houseRoutes);

// MONGOOSE SETUP
const PORT = process.env.PORT || 6001
mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT , () => console.log(`Server port : ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));