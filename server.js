// const os=require('os')
const path=require('path')
const fspromises=require('fs').promises

//using promises

const fileOps= async()=>{
    try{
        data=await fspromises.readFile(path.join(__dirname,'files','starter.txt'))
        console.log(data.toString())
        console.log('heyyyy')

    }
    catch(err){
        console.log(err)
    }
}
fileOps()

// the callback hell 
fs.readFile(path.join(__dirname,'files','starter.txt'),'utf8',(err,data)=>{
    if(err)
        throw err
    console.log(data)
})

fs.writeFile(path.join(__dirname,'files', 'reply.txt'),'nice to meet you',(err)=>{
    if(err) throw err
    console.log('writer complette')

    fs.appendFile(path.join(__dirname,'files', 'reply.txt'),'\n\n nice to meet you too',(err)=>{
        if(err) throw err
        console.log('append complette')
        
        fs.rename(path.join(__dirname,'files', 'reply.txt'),path.join(__dirname,'files', 'newreply.txt'),(err)=>{
            if(err) throw err
            console.log('rename complette')
            
        })
        
    })

})

console.log('hello. ...')