
let Card1 = document.querySelector(".CardNumber1");
let Card2 = document.querySelector(".CardNumber2");
let Card3 = document.querySelector(".CardNumber3");








(Card1).addEventListener("click", () => {
  Card2.classList.toggle("hidden");
  Card3.classList.toggle("hidden");

  document.querySelectorAll(".card").forEach(element => {
    element.classList.toggle("CardNumber_CLICK");
  });

  document.querySelectorAll(".Info_cardBox").forEach(element => {
    element.classList.toggle("Info_cardBox_CLICK");
  });

  document.querySelectorAll(".Biome_img").forEach(element => {
    element.classList.toggle("Biome_img_CLICK");
  });

  document.querySelectorAll(".BigText-Info_cardBox").forEach(element => {
    element.classList.toggle("BigText-Info_cardBox_CLICK");
  });

  document.querySelectorAll(".SmalText-Info_cardBox").forEach(element => {
    element.classList.toggle("SmalText-Info_cardBox_CLICK");
  });


  document.querySelectorAll(".Hipe-imgBox").forEach(element => {
    element.classList.toggle("hidden");
  });

  console.log("click!");


}); 

Card2.addEventListener("click", () => {
  Card1.classList.toggle("hidden");
  Card3.classList.toggle("hidden");

  document.querySelectorAll(".card").forEach(element => {
    element.classList.toggle("CardNumber_CLICK");
  });

  document.querySelectorAll(".Info_cardBox").forEach(element => {
    element.classList.toggle("Info_cardBox_CLICK");
  });

  document.querySelectorAll(".Biome_img").forEach(element => {
    element.classList.toggle("Biome_img_CLICK");
  });

  document.querySelectorAll(".BigText-Info_cardBox").forEach(element => {
    element.classList.toggle("BigText-Info_cardBox_CLICK");
  });

  document.querySelectorAll(".SmalText-Info_cardBox").forEach(element => {
    element.classList.toggle("SmalText-Info_cardBox_CLICK");
  });


  document.querySelectorAll(".Hipe-imgBox").forEach(element => {
    element.classList.toggle("hidden");
  });

  console.log("click!");


}); 

Card3.addEventListener("click", () => {
  Card1.classList.toggle("hidden");
  Card2.classList.toggle("hidden");

  document.querySelectorAll(".card").forEach(element => {
    element.classList.toggle("CardNumber_CLICK");
  });
  
  document.querySelectorAll(".Info_cardBox").forEach(element => {
    element.classList.toggle("Info_cardBox_CLICK");
  });

  document.querySelectorAll(".Biome_img").forEach(element => {
    element.classList.toggle("Biome_img_CLICK");
  });

  document.querySelectorAll(".BigText-Info_cardBox").forEach(element => {
    element.classList.toggle("BigText-Info_cardBox_CLICK");
  });

  document.querySelectorAll(".SmalText-Info_cardBox").forEach(element => {
    element.classList.toggle("SmalText-Info_cardBox_CLICK");
  });


  document.querySelectorAll(".Hipe-imgBox").forEach(element => {
    element.classList.toggle("hidden");
  });

  console.log("click!");


}); 