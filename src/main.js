import "../scss/main.scss";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import loadTemplate from "./load-template";


loadTemplate("#header", "../_components/header.html");

const currentPath = location.pathname;
console.log(currentPath);

if(currentPath === "/" || currentPath === "/index.html"){
  loadTemplate("#footer", "../_components/footer-general.html");
}else{
  loadTemplate("#footer", "../_components/footer.html");
}

// 訂單明細 下拉式選單Icon切換
const arrorIcons = document.querySelectorAll("[data-bs-toggle='collapse']");
arrorIcons.forEach((btn)=>{
  btn.addEventListener("click", function(){
    const arrowIcon = this.querySelector("#arrIcon");
    console.log(arrowIcon);
    if(arrowIcon.classList.contains("bi-caret-down-fill")){
      arrowIcon.classList.remove("bi-caret-down-fill");
      arrowIcon.classList.add("bi-caret-up-fill");
    }else{
      arrowIcon.classList.remove("bi-caret-up-fill");
      arrowIcon.classList.add("bi-caret-down-fill");
    }
  });
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
[...tooltipTriggerList].forEach(colorDot => new bootstrap.Tooltip(colorDot));
