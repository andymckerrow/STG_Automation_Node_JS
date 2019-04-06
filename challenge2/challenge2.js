require('chromedriver');
var webdriver = require('selenium-webdriver');
var assert = require("chai").assert;
var expect = require("chai").expect;
var chrome = require('selenium-webdriver/chrome');
var Key = webdriver.Key;
var By = webdriver.By;
var id = webdriver.id;
var until = webdriver.until;

describe("challenge2 suite", function(){
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
//navigate to search field, enter exotic, & click
it("I search for exotic", async function() {
    var element = await driver.findElement(By.id("input-search"));
    return element.sendKeys('exotic' + Key.ENTER);
});
//assert that porsche appears in the results
it("assert Porsche is in results", async function() {
   await driver.wait(until.titleContains('exotic'), 10000);
   var html = await driver.findElement(By.tagName('body')).getAttribute('innerHTML');
   return assert.include(html, "Porsche")
});

   


//await driver.FindElement(By.text('porsche'));
//assert page.contains 'porsche' >= [0];
//});
//it("list contains porsche", function() {    
//expect( list ).to.contain('porsche');
   // list.should.contain("porsche");
//});


    //it("I open the copart website", function() {
    //    return driver.get("http://www.copart.com");
    //});
    //it("Should run search on copart for porsche", async function() {
    //    var element = await driver.findElement(By.name("q"));
    //    return element.sendKeys("Porsche" + Key.ENTER)
    //});
    //it("Should assert 911 is in list of results", async function() {
    //    await driver.wait(until.titleContains('Porsche'), 10000);
    //    console.log(await driver.getTitle());
    //    var html = await driver.findElement(By.tagName("body")).getAttribute('innerHTML');
    //    console.log(html);
    //    return assert.include(html, "911");
    //});
});

