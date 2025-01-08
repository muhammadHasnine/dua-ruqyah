import app from "./app.js";
import {config} from 'dotenv';
config({
    path:"./config/config.env"
});
const PORT = process.env.PORT || 2025;


app.listen(process.env.PORT,()=>{
    console.log(`Server is working on port:${PORT}`);
})