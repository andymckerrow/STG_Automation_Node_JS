require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var expect = require("chai").expect;
var chrome = require('selenium-webdriver/chrome');
var Key = webdriver.Key;
var By = webdriver.By;
var id = webdriver.id;
var until = webdriver.until;
var array;
var sorted_array;
const d = require('../common/driver');//this goes out of the file structure with ../ to the common folder, then the driver file


describe("challenge5 suite", function(){
    this.timeout(20000);
    var driver;

    before(async function () {
        driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
        return driver = await d.getDriver1();
    });

    //after(function () {
      //  return driver.quit();
    //});

    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });

    it("I type porsche", async function() {
      var element = await driver.findElement(By.id("input-search"));
      return element.sendKeys('porsche');
    });

    it("I click on submit", async function(){
       var element = await driver.findElement(By.xpath("//*[@id='search-form']/div/div[2]/button")).onClick
    });

    it("looks at serverSideDataTable to find Porsche", async function() {
       await driver.WAIT(untilTitleContains('EXOTIC'), 20000);
       console.log(await driver.getTitle());
       await driver.wait(until.elementIsVisible(driver.findElement(By.xpath('//table[@id="serverSideDataTable"]//tbody'))));
       var html = await driver.findElement(By.id('serverSideDateTable')).getAttribute('innerHTML');
       return assert.include(html, 'Porsche');
    });

it("show 100 results", async function() {
    var ele = await driver.findElement(By.xpath('//select[@name="serverSideDataTable_length"]'));
    await ele.click();
    await ele.sendKeys("100");
    await ele.sendKeys("enter");
    await ele.click();
    return driver.wait(until.elementIsNotVisible(driver.findElements(By.id('serverSideDataTable_processing', 20000))))
});

it("make array of all the table elements", async function () {
   array = ['911', '911 carrer', '911Gt2', '911Gt3', '911 New Ge', '911 Sc', '911 Targa', '911 Turbo', '912', '914', '924', '924 S', '928', '944', '944 S', 'Boxster', 'Boxster S', 'Carrera', 'Cayenne', 'Cayenne Gt', 'Cayenne S', 'Cayenne Se', 'Cayenne Tu', 'Cayman', 'Cayman S', 'Macan', 'Macan Gts', 'Macan s', 'Macan Turb', 'Panamera 2', 'Panamera 4', 'Panamera G', 'Panamera S', 'Panamera T']
});

it("I get models into an array and count them", async function() {
    var models_array = [];
    var porsche_array = await driver.findElements(webdriver.By.xpath("//td[contains(@span, 'lotsearchlotmodel')]//a"));
    for (var i=0; i<porsche_array.length; i++){
    console.log(await porsche_array.length[i].getText());
    models_array.push(await porsche_array.length[i].getText());
    }
});
});

//it("I count the models", async function() {
//        var models = [];
//        document.getElementById("data-uname='lotsearchLotmodel').innerHTML = models.length;



//it("print the total for each damage category"){
//    for (var i=0; i<array.length; i++){
//        console.log(array[i]);

// var text;
// switch (new Damage().document.findElements(webdriver.By.xpath("//td[@span, 'lotsearchLotdamagedescription'")){
//   case 0:
//     text = "REAR END";
//     break;
//   case 1:
//     text = "FRONT END";
//     break;
//   case 2:
//     text = "MINOR DENT/SCRATCHES"
//     break;
//   case 3: 
//     text = "UNDERCARRIAGE"
//     break;
//   default:
//     text = "MISC";
//     console.log();
// }
// }


// })


//the stuff below was written at Autobots, array is just for an example

// it("create an array out of data", function(){
//     array = ['one, 'three', '0', '1', 'one', 'two', 'three'];

// });

// it("print everything in the array", function(){
//     for (var i=0; i<array.length; i++){
//         console.log(array[i]);
//     }
// });

// it("sort the array", function(){
//     sorted_array = array.sort();

// });

// it("print everything in the array", function(){
//     for (var i=0; i<sorted_array.length; i++){
//         console.log(sorted_array[i];)
//     }
// });


// var models_array =[];
// var array_elements = awaitdriver.findelements("elements");
// for(var...
//     console.log(await array_elements[i].getText());
//     models_array.push
// )
// }) 
