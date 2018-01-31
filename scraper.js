const request = require('request');
const cheerio = require('cheerio');

//callback example
exports.imgScrape = (url, cb)=>{
  request(url, (err, res, body)=>{
    if(err){
      cb({
        error: err
      });
    }
    let $ = cheerio.load(body); //entire html page
    let $url = url;
    let $img = $('.post-images img').attr('src');
    console.log( 'this is image html element'+ $('.post-images img'));
    let $title = $('.post-title').text();
    let $desc = $("[itemprop = description]").text();


  let image = {
    url: $url,
    img: "http:"+$img,
    title: $title,
    description: $desc
  }


  //respond with final json
  console.log("this is the img"+$img);
  console.log('scraped from scraper.js', image);
  cb(image);
  });
}


//promise example
exports.imgScrape2 = (url)=>{
  return new Promise(function(resolve, reject) {
    request(url, (err, res, body)=>{
      if(err){
        reject(err); //changed from cb to reject
        }

      let $ = cheerio.load(body); //entire html page
      let $url = url;
      let $img = $('.post-images img').attr('img src');
      let $title = $('.post-title').text();
      let $desc = $("[itemprop = description]").text();


    let image = {
      url: $url,
      img: "http:"+$img,
      title: $title,
      description: $desc
    }
    console.log('scraped from scraper.js', image);
    resolve(image); //changed from cb to resolve
    });
  })  
}
