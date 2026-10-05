const panda = document.getElementById('panda');
const msgbox = document.getElementById('msgbox');
panda.onclick=function(){
    msgbox.classList.toggle('on');
}

const biyo = document.getElementById('biyo');
const biyo_open = document.getElementById('biyo_open');
biyo_open.onclick=function(){
    biyo.classList.toggle('off');
}

const atama = document.getElementById('atama');
const atama_open = document.getElementById('atama_open');
atama_open.onclick=function(){
    atama.classList.toggle('off');
}

const karada = document.getElementById('karada');
const karada_open = document.getElementById('karada_open');
karada_open.onclick=function(){
    karada.classList.toggle('off');
}

const neko = document.getElementById('neko');
const neko_open = document.getElementById('neko_open');
neko_open.onclick=function(){
    neko.classList.toggle('off');
}

const momi = document.getElementById('momi');
const momi_open = document.getElementById('momi_open');
momi_open.onclick=function(){
    momi.classList.toggle('off');
}