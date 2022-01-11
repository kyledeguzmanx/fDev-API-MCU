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
        //console.log(results);
    },
    (error) => {
        //error instructions
    }
);

const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");

const app = require("express")();

app.listen(PORT, () => console.log(`server running on ${PORT}`));