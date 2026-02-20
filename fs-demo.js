import fs from 'fs/promises';

async function saveData(){
    console.time("api-call");
    try{
        await fs.writeFile('demo.txt', 'Hello World');
        await fs.writeFile('demos/demo2.hal', 'Hello World 2'); //shows error
        await fs.appendFile('demo.txt', 'Hello World 3');
    
    }
    catch(err){
        console.error("Problem detected", err)
    }
    console.timeEnd("api-call");
};

saveData();