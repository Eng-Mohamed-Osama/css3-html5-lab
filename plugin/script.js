let navBar=document.querySelector('.navbar')
let scrollToTopButton=document.querySelector('#scrollTop')
let showNavBarButton=document.querySelector('#showNav')
let navBarList=document.querySelector('.navbar__links')
let chevronUp ='fa-chevron-up'
let chevronDown = 'fa-chevron-down'

function changeNavbarBG(){
    if(window.pageYOffset > 0){
        navBar.classList.add("show__bg")
    }else{
        navBar.classList.remove("show__bg")
    }
}

function scrollToTopHandle (){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

function showNavBar(){
    if(navBarList.classList.contains('d-flex')){
        document.querySelector('#showNav i').classList.add(`${chevronUp}`)
        document.querySelector('#showNav i').classList.remove(`${chevronDown}`)
        navBarList.classList.add('show__navbar')
        navBar.classList.add("show__bg")
        navBarList.classList.remove('d-flex')
    }else{
        document.querySelector('#showNav i').classList.remove(`${chevronUp}`)
        document.querySelector('#showNav i').classList.add(`${chevronDown}`)
        navBarList.classList.remove('show__navbar')
        navBar.classList.remove("show__bg")
        navBarList.classList.add('d-flex')
    }
}


scrollToTopButton.addEventListener('click' , scrollToTopHandle)
showNavBarButton.addEventListener('click' , showNavBar)

window.addEventListener('scroll' , changeNavbarBG)