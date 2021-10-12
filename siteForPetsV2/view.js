let loc = window.location.search;
console.log(loc);

let searchParams = new URLSearchParams(loc);
console.log(searchParams);

var id = searchParams.get("id")

for(i=0; i<petData.length; i++) {
    if(id == petData[i].id){

        let viewImg = document.querySelector("#viewImg");
        viewImg.src = `/images/${petData[i].image}`;
        let viewData = document.querySelector("#demo");
        viewData.textContent = petData[i].age+"\n"+petData[i].name
    }
    }
