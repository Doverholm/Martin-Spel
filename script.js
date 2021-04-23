let gFNamn = "";
let gENamn = "";

function start(){
  const btnStart = document.querySelector(".spela");
  const klar = document.querySelector(".btn-form");
  const btnRegler = document.querySelector(".btn-regler");
  const textFNamn = document.querySelector(".text-fNamn");
  const intro = document.querySelector(".container-start");
  const form = document.querySelector(".container-form");
  const regler = document.querySelector(".container-regler");
  const spel = document.querySelector(".container-spel");

  btnStart.addEventListener("click", function(){
    intro.classList.add("fadeout");
    form.classList.add("fadein");
  });

  klar.addEventListener("click", function(){
    const ålder = document.getElementById("ålder").value;
    const fNamn = document.querySelector(".fNamn").value;
    gFNamn = fNamn;
    console.log(gFNamn);
    const eNamn = document.querySelector(".eNamn").value;
    gENamn = eNamn;
    console.log(gENamn);
    if (ålder > 17){
      textFNamn.innerHTML = (gFNamn);
      form.classList.remove("fadein");
      regler.classList.remove("fadeout");
    }
    else {
      alert("Tyvär " + gFNamn + " du måste vara minst 18 år för att spela");
    }
  });

  btnRegler.addEventListener("click", function(){
    regler.classList.add("fadeout");
    spel.classList.remove("fadeout");
  });
}

start();
