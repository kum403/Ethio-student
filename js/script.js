const navEl = document.querySelector('.container-nav');
const overlayEl = document.querySelector('.overlay');
const menuEl = document.querySelector('.menu-list');
const headerEl = document.querySelector('.container-nav')
const showEl = document.querySelector('.show')
const liEl = document.querySelectorAll('.li')


const styles = navEl.classList

const menu = () =>{
    if(styles.contains('open')){
        styles.remove('open')
        overlayEl.classList.add('fade-out')
        overlayEl.classList.remove('fade-in')
        menuEl.classList.add('fade-out')
        menuEl.classList.remove('fade-in')
        document.body.style.overflow = "visible"
        headerEl.classList.remove('un-shadow')
    }
    else{
        styles.add('open')
        overlayEl.classList.add('fade-in')
        overlayEl.classList.remove('fade-out')
        menuEl.classList.remove('fade-out')
        menuEl.classList.add('fade-in')
        document.body.style.overflow = "hidden"
        headerEl.classList.add('un-shadow')
        menuEl.style.transform = "translateY(0)"
    }
}
window.addEventListener('resize',function(){
    overlayEl.classList.remove('fade-in');
    overlayEl.classList.add('fade-out');
    menuEl.classList.remove('fade-in')
    menuEl.classList.add('fade-out')
    styles.remove('open')
    menuEl.style.transform = "translateY(-200%)"
})

liEl.forEach(function(btns){
    btns.addEventListener('click',function(){
        overlayEl.classList.add('fade-out');
        // menuEl.style.display = "none"
        // menuEl.classList.add('fade-out')
        // menuEl.style.display = "none"
        // styles.remove('open')
        menuEl.style.transform = "translateY(-200%)"
        // menuEl.forEach(function(menu){
        //     menu.classList.add('fade-out');

        // })
    })
})

// const grades = document.querySelectorAll('.grade-btn');

// grades.forEach(function(gradeBtn){
//     gradeBtn.addEventListener('click',function(){
//         menuEl.classList.add('fade-out')
    
//     })
// })


