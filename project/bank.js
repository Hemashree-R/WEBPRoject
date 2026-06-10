let bal = document.getElementById("balancebtn")
let withdraw = document.getElementById("withdraw")
let deposite = document.getElementById("deposite")
let text = document.getElementById("text")
balance = document.getElementById("balance")
clear = document.getElementById("clear")
input = document.getElementById("input")
submit = document.getElementById("submit")
wsubmit = document.getElementById("wsubmit")

text.innerHTML = "please select the operation to be done"



let balanceAmount = 0
bal.addEventListener('click',()=>{
    text.innerText = `Total balance available`
    balance.style.display = "inline"
    balance.innerText = `Rs. ${balanceAmount}`
    clear.style.display = "inline"
    wsubmit.style.display = "none"
    input.style.display = "none"
    submit.style.display = "none"
    
})
deposite.addEventListener('click',()=>{
    text.innerText = `please Enter the amount to be deposited`
    input.style.display = "inline"
    wsubmit.style.display = "none" 
    submit.style.display = "inline" 
    balance.style.display = "none"
    clear.style.display = "none"
})
withdraw.addEventListener('click',()=>{
    text.innerText = `please Enter the amount to be withdrawed`
    input.style.display = 'inline'
    submit.style.display ="none"
    wsubmit.style.display = "inline"
    balance.style.display = "none"
    clear.style.display = "none"

})
clear.addEventListener('click',()=>{
    text.innerText = "please select the operation to be done"
    clear.style.display = "none"
    balance.style.display = "none"
})
submit.addEventListener('click',()=>{
    if(isNaN(Number(input.value)) || input.value.length < 1){
        text.innerHTML = `<h1 style="color:red">Please enter the correct amount</h1>`
    }
    else{
        text.innerText = `amount deposited, total balance available`
        input.style.display = "none"
        submit.style.display= "none"
        wsubmit.style.display= "none"
        balanceAmount+=Number(input.value)
        balance.style.display = "inline"
        balance.innerText = `Rs. ${balanceAmount}`
        clear.style.display="inline"
        input.value = ""
    }
    console.log(isNaN(Number(input.value)))
})
wsubmit.addEventListener('click',()=>{
    if(isNaN(Number(input.value)) || input.value.length <=1 ){
        text.innerHTML = `<h1 style="color:red">Please enter the correct amount</h1>`
    }
    else{
        if(input.value > balanceAmount){
            text.innerHTML = `<h1 style="color:red">insufficient balance</h1>`
            input.style.display = "none"
            wsubmit.style.display= "none"
            clear.style.display="inline"
                input.value = ""

        }else{
            console.log(input.value<balanceAmount)
            text.innerText = `amount withrawed, total balance available`
            input.style.display = "none"
            wsubmit.style.display= "none"
            balanceAmount-=Number(input.value)
            // balance.innerText = `${balanceAmount}`
            balance.style.display = "inline"
            balance.innerText = `Rs. ${balanceAmount}`
            clear.style.display="inline"
            input.value = ""
        } 

    }
    console.log(Number(input.value)<balanceAmount)
    
})

