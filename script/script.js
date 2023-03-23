let inp = document.querySelector('.inp1')
let btn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn2')
let pElem = document.querySelector('.title')
let pElem2 = document.querySelector('.title2')
let h3Elem = document.querySelector('.h3Elem')

let listItems = ['zanjan','tabriz','kashan','tehran','mashhad','rasht','ardabil','ahwaz','gilan','urmia','golestan',
'gorgan','boshehr','anzali','lorestan','sanandaj','yasoj','shushtar','hamedan','bandar abas','arak','ahar','sarab']
let randomChoose
let user

btn2.addEventListener('click',function(){
    randomChoose =  listItems[Math.floor(Math.random()*listItems.length)]

    let userChose = randomChoose.split('')
    userChose.splice(0,1,'_')
    userChose.splice(2,1,'_')
    userChose.splice(4,1,'_')
    pElem.innerHTML = userChose.join(' ')
    inp.value = ""
    pElem2.innerHTML = ''
})

btn.addEventListener('click',function(){
    user = inp.value
    if(randomChoose === user){
        pElem.innerHTML = user
        pElem2.innerHTML = 'Yep you gess right'
    }else{
        pElem2.innerHTML = 'NOPE is`t Corect'
    }
    
})




