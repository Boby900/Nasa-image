let display = ()=>{
    fetch('https://api.nasa.gov/planetary/apod?api_key=TEvfJY8M5p2cwkoNnNP4HbApCVB2tsGDp7bhKiw6')
    .then(res => res.json())
    .then(data => document.querySelector('img').src = data.url)
    
}
let button = document.querySelector("button")
button.addEventListener("click",display)