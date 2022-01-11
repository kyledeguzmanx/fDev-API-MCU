# MCU QUOTE API

## INTRODUCTION
For this project, I created an API that generates quotes from movies from the Marvel Cinematic Universe. The quotes are pulled from the start of the MCU -- with the very first IRON MAN-- all the way to the Disney Plus Loki Series. Movies and series released after Loki are excluded. I hand picked quotes that spoke to the core of some characters as well as some quotes pulled from very significant moments throughout the different films that Marvel fans should know.

## BUILD PROCESS
All the quotes and related information were stored in a Google Sheets spreadsheet. This spreadsheet was accessed using the g-sheets-api NodeJs module. That module fetches information from the spreadsheet and stores them as an array an objects. Once that has been processed, I used the Express NodeJs module to listen for requests. If the URL is visited, a JSON file will be given to the user.

## TECHNOLOGY USED
- [Javascript Exports](https://stackoverflow.com/questions/3922994/share-variables-between-files-in-node-js)  
- Google Cloud Platform   
- Google Sheets: [Quotes here](https://docs.google.com/spreadsheets/d/19rP-HPw_8DLlp9c4HHM7DBCc95hR_Top-8cs2AmSb3g/edit#gid=0)   
- Google Sheets API  
- ExpressJS module
- g-sheets-api (NodeJS module)  
- NodeJS  
- RapidAPI
- Replit  
- UptimeRobot  

## HOW TO USE

The API is currently available in the [RAPID API Marketplace](https://rapidapi.com/kyledeguzmanx/api/marvel-quote-api).  

Upon click, you should see the following screen:  

![RapidAPI](https://github.com/kyledeguzmanx/fDev-API-MCU/blob/master/images/RapidAPI.png)

In order to use the API, you must sign in to the Rapid API platform. 


After signing in, return to the API page. At the top right of the middle coulumn, you will need to subscribe to this API to get your own unique API Key. The free subscription offers unlimited uses. (Note: If you're publishing the source code of your project, make sure you always hide your API Keys)   

Once you get your API Key, you can now use the API.   

The path to fetch the API is:  

https://marvel-quote-api.p.rapidapi.com/?rapidapi-key=

and add your unique API key at the end.  

Also, if you're viewing the API Documentation page, in the right-most column, there are code snippets (in various languages and techniques) that show you how to fetch the API. For example, with NodeJS, you can use the axios module or the node-fetch module. Or if you're using Javascript, you can use XMLHttpRequest, Fetch, or jQuery.   


## SCREENSHOTS
![Screen1](https://github.com/kyledeguzmanx/fDev-API-MCU/blob/master/images/result1.png)
![](https://github.com/kyledeguzmanx/fDev-API-MCU/blob/master/images/result3.png)
![](https://github.com/kyledeguzmanx/fDev-API-MCU/blob/master/images/quote2.png)

## SAMPLE CODE

fetch(https://marvel-quote-api.p.rapidapi.com/?rapidapi-key=123456789)  
  .then(response =>   
    return response.json();  
   )  
   .then( response => {  
    console.log(response.Quote);  
   })
