// JSON = JavaScript Object Notation) data-interchange fomat 
//        used for exchannging databetween a server and a web application
//  JSON files{key:value} OR [values1,value2, value3]

//    JSON.stringfy() = converts a JS object to a json string
//  json.parse() = coverts a JSOn String to a JS object


// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.isEmployed)))
//     .catch(error => console.error(error))

// fetch = Function used for making HTTP requests to fetch resources.
//      (JSON style data, images, filess)
//        simplifies asynchronous data fetching in Javascipt and used for interacting with APIs to retrieve and send data asyncgronously over the web
//       fetch(url, {options})
//       fetch(url, {options})


fetchData();

async function fetchData(){
    
    try{
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");

        if(!response.ok){
            throw new Error("could not fetch resource");

        }

        const data  = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);
    }
}

