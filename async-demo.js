async function fetchData(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);
    }
    catch (err){
        console.log("Error", err);
    }
};

fetchData("https://jsonplaceholder.typicode.com/todos/1");