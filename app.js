let body = document.body
let input = document.querySelector("input")
let btn = document.querySelector("button")
let ol = document.querySelector("ol")
btn.addEventListener("click",()=>{
    if(input.value != ""){
        let li = document.createElement("li")
        li.textContent = input.value
        input.value = ""
        ol.append(li)
        li.addEventListener("click",()=>{
            li.style.textDecoration = "line-through"
        })
        li.addEventListener("dblclick",()=>{
            li.remove()
        })
    }
})