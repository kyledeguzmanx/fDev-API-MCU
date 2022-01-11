const GSheetReader = require("g-sheets-api");
const config = require("./config")


GSheetReader(
    {
        apiKey : config.options.apiKey,
        sheetId: '19rP-HPw_8DLlp9c4HHM7DBCc95hR_Top-8cs2AmSb3g',
        sheetNumber: 1,
        returnAllResults: false
    },
    (results) => {
        //results instructions
        console.log(results);
        const PORT = 8000;
        const axios = require("axios");
        const cheerio = require("cheerio");
        const app = require("express")();

        
         app.get("/", (req,res) => {
             res.json(results[Math.floor(Math.random() * results.length)]);
         })

        app.listen(PORT, () => console.log(`server running on ${PORT}`)); //starts server and listens on port 8000
    },
    (error) => {
        //error instructions
    }
);

// const PORT = 8000;
// const axios = require("axios");
// const cheerio = require("cheerio");
// const app = require("express")();

// app.get("/", (req,res) => {
//     res.json("Welcome to api");
// })

// app.listen(PORT, () => console.log(`server running on ${PORT}`)); //starts server and listens on port 8000