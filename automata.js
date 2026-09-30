const items = document.getElementById("items")
const buttons = document.getElementById("buttons")
const screen = document.getElementById("screen")
const hole = document.getElementById("hole")

const sodas = [
    {name: "Ez Alma", image: "alma.jpg",price: 800},
    {name: "Apenta", image: "apenta.jpg",price: 340},
    {name: "Coca Cola", image: "cocacola.png",price: 650},

    {name: "Dr Pepper", image: "drpepper.png",price: 600},
    {name: "Grapy", image: "grapy.jpg",price: 750},
    {name: "Hell kávé", image: "hellkave.jpg",price: 400},

    {name: "Kinley", image: "kinley.jpg",price: 550},
    {name: "Márka", image: "marka.jpg",price: 300},
    {name: "Punch", image: "punch.jpg",price: 1200}
]

for(let idx = 0; idx < sodas.length; idx++){
    const img = document.createElement("img") // <img/>
    img.src = "images/" + sodas[idx].image // <img src="link"/>

    const item = document.createElement("div")
    item.appendChild(img) // hozzáadja a item-hez

    const label = document.createElement("div")
    label.innerText = `#${idx} - ${sodas[idx].name}`
    item.appendChild(label)

    items.appendChild(item)
}

for(let i = 0; i < 9; i++){
    const btn = document.createElement("button")
    btn.innerText = i
    btn.addEventListener("click", ()=>buttonPressed(i))
    buttons.appendChild(btn)
}

function buttonPressed(idx){
    screen.innerText = sodas[idx].name + " kiadása..."
    
    setTimeout(()=>{
        screen.innerText = ""
        const img = document.createElement("img")
        img.src = "images/"+ sodas[idx].image
        hole.innerHTML = "" // kitörli az előző képet
        hole.appendChild(img) // hozzáadja az újat
    }, 2000)
}