let counter = 0
function btnSaz(){

    counter ++
    const btn = document.createElement('div')
    btn.className = 'btn'
    btn.innerHTML = counter
    btn.setAttribute('onclick','btnSaz()')
    
    document.body.append(btn)

}