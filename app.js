const express = require("express")
const bodyParser = require("body-parser")   // <-- required all the apps we gonna use in the site
//const request = require("request")

const app = express();

app.use(express.static("public"/*root for the folder who contains all our static files(imgs css )*/)); // <-- we need this to insert css and images to our site 
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{

    res.sendFile(__dirname + "/signup.html");
});

app.post("/" , function(req, res){
    let firstName = req.body.fName;
    let lastName = req.body.lName;
    let eMail = req.body.eMail;
    
})

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});







