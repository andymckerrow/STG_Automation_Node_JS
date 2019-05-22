require('chromedriver');
var webdriver = require('selenium-webdriver');

module.exports = {
    getDriver: getDriver,
    getDriver1: this.getDriver1
};

function getDriver (browser, rm, mobileType){
};

function getDriver1 (browser){
    var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
    driver.manage().window().maximize();
    return driver;
}

//Driver refers to Selenium Driver
// Carlos: This is broken because `driver` is not defined anywhere
// driver.takeScreenshot().then(function(data) {
//     var base64Data = data.replace(/^data:image\/png;base64,/,"")
//     fs.writeFile("out.png", base64Data, 'base64', function(err) {
//         if(err) console.log(err);
//     });
// });
