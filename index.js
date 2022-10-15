const http = require('http');

const data = {
    Name:'Umesh PM',
    Course:'Full Stack Developer',
    Age:25,

}

const server = http.createServer((req,res)=>{
    res.write('<h1>Welcome to NodeJs</h1>');
    res.write(JSON.stringify(data));
    res.end();
});

server.listen(3000);

server.on('connection',(socket)=>{
    console.log('Handson-01 Completed');
})
