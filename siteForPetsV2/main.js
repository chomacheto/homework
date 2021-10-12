let gridDiv = document.querySelector(".grid")

for(i=0; i<petData.length; i++) {
    let imageA = document.createElement("a");
    let photo = document.createElement("img");
    photo.src = "/images/"+petData[i].image;
    imageA.appendChild(photo);
    imageA.href= "view.html?id="+petData[i].id;
    imageA.target="_blank";
    imageA.innerHTML
    gridDiv.appendChild(imageA);
}





















