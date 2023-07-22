let input = document.querySelector('input');
let CE = document.querySelector('.CE-btn');
let C = document.querySelector('.C-btn');
let drob = document.querySelector('.drob-btn');
let multi = document.querySelector('.multi-btn');
let seven = document.querySelector('.seven-btn');
let eight = document.querySelector('.eight-btn');
let nine = document.querySelector('.nine-btn');
let minus = document.querySelector('.minus-btn');
let four = document.querySelector('.four-btn');
let five = document.querySelector('.five-btn');
let six = document.querySelector('.six-btn');
let plus = document.querySelector('.plus-btn');
let one = document.querySelector('.one-btn');
let two = document.querySelector('.two-btn');
let three = document.querySelector('.three-btn');
let sum = document.querySelector('.sum-btn');
let zero = document.querySelector('.zero-btn');
let dot = document.querySelector('.dot-btn');



one.addEventListener('click', function(){
    input.value += one.value
})
two.addEventListener('click', function(){
    input.value += two.value
})
three.addEventListener('click', function(){
    input.value += three.value
})
four.addEventListener('click', function(){
    input.value += four.value
})
five.addEventListener('click', function(){
    input.value += five.value
})
six.addEventListener('click', function(){
    input.value += six.value
})
seven.addEventListener('click', function(){
    input.value += seven.value
})
eight.addEventListener('click', function(){
    input.value += eight.value
})
nine.addEventListener('click', function(){
    input.value += nine.value
})
zero.addEventListener('click', function(){
    input.value += zero.value
})
dot.addEventListener('click', function(){
    input.value += dot.value
})
plus.addEventListener('click', function(){
    input.value += plus.value
})
minus.addEventListener('click', function(){
    input.value += minus.value
})
multi.addEventListener('click', function(){
    input.value += multi.value
})
drob.addEventListener('click', function(){
    input.value += drob.value
})

sum.addEventListener('click', function(){
    input.value = eval(input.value)
})

CE.addEventListener('click', function(){
    input.value = ''
})