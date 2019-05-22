require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var expect = require("chai").expect;
var chrome = require('selenium-webdriver/chrome');
var Key = webdriver.Key;
var By = webdriver.By;
var id = webdriver.id;
var until = webdriver.until;

describe("challenge6 suite", function(){
    this.timeout(20000);
    var driver;

    before(function () {
        driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.chrome())
        .build();
    });

    after(function () {
        return driver.quit();
    });

//open website
    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
//navigate to search field, enter nissan, & click
it("I search for exotic", async function() {
    var element = await driver.findElement(By.id("input-search"));
    return element.sendKeys('nissan' + Key.ENTER);



    
    
    it("tinkering with try catch finally"){
        try{
            Driver.searchformodel link
            Driver.click model link
            Driver.enter search text into textfield in model HTMLTableSectionElement
            Driver.lookfor("skyline")

        }
        catch(e){                       //use this to capture a screen shot
            takeScreenshot.takeScreenshot(driver, "Model-Filter");
            emailfunction(image, testname, steps, logs) //use this to email yourself results, eg if you create a webcrawler. not necessarily needed for challenge 6
             console.log(e);
        }
        
        finally {
            screencap()
            gather whatever info is needed
        }

    }
})