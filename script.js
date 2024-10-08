var text = document.querySelector(".text");
var btn = document.querySelector(".btn");
var img = document.querySelector(".image");
var main = document.querySelector(".main_img")

async function GetImg(){
    let response = await fetch('https://api.thecatapi.com/v1/images/search');
    let data = await response.json();
    // main.src = data[0].url;
    return data[0].url;
}

async function GetCat(){
    let response = await fetch('https://catfact.ninja/fact');
    let data = await response.json();
    // text.innerHTML = data.fact;
    return data.fact;
}



btn.addEventListener("click", async () =>{
const [imgUrl, catFact] = await Promise.all([GetImg(), GetCat()]);

    main.src = imgUrl;
    text.innerHTML = catFact;
});