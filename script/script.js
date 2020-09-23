//navbar css
function toggleNav() {
    
    var nav = document.getElementById("nav-id");
    var nav_tag = document.getElementsByTagName("A");



    window.onscroll = function () {
        if(window.scrollY >94){
            nav.classList.add("transparent");
            for (let i = 0; i < nav_tag.length; i++) {
                nav_tag[i].classList.add("nav-a");
                
            }

        }
        else{
            nav.classList.remove("transparent");
            for (let i = 0; i < nav_tag.length; i++) {
                nav_tag[i].classList.remove("nav-a");
                
            }

            
        }
    }
   
   
    

}
toggleNav();

document.getElementById("ham").onclick = function(){
    if(document.getElementById("ul").style.display == "block"){
        document.getElementById("ul").style.display = "none";
        document.getElementById("ham-span").innerHTML = "&#9776;";
    }
    else{
        document.getElementById("ul").style.display = "block";
        document.getElementById("ham-span").innerHTML = "&times;";
       


    }
}