const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////// FILES

// // Blocking, Synchronous way
// const textIn = fs.readFileSync('./txt/input.txt','utf-8');

// console.log(textIn);

// const textOut = `Este texto es de prueba: ${textIn}.\nCreated on ${Date.now()} `;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written...!');


// Non-Blocking, Asynchronous way
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) =>{
//     if (err) return console.log('Error!! 🆘');
    
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) =>{
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) =>{
//             console.log(data3);


//             fs.writeFile('./txt/final.txt', `${data2}\n ${data3}`,'utf-8', err =>{
//                 console.log('Your file has been written 🤓');
                
//             });
            
//         });        
//     });    
// });

// console.log('Will read file!');

///////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////// SERVER

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8',(err, data) =>{
    const dataObj = JSON.parse(data);      
});
const server = http.createServer((req, res) =>{
    const pathName = req.url;

    if (pathName === '/' || pathName === '/home') {
        res.end('<h1>WELCOME TO HOME PAGE!!!</h1>');        
    }else if (pathName === '/product') {
        res.end('<h1>Select your Products here...</h1>');
        
    }else if (pathName === '/api') {
      
            res.writeHead(200, {'Content-type':'application/json'});
            res.end(data);
        
    }else {
        res.writeHead(400, {
            'Content-type':'text/html',
            'my-custom-header':'hello-world'
        });
        res.end('<h3>OOppsss! Page not found</h3>');
    }
});

server.listen(8080, '127.0.0.1',() =>{
    console.log('Listening to requests on Port 8080');
    
});
