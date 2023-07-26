const inp = document.querySelectorAll("#input")
const won = document.querySelector(".won")
const loss = document.querySelector(".loss")
const p = document.querySelector("p")
const inpVal = document.querySelector(".inpVal")
const name1 = document.querySelector(".name1")
const name2 = document.querySelector(".name2")
const btn = document.querySelector("button")
const btn1 = document.querySelector(".btn1")
const container = document.querySelector(".container")
const add1 = document.querySelector(".add1")
const add2 = document.querySelector(".add2")
const form = document.querySelector("form")
const header = document.querySelector(".header")
const formcontent = document.querySelector(".formcontent")
const inp4 = document.querySelector(".color")
const inp5 = document.querySelector(".colors")
const winner1 = document.querySelector(".winner1")
const winner2 = document.querySelector(".winner2")
const starts = document.querySelector(".starts")
const but1 = document.querySelector(".but1")

const but2 = document.querySelector(".but2")


let value = 0;
for (let i = 0; i < inp.length; i++) {
    btn1.addEventListener("click",()=>{
        add1.innerText = "0"; 
        add2.innerText = "0"; 
        values = 1;
        values1 = 1;
        header.classList.remove("headshow")
        form.classList.remove("form")
        

    })
    function multi(){
        inp[i].addEventListener("click", () => {
            if(inp[i].value ==""){
    
            
                
            let res = value++;
            console.log(res);
            if (res % 2 == 0) {
                inp[i].value = "X"
                inp[i].style.color = "black";
    
            }
            else {
    
                inp[i].value = "O"
                inp[i].style.color = "white";
             
    
            }
        }
        
            if (inp[0].value == "X" && inp[1].value == "X" && inp[2].value == "X") {
                display();
            }
            else if (inp[3].value == "X" && inp[4].value == "X" && inp[5].value == "X") {
                display();
            }
            else if (inp[0].value == "X" && inp[3].value == "X" && inp[6].value == "X") {
                display();
            }
            else if (inp[1].value == "X" && inp[4].value == "X" && inp[7].value == "X") {
                display();
            }
            else if (inp[2].value == "X" && inp[5].value == "X" && inp[8].value == "X") {
                display();
            }
            else if (inp[3].value == "X" && inp[4].value == "X" && inp[5].value == "X") {
                display();
            }
            else if (inp[0].value == "X" && inp[4].value == "X" && inp[8].value == "X") {
                display();
            }
            else if (inp[6].value == "X" && inp[7].value == "X" && inp[8].value == "X") {
                display();
            }
            else if (inp[2].value == "X" && inp[4].value == "X" && inp[6].value == "X") {
                display();
            }
    
    
    
            else if (inp[0].value == "O" && inp[1].value == "O" && inp[2].value == "O") {
                show()
            }
           
                else if (inp[3].value == "O" && inp[4].value == "O" && inp[5].value == "O") {
                show()
            }    
            else if (inp[0].value == "O" && inp[3].value == "O" && inp[6].value == "O") {
                show()
            }
            
            else if (inp[1].value == "O" && inp[4].value == "O" && inp[7].value == "O") {
                show()
            }
           
            else if (inp[2].value == "O" && inp[5].value == "O" && inp[8].value == "O") {
                show()
            }
            
            else if (inp[3].value == "O" && inp[4].value == "O" && inp[5].value == "O") {
                show()
            }
            
            else if (inp[6].value == "O" && inp[7].value == "O" && inp[8].value == "O") {
                show()
            }
            
            else if (inp[0].value == "O" && inp[4].value == "O" && inp[8].value == "O") {
                show()
            }
            
            else if (inp[2].value == "O" && inp[4].value == "O" && inp[6].value == "O") {
                show()
            }
    
            else if (value==9){
                p.classList.add("actives")
                container.classList.add("hide")
            }
    
    
        })
    }

    

    but2.addEventListener("click",()=>{
        formcontent.classList.remove("form")
        multi()
    })
    btn.addEventListener("click", (e) => {
        inp[i].value = ""
        won.classList.remove("active")
        loss.classList.remove("active")
        p.classList.remove("actives")
        container.classList.remove("hide")
        value = 0;

    })

}

let values = 1;
function display(){
    won.classList.add("active")
    container.classList.add("hide")
    let val = values++
    add1.innerText = val;

}
let values1 =1;
function show(){
    loss.classList.add("active")
    container.classList.add("hide")
    let val1 = values1++
    add2.innerText = val1;
}


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    form.classList.add("form")

    displayAlert();
    // header.classList.add("headshow")
    if(inp4.value !== "" && inp5.value !== ""){
    name1.innerText = inp4.value
    name2.innerText = inp5.value
    winner1.innerText = inp4.value
    winner2.innerText = inp5.value
    }
    else{
        name1.innerText = "X"
        name2.innerText = "O"
        winner1.innerText = "X"
        winner2.innerText = "O"
    }
    inp4.value = "";
    inp5.value = "";
    
    
})

function displayAlert(){
    starts.classList.add("show")

    window.setTimeout(()=>{
    starts.classList.remove("show")
     header.classList.add("headshow")


    },1000)
}


