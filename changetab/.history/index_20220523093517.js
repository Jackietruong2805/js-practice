const navitems = document.querySelectorAll(".nav__item");
const navbutton = document.querySelectorAll(".nav__button");
navitems.forEach(item => {
    navbutton = item.querySelector(".nav__button");
    navbutton.addEventListener("click", event => {
        console.log(event);
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

navitems.addEventListener("click", event =>{
    navitems.forEach(item =>{
        if(item.classList.contains("show-2")){
            item.classList.remove("show-2")
        }
        if(item.contains(event.target)){
            item.classList.add("show-2");
            
        }
        buttonitem= item.querySelector(".nav__button");
            if(!buttonitem.classList.contains("color-black")){
                buttonitem.classList.add("color-black");
            }
    })
    
})