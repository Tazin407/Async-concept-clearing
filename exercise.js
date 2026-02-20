// Task:
// 1. Make 3 simulated API calls (can use setTimeout wrapped in Promises)
// 2. Wait for all 3 to finish using Promise.all
// 3. Save each result to a separate file
// 4. Measure total execution time
// 5. Handle one failure gracefully

import fs from "fs/promises"

const urls = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]

async function fetchAll(){
    console.time("Allfetch");
    try{
        const result = await Promise.allSettled(urls.map(async u=>{
            // u=>fetch(u)
            // .then(r=>r.json())
            // .then(data=> fs.writeFile(`outputData${data.id}.txt`, JSON.stringify(data, null, 2)) )
            const r = await fetch(u);
            const data = await r.json();
            await fs.writeFile(`outputData${data.id}.txt`, JSON.stringify(data, null, 2));
        }
        ))
        // console.timeLog("log", result.data[0]);

    }
    catch(err){
        console.error("Failed", err)
    }
    console.timeEnd("Allfetch");
    
}

fetchAll();