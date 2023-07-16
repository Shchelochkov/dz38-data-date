
// let today = new Date()
// console.log(today)

// console.log(today.toDateString())
// console.log(today.toTimeString())

// let ny = new Date('2024-01-01')
// console.log(ny)
// console.log(ny.getTime())
// console.log(today.getTime()) //01-01-1970

// console.log(ny-today)


let inp = document.getElementById('inp')
let but = document.getElementById('but')
let time1 = document.getElementById('time1')
let moscow = document.getElementById('moscow')
let london = document.getElementById('london')
let vladiv = document.getElementById('vladiv')


function doNY() {
let today = new Date()
let ny = new Date(inp.value)
total = ny-today
let days = total/1000/60/60/24
let t1 = parseInt(days)
let t2 = parseInt((days - t1)*24-3)
let t3 = parseInt(((days - t1)*24-3-t2)*60)
let t4 = parseInt(((((days - t1)*24-3-t2)*60)-t3)*60+1)
console.log(t1, t2, t3, t4)
time1.innerHTML = '<h3>' + t1 + ' дней ' + t2 + ' часов ' + t3 + ' минут ' + t4 + ' секунд' + '</h3>'

setInterval(function(){
    doNY()
},1000)
}

function prostotime1() {
    let today = new Date()
    let hours = today.getHours()
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    moscow.innerHTML = hours + ':' + minutes + ':' + seconds
}

function prostotime2() {
    let today = new Date()
    let hours = today.getHours()-2
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    london.innerHTML = hours + ':' + minutes + ':' + seconds
}

function prostotime3() {
    let today = new Date()
    let hours = today.getHours()+7
    let minutes = today.getMinutes()
    let seconds = today.getSeconds()
    
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    if (seconds < 10) {
        seconds = '0' + seconds
    }
    vladiv.innerHTML = hours + ':' + minutes + ':' + seconds
}


but.onclick = doNY





setInterval(function(){
    prostotime1()
    prostotime2()
    prostotime3()
},1000)