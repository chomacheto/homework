let loc = window.location.search;
console.log(loc);

let searchParams = new URLSearchParams(loc);
console.log(searchParams);
let viewImg = document.querySelector("#viewImg");
viewImg.src = `/images/${searchParams.get("id")}.jpg`;