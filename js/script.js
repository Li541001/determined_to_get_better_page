// page route

const route = () =>{
    switch(location.hash){
        case("#/"):
            page_home()
            break;
        case("#/internation"):
            page_internation()
            break;
        case("#/about/idea"):
            page_about_idea()
            break;
        case("#/about/introduce"):
            page_about_introduce()
            break;
        case("#/course/schedule"):
            page_course_schedule()
            break;
        case("#/course/highlight"):
            page_course_highlight()
            break;
        case("#/course/question"):
            page_course_question()
            break;
        case("#/course/place"):
            page_course_place()
            break;
        case("#/example"):
            page_example()
            break;
    }
}

// page change
const page_home = () =>{
    $("#inner").html("");
    $("#inner").load("./page/home.html");
}


// nav
const nav_top = () =>{
    const height = document.scrollingElement.scrollTop
    
    if(height >= 10){
        $("#nav").addClass("navbar-top-active")
    }else{
        $("#nav").removeClass("navbar-top-active")
    }
}
let burger_aciton = false
const hamburger = () =>{    
    if(burger_aciton){
        $("#burger-1").removeClass("burger-action-1");
        $("#burger-2").removeClass("burger-action-2");
        $("#burger-3").removeClass("burger-action-3");
    }else{
        $("#burger-1").addClass("burger-action-1");
        $("#burger-2").addClass("burger-action-2");
        $("#burger-3").addClass("burger-action-3");
    }
    burger_aciton = !burger_aciton
}

window.addEventListener("scroll",nav_top);



// entry point
window.addEventListener("hashchange",route)

$("#inner").load("./page/home.html", () => {
    route();
});

