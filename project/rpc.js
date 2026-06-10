let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let sizer = document.getElementById("sizer")
let res = document.getElementById('res')
let us = document.getElementById('user')
let com = document.getElementById('computer')

rock.addEventListener('click',()=>{
    let user = rock.innerText
    let computer = user
    let randomNum = Math.ceil(Math.random()*100)
    if(randomNum > 66){
        computer = "rock"
        console.log(randomNum);
    }
    else if(randomNum>33){
        computer = "paper"
        console.log(randomNum);
    }
    else{
        computer = "sizer"
        console.log(randomNum);
    }
    us.innerHTML = `You gave : <span style= " color: pink">${user}</span>`
    com.innerHTML = `I gave : <span style= " color: pink">${computer}</span>`
    
    if(user == computer){
        res.innerHTML= `it is a <span style="color:green">DRAW</span>`
    }
    else if(computer == 'sizer'){
        res.innerHTML= `winner is<span style="color:yellow"> HEMASHREE</span>`
    }
    else{
        res.innerHTML= `winner is<span style="color:red"> COMPUTER</span>`
    }
    
    
})
paper.addEventListener('click',()=>{
    let user = paper.innerText
    let computer = user
    let randomNum = Math.ceil(Math.random()*100)
    if(randomNum > 66){
        computer = "rock"
        console.log(randomNum);
    }
    else if(randomNum>33){
        computer = "paper"
        console.log(randomNum);
    }
    else{
        computer = "sizer"
        console.log(randomNum);
    }
    us.innerHTML = `You gave : <span style= " color: pink">${user}</span>`
    com.innerHTML = `I gave : <span style= " color: pink">${computer}</span>`
    
    console.log(user);
    console.log(computer);

    if(user == computer){
        res.innerHTML= `it is a <span style="color:green">DRAW</span>`
    }
    else if(computer == 'rock'){
        res.innerHTML= `winner is<span style="color:yellow"> HEMASHREE</span>`
    }
    else{
        res.innerHTML= `winner is<span style="color:red"> COMPUTER</span>`
    }
    
    
})
sizer.addEventListener('click',()=>{
    let user = sizer.innerText
    let computer = user
    let randomNum = Math.ceil(Math.random()*100)
    if(randomNum > 66){
        computer = "rock"
        console.log(randomNum);
    }
    else if(randomNum>33){
        computer = "paper"
        console.log(randomNum);
    }
    else{
        computer = "sizer"
        console.log(randomNum);
    }
    
    console.log(user);
    console.log(computer);
    
    us.innerHTML = `you gave : <span style= " color: pink">${user}</span>`
    com.innerHTML = `I gave : <span style= " color: pink">${computer}</span>`
    if(user == computer){
        res.innerHTML= `it is a <span style="color:green">DRAW</span>`
    }
    else if(computer == 'paper'){
        res.innerHTML= `winner is<span style="color:yellow"> HEMASHREE</span>`
    }
    else{
        res.innerHTML= `winner is<span style="color:red"> COMPUTER</span>`
    }
    

})