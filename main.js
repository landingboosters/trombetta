function abrirMenu() {
    const menu = document.getElementById('menuMobile')
    if (menu.style.display === 'none'){
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none'
    }
}

function fechar() {
    const menu = document.getElementById('menuMobile')
    menu.style.display = 'none'
}

AOS.init();


let count =1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000);

function nextImage(){
    count++;
    if(count>8){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

/*
function abrirmodalmodalindustria1() {
    const modal1 = document.getElementById('modalTipe1')
    if (modal1.style.display === 'none'){
        modal1.style.display = 'flex';
    } else {
        modal1.style.display = 'none'
    }
}
function abrirmodalmodalindustria2() {
    var modal1 = document.getElementById('modalTipe2')
    if (modal1.style.display === 'none'){
        modal1.style.display = 'flex';
    } else {
        modal1.style.display = 'none'
    }
}
function abrirmodalmodalindustria3() {
    var modal1 = document.getElementById('modalTipe3')
    if (modal1.style.display === 'none'){
        modal1.style.display = 'flex';
    } else {
        modal1.style.display = 'none'
    }
}
function fecharmodal() {
    var fecha = document.getElementById('modalTipe1')
    fecha.style.display = 'none';
}
function fecharmodal() {
    var fecha = document.getElementById('modalTipe3')
    fecha.style.display = 'none';
}
function fecharmodal() {
    var fecha = document.getElementById('modalTipe2')
    fecha.style.display = 'none';
}
*/