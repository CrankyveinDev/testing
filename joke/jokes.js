const generateJokes=async()=>{
    try{
        const setHeader={
            headers:{
                Accept:'application/json;'
            }
        }
        const res= await fetch('https://icanhazdadjoke.com/',setHeader)
        const data= await res.json();
        joke.innerHTML=data.joke;
    }catch(error){
        console.log("The error is ${error}");
    }
}


var joke =document.querySelector(".joke");
var jokebtn =document.querySelector(".btn");

jokebtn.addEventListener('click',generateJokes);
generateJokes();









