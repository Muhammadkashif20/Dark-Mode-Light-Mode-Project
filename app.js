var btn=document.getElementById('btn')
var main=document.getElementById('main-Div')
btn.addEventListener('click',function () {
    if(btn.innerText=='Dark Mode'){
        main.style.backgroundColor='black'
        btn.innerText='Light Mode'
        btn.style.backgroundColor='white'
        btn.style.color='black'
    }
    else if(btn.innerText=='Light Mode'){
        main.style.backgroundColor='white'
        btn.innerText='Dark Mode'
        btn.style.backgroundColor='black'
        btn.style.color='white'
    }
})


