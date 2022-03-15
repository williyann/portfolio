const up=document.querySelector("#up");
up.onclick=() => {
    window.scrollTo(0,0);
}
window.onscroll=() => {
    if(window.scrollY>=500) {
        up.style.display="block";
    }else {
        up.style.display="none";
    }
}