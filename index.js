// console.log('welcome to nodejs')

// OSS:
// const os = require('os')
// console.log(os.hostname())
// console.log(os.homedir())
// console.log(os.freemem())
// console.log(os.cpus())
// console.log(os.uptime())
// ---------------------------------------
// Three type of packages in nodeJS:
// 1. In built package
// 2. External package(npm)
// 3. user developed packages
// -----------------------------------------
// HTTP:

const http = require('http')
const fs = require('fs')
const { isUtf8 } = require('buffer')

// server creation
const server = http.createServer((req, res)=>{    
   let filename = new Date().toLocaleDateString().split('/').join('-')+'-'+new Date().toLocaleTimeString().split(':').join('-');                               
   res.writeHead(200,{"Content-type":"application/json"})                   
//    res.end(JSON.stringify({
//        title: "NodeJS",
//        content: "my first API rafi mohamed"
//    }))
fs.writeFile(`files/${filename}.txt`, `Time is - ${new Date().toTimeString()}`, 'utf-8', ()=>{

   fs.readFile(`files/${filename}.txt`, 'utf-8', (error, data)=>{
      if (error)
      console.log(error)
       else 
       res.end(data)

   })
})
     

})

// Activate server
server.listen(8000, ()=>console.log('server is listening port 8000'))



// -------------------------------------------
// Two things importatnt for server - request and responce
// writehead - which type of content to get

// Json obj - we cant send
// json string - only we can send

// Content Type:
// Content-type:application/json - it will consider as json string
//  Content-type:text/htm - it will consider as html
//  Content-type:multipart/file - it will consider as file and we can dowload and see the data

