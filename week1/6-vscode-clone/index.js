const updateBannerbtn = document.getElementById('update-banner-dismise-btn');
const updateBannerMsg = document.getElementById('updates-banner-message');

updateBannerbtn.addEventListener('click',()=>{
    updateBannerMsg.style.visibility="hidden";
    updateBannerbtn.style.visibility="hidden";
})

const navBar = document.getElementsByTagName("nav")[0]

    function scrollFunction() {
        if(document.documentElement.scrollTop >0 ){
            navBar.classList.add('scroll_nav_border')
            console.log(document.documentElement.scrollTop)
               }else{            
                navBar.classList.remove('scroll_nav_border')
               }
       
       }
window.onscroll = function () {
        scrollFunction();
       };