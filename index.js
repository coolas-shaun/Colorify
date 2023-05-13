// Here we are using event listeners to change the colors

let red = document.querySelector('.btn-1')
let green = document.querySelector('.btn-2')
let blue = document.querySelector('.btn-3')
let random = document.querySelector('.btn-4')

let circle = document.querySelector('.circle')

red.addEventListener('click',()=>{setColor('red')})
green.addEventListener('click',()=>{setColor('green')})
blue.addEventListener('click',()=>{setColor('blue')})

//Randomizing the color

random.addEventListener('click', ()=>{
    let color = genRandomColor()
    setColor(color)
})


function setColor(color){
    circle.style.background = color
}

function genRandomColor(){
    let limit = 256
    let val1 =  Math.floor(Math.random()*limit)
    let val2 =  Math.floor(Math.random()*limit)
    let val3 =  Math.floor(Math.random()*limit)
    return 'rgb('+val1.toString()+','+val2.toString()+','+val3.toString()+')'
}