// FILE SYSTEM
// using callback and sync not promises
// Callback API

const fs = require('fs'); // storing fs module to "fs"


// Creating a text file and writting the data into that file
// fs.writeFile(file,data[,options],callback)
// fs.writeFile("hey.txt", "How are you Hemant",function(err){
//     if(err) console.error(err);
//     else console.log("done");
//     // Run by using node script.js
// })

// Appending data to the file, if file not exist it will create the file
// fs.appendFile(path,data[,options],callback)

// fs.appendFile("hey.txt", " Hi I am appensing some to the file...", function(err){
//     if(err) console.err(err)
//     else console.log("done")
// })

// Renaming the file
// fs.rename("hey.txt", "Newhey.txt", function(err){
//     if(err) console.err(err)
//     else console.log("done")
// })

// Copy File
// fs.copyFile(src, dest[,model], callback)
// fs.copyFile("Newhey.txt", "./copy/Oldhey.txt", function(err){
//     if(err) console.err(err)
//     else console.log("done")
// })

// Removing the file
// fs.unlink("Newhey.txt", function(err){
//     if(err) console.error(err)
//     else console.log("done")
// })

// Removing the directory
// fs.rmdir("./copy", function(err)) ->It will fail because copy folder has files, So we need to put recursive options here
// rmdir is now rm
fs.rm("./copy", {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed");
})
