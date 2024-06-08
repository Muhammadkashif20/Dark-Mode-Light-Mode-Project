// var main=document.getElementById('main-Div').hasAttribute('class')
// console.log(main);
// // var convert=
// // console.log(convert);



// var box1=document.getElementById('box1')
// var box2=document.getElementById('box2')
// var btn1=document.getElementById('btn1')
// var btn2=document.getElementById('btn2')


// btn1.addEventListener('click',function card() {
//     box2.style.display='block'
    
//     })
//     btn2.addEventListener('click',function card() {
//         box1.style.display='none'
        
//         })
    





// var box2Del=document.getElementById('box2').style.display = 'block'
// var box1=document.getElementById('box1').style.display='none'    
// })
// function del() {
// location.reload()
// }




    // location.reload()

// addEventListener('click',function () {
    

// })



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


