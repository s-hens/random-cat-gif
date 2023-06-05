const img = document.querySelector("img");

/*
function showCat() {
    document.querySelector(".loading").innerText = "Loading...";
    img.style.display = "none";

    fetch("https://api.giphy.com/v1/gifs/random?api_key=g07raV7wZk1zQc2Qp7f5Detu7J3CfOCU&tag=cat&rating=g", {mode: "cors"})
        .then(function(APIresponse) {
            return APIresponse.json();
        })
        .then(function(APIresponse) {
            img.src = APIresponse.data.images.original.url;
        })
        .then(function(APIresponse) {
            document.querySelector(".loading").innerText = "";
            img.style.display = "block";
        });
}
*/

// Refactored using async/await...

async function showCat() {
    // Do this instantly
    document.querySelector(".loading").innerText = "Loading...";
    img.style.display = "none";

    // Only move on to the next line after the promise (fetch) is returned
    const APIresponse = await fetch("https://api.giphy.com/v1/gifs/random?api_key=g07raV7wZk1zQc2Qp7f5Detu7J3CfOCU&tag=cat&rating=g", {mode: "cors"});
    
    // Only move on to the next line after the promise is returned and used in this line
    //await console.log(APIresponse);
    const json = await APIresponse.json();

    img.src = json.data.images.original.url;
    img.style.display = "block";
    document.querySelector(".loading").innerText = "";
}

document.querySelector(".moar").addEventListener("click", showCat);

showCat();