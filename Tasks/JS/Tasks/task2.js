let btn = document.querySelector("#btn");
let main = document.querySelector("main");

async function fetchData() {
    let data = await fetch("https://fakestoreapi.com/products");

    let newData = await data.json();
    console.log(newData);

    newData.forEach(ele => {   
        let div = document.createElement("div");

        div.innerHTML = `
            <img src="${ele.image}" width="120">
            <h3>${ele.title}</h3>
            <p>₹ ${ele.price}</p>
        `;

        main.appendChild(div);
    });
}

let gear = document.getElementById("gear");

gear.addEventListener("click", () => {
    alert("Settings clicked!");
});

btn.addEventListener("click", fetchData);