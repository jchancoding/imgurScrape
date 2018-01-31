const scraper = require('./scraper');
const url = "https://imgur.com/gallery/1667M";
const fs = require('fs')
const path = 'text.txt';

//callback example
scraper.imgScrape(url, (data)=>{
  console.log('1data from scraper recieved');
  console.log('randomjunk'+ data);
});

//Promise example
scraper.imgScrape2(url)
  .then((data)=>{
    console.log('2data from scraper received');
    fs.writeFile(path, JSON.stringify(data), (err)=>{
      if(err){
        console.log(err);
      }
        console.log('Successfully wrote to '+path);
      })
    })
    .catch((error)=>{
      console.log('error scraping data');
      console.log(error);
    });
