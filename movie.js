'use strict'

const searchBar = document.querySelector(".search-bar")
const Btn = document.querySelector(".btn")
const image1=document.querySelector(".view-img")
const outcome =document.querySelectorAll(".outcome")
const inputsTag= document.querySelector(".inputsTag")
const view = document.querySelector(".view")
// console.log(outcome);




// const url = `https://www.omdbapi.com/?apikey=[yourkey]&`
const key = `8565fb45`

async function getFullDetailes(id) {
    const detailsUrl = `https://www.omdbapi.com/?apikey=8565fb45&i=${id}`
    console.log(detailsUrl);
    const sentDetails = await fetch(detailsUrl)
    const detailsData = await sentDetails.json()
    console.log(detailsData);


    const mapout = detailsmapout(detailsData)
    const details = document.querySelector(".details")
    details.innerHTML=mapout
    
    console.log(mapout);

    
}
const getMovie = async ()=>{
    const movieName=searchBar.value 
    const myurl = `https://www.omdbapi.com/?apikey=8565fb45&s=${movieName}`

    const sentData = await fetch(myurl)
    const data = await sentData.json()
    const  slice = data.Search.slice(0,9)
    console.log(slice);
    console.log(data);
    const mapper = slice.map(mapou);
    const outcome = document.querySelector(".outcome")
    outcome.innerHTML = mapper.join('');

    
    const eachout = document.querySelectorAll(".eachOutcome")



  





    eachout.forEach(one => {
        one.addEventListener("click", (e)=>{
            console.log(e);
            const parentEl=e.target.closest('.eachOutcome');
            console.log(parentEl);
            const cardSrc=parentEl.children[0].getAttribute('src');
            e.stopPropagation()
            inputsTag.style.display="none"
            view.style.display="flex"
            image1.src = cardSrc;
            console.log(parentEl.getAttribute('id'));
            getFullDetailes(parentEl.getAttribute('id'))
            // return`<div class="details">
            //     <h1>
            // </div>`

        
        })
        
    });
    
}



function mapou (p) {
    return`<div class="outcome">
        <div class="eachOutcome"  id=${p.imdbID}>
            <img src="${p.Poster}  id="display-img" >
            <div class="details1">
                <h1>${p.Title}</h1>
                <h3>${p.Type}</h3>
                <h3>${p.Year}</h3>
            </div>
        </div>
    </div>`
    
}

function detailsmapout(d){
    return` <div class="details">
        <div class=""minidetails>
            <h1>${d.Title}</h1>
            <h3>About : ${d.Plot}</h3>
            <h3>Year : ${d.Year}</h3>
            <h3>Language :  ${d.Language}</h3>
        </div>
    </div>`
}





Btn.addEventListener("click", ()=>{
    getMovie()
    
    // movieOutcome()

})

document.addEventListener("click", () =>{
    inputsTag.style.display="flex"
    view.style.display="none"
})







// console.log(`https://www.omdbapi.com/?apikey=8565fb45&`);

// async function getMovie() {
//     const response = await fetch(myurl);
//     const data = await response.json()
//     console.log(data);
//     console.log(response);
// }

// getMovie()

