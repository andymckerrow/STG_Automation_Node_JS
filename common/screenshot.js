

function takeScreenshot(driver, name){
driver.takeScreenshot().then(function(data){
   var decodedImage = new Buffer.from(base64Image, 'base64');
     fs.writeFile(name +"jpg", decodedImage, function(err){});
     var d = new Date();
     var fn = name + d.getTime() + '.jpg'
        if(err) console.log(err);
   });
});