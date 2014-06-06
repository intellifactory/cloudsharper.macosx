var containerName = "macosx";
var fileName = process.argv[2];
var azure = require('azure');
var blobService = azure.createBlobService();

console.log("uploading: " + fileName);
blobService.createBlockBlobFromFile(containerName, fileName, fileName,
    function (error) {
        if (error) {
            console.log("error when uploading to azure")
            console.log(error);
        } else {
            console.log("uploaded to azure");
        }
    });
