const getEle = (id) => {
  return document.getElementById(id);
};
const dropdown = () => {
  let menu = getEle("menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
};

const $button = getEle('dropdownmenubutton');


document.addEventListener("click", event=>{
//   console.log(event);
  let menu = getEle("menu");
  const cover = getEle("html");
  const divlist = getEle("divlist");
  if(event.target.isSameNode(cover) || event.target.isSameNode(divlist)){
    if(event.target.isSameNode($button)) {
        // 
    }else {
      menu.classList.remove("show");
    }
  }
  
});
