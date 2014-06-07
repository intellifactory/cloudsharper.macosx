var containerName = "macosx";
var fileName = process.argv[2];
var azure = require('azure');
var blobService = azure.createBlobService();
var blobName = fileName.match(/[^/]+$/)[0]
console.log("uploading: " + fileName);
blobService.createBlockBlobFromFile(containerName, blobName, fileName,
				    function (error) {
					if (error) {
					    console.log("error when uploading to azure")
					    console.log(error);
					} else {
					    console.log("uploaded to azure");
					}
				    });
