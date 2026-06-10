let inp = document.getElementById("input")
let btn = document.getElementById("submit")
let img = document.getElementById("qrCode")
let qr = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`

btn.addEventListener('click',()=>{
    userInp = inp.value
    if(userInp.length < 1){
        alert(`please provide proper input`)
    }
    else{
        if(isNaN(userInp)){
            alert("please enter only Numbers")
        }
        else{

            img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example${userInp}`
            setTimeout(()=>{
                img.src = ""
                alert("Maximum time exceeded")
            },2000)
        }
        inp.value = ""
    }

})