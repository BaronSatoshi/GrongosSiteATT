let jodao = document.getElementById('jodao')
let grongos = document.getElementById('grongos')

window.addEventListener('scroll', function(){
    let value = window.scrollY
    jodao.style.marginTop = value * 5 + 'px'; 
    grongos.style.marginLeft = value * 5 + 'px';
})