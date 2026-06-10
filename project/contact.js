let btn = document.getElementById("btn")
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")
let male = document.getElementById("male").value
let female = document.getElementById("female").value
let main = document.getElementById("main")

btn.addEventListener('click',()=>{
    if(fname.value.length < 1 || !isNaN(fname.value) || !isNaN(lname.value) || email.value.length < 1){
        alert("please give your name")
    }
    else{
        fullname = fname.value+" "+lname.value
        main.innerHTML = `<div style= "display: flex;flex-direction: column; align-items : center; justify-content:center; height:  ;color:black; background-color: white; width:100%; height: 500px; border-radius: 20px; gap: 30px; text-transform : capitalize;">
        <h3>Thank you for contacting !!<br>
        <span style="color:orange;font-size:40px;">${fullname} <i class="fa-jelly fa-regular fa-heart"></i></span></h3>
        <h4>I will reach back to you to this email <br><span style="color:green ; font-size: 28px; text-align: center; text-transform: lowercase">${email.value}</span ><br>as soon as possible </h4></div>`
        let container = document.getElementById("container")
        container.style.backgroundColor = "white"
    }
})