const puppeteer = require('puppeteer');

let run = async () => {
  const browser = await puppeteer.launch({
	  executablePath: 'C://Program Files (x86)/Google/Chrome/Application/chrome.exe',
	  headless: true
  });
  const page = await browser.newPage();
  
  await page.goto('https://yeezysupply.com/collections/new-arrivals');
  
  var pos_keyword = 'KIDS';
  var neg_keyword = '';
  const product_selector = '#trackpants-luna-oxblood';
  const size_selector = '#SIZE';
  const atc_selector = '#trackpants-luna-oxblood > div > div.MasterProductInfo.js-product-info > form > input.K__button';
  const size = 'M'
  
 // await page.click(product_selector);
 // await page.select(size_selector, size);
 
 /*
 //THIS IS FRONT PAGE LOGIC FOR FINDING PRODUCT BASED ON KEYWORD
  const result = await page.evaluate(() => {
	  let data = [];
	  let elements = document.querySelectorAll('.js-product-json');
	  
	  for (var element of elements){
		  let titles = element.text;
		  var parsed_title = JSON.parse(titles);
		  tit = parsed_title.title.toUpperCase(); // Make sure all text will match keyword
		  
		  /*
		  Check for keywords (USE UPPERCASE) 
		  Also can use to check for negative keywords by adding
		  another if statement
		  
		  if(tit.includes('500') == true) {
			  data.push(tit);
		  }

	  }
	  return data;
  });
  */

  //Trying on the new arrivals webpage to get through add to cart logic
  const result = await page.evaluate(() => {
	  let data = [];
	  let elements = document.querySelectorAll('.js-product-json');
	  
	  for (var element of elements){
		  let titles = element.text;
		  var parsed_title = JSON.parse(titles);
		  tit = parsed_title.title;
		  data.push(titles);
		  
		 /*
		  if(tit.includes('TRACKPANTS') == true) {
			  data.push(tit);
		  }
		  */
	  }
	  return data;
  });
 
  browser.close();
  return result;
  
}

run().then((value) => {
	console.log(value);
});