let navBar=document.querySelector('.navbar')
let scrollToTopButton=document.querySelector('#scrollTop')

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



scrollToTopButton.addEventListener('click' , scrollToTopHandle)

window.addEventListener('scroll' , changeNavbarBG)