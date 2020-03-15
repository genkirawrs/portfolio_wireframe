function scrollToSection(div_id){
    let deviceMedia = window.matchMedia("(min-width: 1000px)");

    if(deviceMedia.matches){
        $('html, body').animate({
            scrollTop: $('#'+div_id).offset().top + 10
        }, 250);
    }else{
        $('html, body').animate({
            scrollTop: $('#'+div_id).offset().top - 50
        }, 250);
        if( $(".nav-links").hasClass("nav-links-show")){
            toggleMenu();
        }
    }
}

function getSectionName(stringToParse){
    let strSplit = stringToParse.split("-");
    let sectionName = strSplit[2];

    return sectionName;
}

function toggleMenu(){
    $(".nav-links").toggleClass('nav-links-show');
}

$(window).scroll(function(event){
    let deviceMedia = window.matchMedia("(min-width: 1000px)");

    if(deviceMedia.matches){
        let topPos = $(window).scrollTop();
        let menuLinks = document.querySelectorAll("#menu-full ul li a");

        menuLinks.forEach(link => {
            let linkSection = getSectionName(link.id);

            let section = document.querySelector("#"+linkSection);
            if(section.offsetTop <= topPos && section.offsetTop + $(section).outerHeight() - 40 > topPos){
                $('#'+link.id).css("fontWeight","bold");
            }else{
                $('#'+link.id).css("fontWeight","");
            }
        });
    }
});

$(document).ready(function(){
    $(this).scrollTop(0);
    $('#nav-link-welcome').css("fontWeight","bold");
    $('.nav-link').on('click', function(event){
        event.preventDefault();
        let linkSection = getSectionName(this.id);

        scrollToSection(linkSection);
    });
});