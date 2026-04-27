let input=document.querySelector("#input");
let btn=document.querySelector("#btn");
let list=document.querySelector("#list");

btn.addEventListener("click",()=>{
    let li=document.createElement("li");
    li.innerHTML= `${input.value} <button class= del>delete</button> <button class= com>completed</button>`;

    list.appendChild(li);
    
})

list.addEventListener("click", (e) => {

    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
    }

    if (e.target.classList.contains("com")) {
        let li = e.target.parentElement;
        li.style.textDecoration = "line-through";
        li.remove();
    }
});

