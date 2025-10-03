const clicker = document.querySelector("#clicker")
const score = document.querySelector("#score")
const avtoscore = document.querySelector("#avto_score")
let count = 0
let power = 1

clicker.onclick = ()=> {
    count = count + power
    score.innerHTML=count
}

let autoclick = 0
let autoInc = setInterval(() => {
    count = count + autoclick
    score.innerHTML = count
    console.log(count,autoclick) 
}, 1000)

const br_rk = document.querySelector("#br_rk")
br_rk.onclick = ()=> {
    if (count>=30) {
        count = count - 30
        power = power + 3
            score.innerHTML=count
    }
}
const gz_rk = document.querySelector("#gz_rk")
gz_rk.onclick = ()=> {
    if (count>= 5000) {
        count = count - 5000
        power = power + 10
            score.innerHTML=count
    }
}
const zl_rk = document.querySelector("#zl_rk")
zl_rk.onclick = ()=> {
    if (count>= 15000) {
        count = count - 15000
        power = power + 100
            score.innerHTML=count
    }
}
const alm_rk = document.querySelector("#alm_rk")
alm_rk.onclick = ()=> {
    if (count>= 50000) {
        count = count - 50000
        power = power + 1000
            score.innerHTML=count
    }
}
const avto = document.querySelector("#avto")
avto.onclick = ()=> {
    if (count>= 200) {
        count = count - 200
        autoclick = autoclick + 10
            score.innerHTML=count
            avtoscore.innerHTML=autoclick
    }
}
const ctpd = document.querySelector("#ctpd")
ctpd.onclick = ()=> {
    if (count>= 10000) {
        count = count - 10000
        autoclick = autoclick + 100
            score.innerHTML=count
            avtoscore.innerHTML=autoclick
    }
}
const pom = document.querySelector("#pom")
pom.onclick = ()=> {
    if (count>= 30000) {
        count = count - 30000
        autoclick = autoclick + 1000
            score.innerHTML=count
            avtoscore.innerHTML=autoclick
    }
}
const pobeda = document.querySelector("#pobeda")
pobeda.onclick = ()=> {
    if (count>= 500000) {
        count = count - 500000
        autoclick = autoclick + 1000000
            score.innerHTML=count
            avtoscore.innerHTML=autoclick
    }
}