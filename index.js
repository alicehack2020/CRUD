 var fs = require('fs');

const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
});

 

readline.question('',value=>{
   
    var all=value.split(" ")

    var action=all[0]
    var value=all[1]
    

    if(action==="read")
    {
      fs.readFile('hello.txt',(err,data)=>{
        console.log(data.toString('utf8'))
       });
    }
    else if(action==="append")
    {
        fs.writeFile('hello.txt',(err,value)=>{
            console.log(value.toString('utf8'))
        });
    }
    else if(action==="delete")
    {
        fs.unlink("hello.txt",(err)=>{
            console.log("file deleted");
        })
    }
    else if(action==="create")
    {
        fs.writeFile('newfile.txt', 'Learn Node FS module', function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
          });
    }
    else if(action==="rename")
    {
        fs.rename('hello.txt', 'welcome.txt', function(err) {
            console.log("file renamed")
        });
    }
    
     
    readline.close();
})

 