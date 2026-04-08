let count = 0

let visitedBtn = document.querySelector("#visited-btn")
let peopleCounter = document.querySelector("#people-counter")
let saveBtn = document.querySelector("#save-btn")
let bottomStripe = document.querySelector(".bottomStripe")
let resetBtn = document.querySelector("#reset-btn")

visitedBtn.addEventListener("click", visited)
saveBtn.addEventListener("click", save)
resetBtn.addEventListener("click",reset)


function visited(){
    count += 1
    peopleCounter.textContent = count
}

function save(){
    let countSrc = count + " - "
    bottomStripe.textContent += countSrc
    count = 0

}

function reset(){
     peopleCounter.textContent = 0
    bottomStripe.textContent = 0
    count = 0
}
