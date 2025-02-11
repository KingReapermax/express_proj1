import express from "express";
// import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
let path1 = "Simon Game Challenge Starting Files";
let path2 = "Drum Kit Starting Files";

app.use(express.static(path.join(__dirname,"public", path1)));
app.use(express.static(path.join(__dirname,"public", path2)));


app.get(["/", "/simon"], (req, res)=>{
    
    res.sendFile(path.join(__dirname, "public", path1, "index1.html"));
    // res.sendFile(path.join(__dirname, "public", path1, "styles.css"));
    // res.sendFile(path.join(__dirname, "public", path1, "index.js"));
    

});

app.get("/drums", (req, res)=>{
    
    res.sendFile(path.join(__dirname, "public", path2, "index2.html"));
});


// app.listen(port, () => {  //uncomment this function if you want to run the server, for vercel this is not needed
//     console.log("Server is running on port " + port);
// });

export default app;

