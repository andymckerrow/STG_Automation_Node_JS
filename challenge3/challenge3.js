require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var expect = require("chai").expect;
var chrome = require('selenium-webdriver/chrome');
var Key = webdriver.Key;
var By = webdriver.By;
var id = webdriver.id;
var until = webdriver.until;

describe("challenge3 suite", function(){
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
    it("I open the copart website", function() {
        return driver.get("http://www.copart.com");
    });
    it("loop through popular section and print link and text", async function() {
        var popular_array = await driver.findElements(webdriver.By.xpath("//div[@id='tabTrending']//a"));
        console.log(popular_array.length);
        for (var i=0; i<popular_array.length; i++){
            console.log(await popular_array[i].getText() + " - " + await popular_array[i].getAttribute("href"));
        }
        var j = 0;
        while (j < popular_array.length){
            j++;
        }
    });
      
});
   