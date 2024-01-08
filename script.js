const formation = document.querySelector("#formation");
const back_formation = document.querySelector("#formation_back");
const boite1 = document.querySelector("#boite1")
const boite1_cache = document.querySelector("#boite1_cacher")

formation.addEventListener("click", (event) => {
    boite1.style.display = "flex" ;
    boite1_cache.style.display = "none" ;
    console.log("cache ok");
  });

  back_formation.addEventListener("click", (event) => {
    boite1.style.display = "none" ;
    boite1_cache.style.display = "flex" ;
    console.log("efrei ok");
  });