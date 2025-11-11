const clicker = document.querySelector("#clicker")
const clickerimg = document.querySelector("#clicker img")
const score = document.querySelector("#score")
const avtoscore = document.querySelector("#avto_score")
const autopower = document.querySelector("#power")
const skidish = document.querySelector(".skidish")
const skidishVideo = document.querySelector(".skidish video")

let count = 0
let power = 1
let up = 0

let price =[30,200,80,2500,1000,30000,9000,1000000]
let lvl =['img/lvl2.png',  'img/lvl3.webp',  'img/lvl4.webp',  'img/lvl5.jpg']
function checkPrice() {
    const upgrades=document.querySelectorAll(".upgrade-card")
    upgrades.forEach((el,index) =>{
    if (count>=price[index]) {
            el.classList.remove("upgrade-card-close")
        }else{
            el.classList.add("upgrade-card-close")
        }
    })
}

function upgrade_game() {
     count = 0
     power = 1
    autoclick = 0
     price =[30,200,80,2500,1000,30000,9000,1000000]
    clickerimg.src = lvl[up]
    up = up + 1  
    br_rk.lastElementChild.innerHTML="цена "+price[0]
    gz_rk.lastElementChild.innerHTML="цена "+price[2]
    zl_rk.lastElementChild.innerHTML="цена "+price[4]
    alm_rk.lastElementChild.innerHTML="цена "+price[6]
    avto.lastElementChild.innerHTML="цена "+price[1]
    ctpd.lastElementChild.innerHTML="цена "+price[3]
    pom.lastElementChild.innerHTML="цена "+price[5]
    pobeda.lastElementChild.innerHTML="цена "+price[7]
    skidish.style.display="flex" 
    skidishVideo.play()
    setTimeout(()=>{
        skidish.style.display = "none"
    }, 6000)
}

clicker.onclick = ()=> {
    count = count + power
    score.innerHTML=count
    checkPrice()
}

let autoclick = 0
let autoInc = setInterval(() => {
    count = count + autoclick
    score.innerHTML = count
    checkPrice() 
}, 1000)

let autop = setInterval(() => {
    autopower.innerHTML = power
}, 100)

const br_rk = document.querySelector("#br_rk")
br_rk.onclick = ()=> {
    if (count>=price[0]) {
        count = count - price[0]
        power = power + 3
        score.innerHTML=count
        price[0] =Math.round(price[0] *1.15) 
        br_rk.lastElementChild.innerHTML="цена "+price[0]
        checkPrice()
        //upgrade_game()
    }
}
const gz_rk = document.querySelector("#gz_rk")
gz_rk.onclick = ()=> {
    if (count>= price[2]) {
        count = count - price[2]
        power = power + 10
        score.innerHTML=count
        price[2] =Math.round(price[2] *1.15) 
        gz_rk.lastElementChild.innerHTML="цена "+price[2]
        checkPrice()
    }
}
const zl_rk = document.querySelector("#zl_rk")
zl_rk.onclick = ()=> {
    if (count>= price[4]) {
        count = count - price[4]
        power = power + 100
        score.innerHTML=count
        price[4] =Math.round(price[4] *1.15) 
        zl_rk.lastElementChild.innerHTML="цена "+price[4]
        checkPrice()
    }
}
const alm_rk = document.querySelector("#alm_rk")
alm_rk.onclick = ()=> {
    if (count>= price[6]) {
        count = count - price[6]
        power = power + 1000
        score.innerHTML=count
        price[6] =Math.round(price[6] *1.15) 
        alm_rk.lastElementChild.innerHTML="цена "+price[6]
        checkPrice()
    }
}
const avto = document.querySelector("#avto")
avto.onclick = ()=> {
    if (count>= price[1]) {
        count = count - price[1]
        autoclick = autoclick + 10
        score.innerHTML=count
        avtoscore.innerHTML=autoclick
        price[1] =Math.round(price[1] *1.15) 
        avto.lastElementChild.innerHTML="цена "+price[1]
        checkPrice()
    }
}
const ctpd = document.querySelector("#ctpd")
ctpd.onclick = ()=> {
    if (count>= price[3]) {
        count = count - price[3]
        autoclick = autoclick + 100
        score.innerHTML=count
        avtoscore.innerHTML=autoclick
        price[3] =Math.round(price[3] *1.15) 
        ctpd.lastElementChild.innerHTML="цена "+price[3]
        checkPrice()
    }
}
const pom = document.querySelector("#pom")
pom.onclick = ()=> {
    if (count>= price[5]) {
        count = count - price[5]
        autoclick = autoclick + 1000
        score.innerHTML=count
        avtoscore.innerHTML=autoclick
        price[5] =Math.round(price[5] *1.15) 
        pom.lastElementChild.innerHTML="цена "+price[5]
        checkPrice()
    }
}
const pobeda = document.querySelector("#pobeda")
pobeda.onclick = ()=> {
    if (count>= price[7]) {
        count = count - price[7]
        score.innerHTML=count
        avtoscore.innerHTML=autoclick
        price[7] =Math.round(price[7] *1.15) 
        pobeda.lastElementChild.innerHTML="цена "+price[7]
        checkPrice()
        upgrade_game()
    }
}