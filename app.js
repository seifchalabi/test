let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let body = document.body
btn.addEventListener("click",()=>{
    let li = document.createElement("li")
    li.textContent = "Hello world"
    ul.append(li)
    li.addEventListener("dblclick",()=>{
        li.remove()
    })
})