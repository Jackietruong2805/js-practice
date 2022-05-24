const navitems = document.querySelectorAll(".nav__item");
const navbuttons = document.querySelectorAll(".nav__button");

navitems.forEach(item => {    
    const navbutton = item.querySelector(".nav__button");
    navbutton.addEventListener("click", event => {
        
        console.log(event);

        item.classList.add("show-2");

        divitem = document.querySelector(`${event.target.attributes[0].nodeValue}`);
        // console.log(divitem);
        navcontent = document.querySelectorAll(".nav__tabcontent .view")
        navcontent.forEach(item => {
            if(item.classList.contains("show")){
                item.classList.remove("show");
            }
        });
        // console.log(navcontent);
        if(!divitem.classList.contains("show")){
            divitem.classList.add("show");
        }
        
    })
    
});



