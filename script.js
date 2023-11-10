let btns =['.']

function btnPush(){
    btns.push('.')
    btnSaz()
}
    
function btnSaz(){
    document.body.innerHTML = ""
    btns.forEach((btn,index)=>{
        let counter = index +1
        btn = document.createElement('div')
        btn.className = 'btn'
        btn.innerHTML = counter
        btn.setAttribute('onclick','btnPush()')

       
        if(counter % 5 == 0){
            btn.className = "btnHob"
        }else if(counter % 2 == 0){
            btn.style.backgroundColor = "#9b5de5"
        }
        document.body.append(btn)
    })

}

let besaz = setInterval(btnPush,500)



let flag = true
document.addEventListener('keypress',(e)=>{

    if(e.keyCode == 32 && flag){
        clearInterval(besaz)
        flag = false
    }else {
        besaz = setInterval(btnPush,500)
        flag = true
    }
})