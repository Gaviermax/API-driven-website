let url = "https://v2.jokeapi.dev/"
let joke ="";


// let getJoke = (url)={
    
// }


  
//   fetch("https://v2.jokeapi.dev/joke/Any?type=single")
//     .then(response => response.text())
//     .then((result) => {
//         console.log(result)
//     })
//     .catch(error => console.log('error', error));


document.querySelector("#makeJoke").addEventListener("click", ()=>{
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(response => response.json())
    .then(result => 
        {
            joke = result.joke;
            document.querySelector("#jokeArea").innerHTML = 
            `
                <h4><em>${joke}</em></h4>
            `
        })
    .catch(error => console.log('error', error));
})


  
//   fetch("https://v2.jokeapi.dev/joke/Any?type=single")
//     .then(response => response.json())
//     .then(result => console.log(result.joke))
//     .catch(error => console.log('error', error));


    