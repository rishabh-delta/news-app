let input=document.querySelector("input");
let technology=document.querySelector("#technology");
let sports=document.querySelector("#sports");
let politics=document.querySelector("#politics");
let button=document.querySelector("button");
let cardData=document.querySelector(".cardData");
let apiKey="f5953fdedda743018342829317f94933" ;


const getData=(inputValue)=>{
    const res=axios.get(`https://newsapi.org/v2/everything?q=${inputValue}&apiKey=${apiKey}`);
    res.then((result)=>{
        cardData.innerHTML="";
        
        for(let i=0;i<result.data.articles.length;i++){
            
            let newsDiv=document.createElement("div");
            newsDiv.classList.add("card");
            cardData.appendChild(newsDiv);
           
    
            newsDiv.innerHTML=(`
            <img src="${result.data.articles[i].urlToImage}" alt="news"></img>
            <h3>${result.data.articles[i].title}</h3>
            <p>${result.data.articles[i].description}</p>`)
        }
        })
    .catch((err)=>{
        console.log(err);
    })
}
button.addEventListener("click",()=>{
    
    let inputValue=input.value;
    getData(inputValue);
});
window.addEventListener("load",()=>{
    getData("India");
});

const navName=()=>{

}

sports.addEventListener("click",()=>{
    input.value="sports";
    getData(input.value);
    sports.classList.add("underline");
    politics.classList.remove("underline");
});

technology.addEventListener("click",()=>{
    sports.classList.remove("underline");
    politics.classList.remove("underline");
    input.value="technology";
    getData(input.value);
    technology.classList.add("underline");
    sports.classList.remove("underline");
    politics.classList.remove("underline");
});

politics.addEventListener("click",()=>{
    sports.classList.remove("underline");
    technology.classList.add("underline");
    input.value="politics";
    getData(input.value);
    politics.classList.add("underline");
})