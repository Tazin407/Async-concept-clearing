
async function fetchAll() {
    const urls = []
    for(let i=1; i<4; i++){
    
        urls.push(`https://jsonplaceholder.typicode.com/todos/${i}`)

    }

  try {
    console.time("AllFetch");
    const results = await Promise.all(urls.map(u => fetch(u).then(r => r.json())));
    console.timeEnd("AllFetch");
    console.log(results);
  } catch (err) {
    console.error("One of the requests failed:", err);
  }
}

fetchAll();