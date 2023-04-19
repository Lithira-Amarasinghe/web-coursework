function changeImage(img1, img2) {
  const mainImage = document.getElementById(img1);
  mainImage.src = img2;
}

var catagorys = document.getElementsByClassName("cat-links");

for (i = 0; i < catagorys.length; i++) {
  catagorys[i].addEventListener("click", function () {
    
    var current = document.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active", "");

    this.className += " active";
  });
}

const anchorTags = document.getElementsByTagName("a");
const h3Tags = document.getElementsByTagName("h3");
const h2Tags = document.getElementsByTagName("h2");
const h1Tags = document.getElementsByTagName("h1");
const h4Tags = document.getElementsByTagName("h4");
const pTags = document.getElementsByTagName("p");
const bodyTag = document.getElementsByTagName("body");
const btns = document.getElementsByTagName("button");

const leftPanel = document.getElementById("left-panel");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

const rightPanel = document.getElementsByClassName("right-panel");
const section1 = document.getElementsByClassName("section-1");
const navAnchorTags = document.getElementsByClassName("nav_a");
const desContainer = document.getElementsByClassName("des-container");
const divSeries = document.getElementsByClassName("img-div");
const type = document.getElementsByClassName("type");

function changeTheme(theme) {
  switch (theme) {
    case "dark":
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.color = "white";
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.color = "white";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.color = "white";
      }
      for (let i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.color = "white";
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "white";
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "white";
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundColor = "#2B2B2B";
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundImage = "none";
        desContainer[i].style.backgroundColor = "#222f3e";
      }
      for (let i = 0; i < divSeries.length; i++) {
        divSeries[i].style.backgroundImage = "none";
      }

      leftPanel.style.backgroundColor = "#181818";
      rightPanel[0].style.backgroundColor = "#222222";
      bodyTag[0].style.backgroundColor = "#222222";
      section1[0].style.backgroundColor = "#222222";
      header.style.backgroundColor = "black";
      leftPanel.style.backgroundImage = "none";
      rightPanel[0].style.backgroundImage = "none";
      bodyTag[0].style.backgroundImage = "none";
      section1[0].style.backgroundImage = "none";
      break;

    case "light":
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.color = "#2B2B2B";
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.color = "#2B2B2B";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.color = "#2B2B2B";
      }
      for (let i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.color = "white";
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "azure";
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "#2B2B2B";
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundColor = "white";
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundImage = "none";
        desContainer[i].style.backgroundColor = "#f0f0f0";
      }
      for (let i = 0; i < divSeries.length; i++) {
        divSeries[i].style.backgroundImage = "none";
      }

      leftPanel.style.backgroundColor = "#ecf0f1";
      rightPanel[0].style.backgroundColor = "white";
      bodyTag[0].style.backgroundColor = "white";
      section1[0].style.backgroundColor = "white";
      navbar.style.color = "black";
      header.style.backgroundColor = "rgb(197, 228, 239)";
      leftPanel.style.backgroundImage = "none";
      rightPanel[0].style.backgroundImage = "none";
      bodyTag[0].style.backgroundImage = "none";
      section1[0].style.backgroundImage = "none";
      break;

    case "blue":
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.color = "white";
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.color = "white";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.color = "white";
      }
      for (let i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.color = "white";
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = "white";
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = "white";
      }
      for (let i = 0; i < navAnchorTags.length; i++) {
        navAnchorTags[i].style.color = "black";
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundImage =
          "linear-gradient(to bottom right, #12409f, #4c098a)";
      }
      for (let i = 0; i < divSeries.length; i++) {
        divSeries[i].style.backgroundImage =
          "linear-gradient(to bottom right, #12409f, #4c098a)";
      }
      leftPanel.style.backgroundColor = "#2c3e50";
      rightPanel[0].style.backgroundImage =
        "linear-gradient(to bottom right, #12409f, #4c098a)";
      bodyTag[0].style.backgroundImage =
        "linear-gradient(to bottom right, #12409f, #4c098a)";
      bodyTag[0].style.backgroundRepeat = "no-repeat";
      bodyTag[0].style.backgroundSize = "cover";
      section1[0].style.backgroundImage =
        "linear-gradient(to bottom right, #12409f, #4c098a)";
      navbar.style.color = "black";
      header.style.backgroundColor = "rgb(197, 228, 239)";

      break;

    case "random":
      let color1 =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ")";

      let color2 =
        "rgb(" +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ", " +
        Math.floor(Math.random() * 256) +
        ")";

      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.color = color1;
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.color = color1;
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.color = color1;
      }
      for (let i = 0; i < h1Tags.length; i++) {
        h1Tags[i].style.color = color1;
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.color = color1;
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.color = color1;
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundColor = color2;
      }
      for (let i = 0; i < desContainer.length; i++) {
        desContainer[i].style.backgroundImage = "none";
        desContainer[i].style.backgroundColor = color2;
      }
      for (let i = 0; i < divSeries.length; i++) {
        divSeries[i].style.backgroundImage = "none";
      }

      leftPanel.style.backgroundColor = color2;
      rightPanel[0].style.backgroundImage = "none";
      rightPanel[0].style.backgroundColor = color2;
      bodyTag[0].style.backgroundColor = color2;
      section1[0].style.backgroundColor = color2;
      header.style.backgroundColor = color2;
      leftPanel.style.backgroundImage = color2;
      rightPanel[0].style.backgroundImage = color2;
      bodyTag[0].style.backgroundImage = color2;
      section1[0].style.backgroundImage = color2;
      break;

    default:
      break;
  }
}

const all = document.getElementsByTagName("*");
const descriptionDivs = document.getElementsByClassName("des-container");
const catogaries = document.getElementsByClassName("catogaries");

function changeFontSize(size) {
  switch (size) {
    case "small":
      for (let i = 0; i < anchorTags.length; i++) {
        all[i].style.fontSize = "10px";
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.fontSize = "13px";
      }
      for (let i = 0; i < btns.length; i++) {
        btns[i].style.fontSize = "10px";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.fontSize = "8px";
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.fontSize = "14px";
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.fontSize = "40px";
      }
      for (let i = 0; i < descriptionDivs.length; i++) {
        descriptionDivs[i].style.height = "300px";
        descriptionDivs[i].style.width = "80%";
      }
      for (let i = 0; i < catogaries.length; i++) {
        catogaries[i].style.width = "630px";
      }
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.fontSize = "14px";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.fontSize = "12px";
      }
      for (let i = 0; i < type.length; i++) {
        type[i].style.fontSize = "10px";
      }
      break;
    case "medium":
      for (let i = 0; i < anchorTags.length; i++) {
        all[i].style.fontSize = "";
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.fontSize = "";
      }
      for (let i = 0; i < btns.length; i++) {
        btns[i].style.fontSize = "";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.fontSize = "";
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.fontSize = "15px";
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.fontSize = "50px";
      }
      for (let i = 0; i < descriptionDivs.length; i++) {
        descriptionDivs[i].style.height = "400px";
        descriptionDivs[i].style.width = "90%";
      }
      for (let i = 0; i < catogaries.length; i++) {
        catogaries[i].style.width = "730px";
      }
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.fontSize = "16px";
      }
      for (let i = 0; i < type.length; i++) {
        type[i].style.fontSize = "15px";
      }
      break;
    case "large":
      for (let i = 0; i < anchorTags.length; i++) {
        all[i].style.fontSize = "16px";
      }
      for (let i = 0; i < pTags.length; i++) {
        pTags[i].style.fontSize = "22px";
      }
      for (let i = 0; i < btns.length; i++) {
        btns[i].style.fontSize = "16px";
      }
      for (let i = 0; i < h4Tags.length; i++) {
        h4Tags[i].style.fontSize = "20px";
      }
      for (let i = 0; i < h2Tags.length; i++) {
        h2Tags[i].style.fontSize = "30px";
      }
      for (let i = 0; i < h3Tags.length; i++) {
        h3Tags[i].style.fontSize = "60px";
      }
      for (let i = 0; i < descriptionDivs.length; i++) {
        descriptionDivs[i].style.width = "95%";
        descriptionDivs[i].style.height = "400px";
      }
      for (let i = 0; i < catogaries.length; i++) {
        catogaries[i].style.width = "790px";
      }
      for (let i = 0; i < anchorTags.length; i++) {
        anchorTags[i].style.fontSize = "18px";
      }
      for (let i = 0; i < type.length; i++) {
        type[i].style.fontSize = "16px";
      }
      break;
  }
}

//Game of thrones slideshow==================================================================

let slideIndex_Game_of_thrones = 0;
const mainImage_Game_of_thrones = document.getElementById("mainImg");
function changeSlidesForGameOfTrones(i) {
  slideIndex_Game_of_thrones += i;

  if (slideIndex_Game_of_thrones < 0) {
    slideIndex_Game_of_thrones = 2;
  }

  if (slideIndex_Game_of_thrones == 4) {
    slideIndex_Game_of_thrones = 1;
  }

  switch (slideIndex_Game_of_thrones) {
    case 0:
      mainImage_Game_of_thrones.src =
        "dragon-and-daenerys-targayen-vm-1360x768.jpg";
      slideIndex_Game_of_thrones = 3;
      break;
    case 1:
      mainImage_Game_of_thrones.src =
        "game-of-thrones-season-1-episode-1-full-stitched-607175_PRO35_10-1920.jpg";
      break;
    case 2:
      mainImage_Game_of_thrones.src = "Battle-of-the-Bastards.jpg";
      break;
    case 3:
      mainImage_Game_of_thrones.src =
        "dragon-and-daenerys-targayen-vm-1360x768.jpg";
      break;
    default:
      slideIndex_Game_of_thrones = 0;
  }
}

//The boys slideshow===============================================================================

let slideIndex_The_Boys = 0;
const mainImage_The_Boys = document.getElementById("mainImg2");
function changeSlidesForTheBoys(i) {
  slideIndex_The_Boys += i;

  if (slideIndex_The_Boys < 0) {
    slideIndex_The_Boys = 2;
  }

  if (slideIndex_The_Boys == 4) {
    slideIndex_The_Boys = 1;
  }

  switch (slideIndex_The_Boys) {
    case 0:
      mainImage_The_Boys.src = "the-boys.jpg";
      slideIndex_The_Boys = 3;
      break;
    case 1:
      mainImage_The_Boys.src = "boyszoom-2.jpg";
      break;
    case 2:
      mainImage_The_Boys.src = "The-Boys-Dawn-of-the-Seven.jpg";
      break;
    case 3:
      mainImage_The_Boys.src = "the-boys.jpg";
      break;
    default:
      slideIndex_The_Boys = 0;
  }
}

//Last of us slidshow===============================================================

let slideIndex_Last_Of_Us = 0;
const mainImage_Last_Of_Us = document.getElementById("mainImg3");
function changeSlidesForLastOfUs(i) {
  slideIndex_Last_Of_Us += i;

  if (slideIndex_Last_Of_Us < 0) {
    slideIndex_Last_Of_Us = 2;
  }

  if (slideIndex_Last_Of_Us == 4) {
    slideIndex_Last_Of_Us = 1;
  }

  switch (slideIndex_Last_Of_Us) {
    case 0:
      mainImage_Last_Of_Us.src = "last01.jpg";
      slideIndex_Last_Of_Us = 3;
      break;
    case 1:
      mainImage_Last_Of_Us.src = "last2.jpg";
      break;
    case 2:
      mainImage_Last_Of_Us.src = "last3.jpg";
      break;
    case 3:
      mainImage_Last_Of_Us.src = "last01.jpg";
      break;
    default:
      slideIndex_Last_Of_Us = 0;
  }
}

//Money  slidshow===============================================================

let slideIndex_Money_Heist = 0;
const mainImage_Money_Heist = document.getElementById("mainImg4");
function changeSlidesForMoneyHeist(i) {
  slideIndex_Money_Heist += i;

  if (slideIndex_Money_Heist < 0) {
    slideIndex_Money_Heist = 2;
  }

  if (slideIndex_Money_Heist == 4) {
    slideIndex_Money_Heist = 1;
  }

  switch (slideIndex_Money_Heist) {
    case 0:
      mainImage_Money_Heist.src = "money3.jpg";
      slideIndex_Money_Heist = 3;
      break;
    case 1:
      mainImage_Money_Heist.src = "money1.jpg";
      break;
    case 2:
      mainImage_Money_Heist.src = "money2.jpg";
      break;
    case 3:
      mainImage_Money_Heist.src = "money3.jpg";
      break;
    default:
      slideIndex_Money_Heist = 0;
  }
}

//american-vandal===============================================================

let slideIndex_American_Vandal = 0;
const mainImage_American_Vandal = document.getElementById("mainImg5");
function changeSlidesForAmericanVandal(i) {
  slideIndex_American_Vandal += i;

  if (slideIndex_American_Vandal < 0) {
    slideIndex_American_Vandal = 2;
  }

  if (slideIndex_American_Vandal == 4) {
    slideIndex_American_Vandal = 1;
  }

  switch (slideIndex_American_Vandal) {
    case 0:
      mainImage_American_Vandal.src = "ame1.jpg";
      slideIndex_American_Vandal = 3;
      break;
    case 1:
      mainImage_American_Vandal.src = "ame2.jpg";
      break;
    case 2:
      mainImage_American_Vandal.src = "ame3.jpg";
      break;
    case 3:
      mainImage_American_Vandal.src = "ame1.jpg";
      break;
    default:
      slideIndex_American_Vandal = 0;
  }
}

//family-guy===============================================================

let slideIndex_Family_Guy = 0;
const mainImage_Family_Guy = document.getElementById("mainImg6");
function changeSlidesForFamilyGuy(i) {
  slideIndex_Family_Guy += i;

  if (slideIndex_Family_Guy < 0) {
    slideIndex_Family_Guy = 2;
  }

  if (slideIndex_Family_Guy == 4) {
    slideIndex_Family_Guy = 1;
  }

  switch (slideIndex_Family_Guy) {
    case 0:
      mainImage_Family_Guy.src = "fam1.jpg";
      slideIndex_Family_Guy = 3;
      break;
    case 1:
      mainImage_Family_Guy.src = "fam2.jpg";
      break;
    case 2:
      mainImage_Family_Guy.src = "fam3.jpg";
      break;
    case 3:
      mainImage_Family_Guy.src = "fam1.jpg";
      break;
    default:
      slideIndex_Family_Guy = 0;
  }
}

//game-theory-guy===============================================================

let slideIndex_Game_Theory = 0;
const mainImage_Game_Theory = document.getElementById("mainImg7");
function changeSlidesForGameTheory(i) {
  slideIndex_Game_Theory += i;

  if (slideIndex_Game_Theory < 0) {
    slideIndex_Game_Theory = 2;
  }

  if (slideIndex_Game_Theory == 4) {
    slideIndex_Game_Theory = 1;
  }

  switch (slideIndex_Game_Theory) {
    case 0:
      mainImage_Game_Theory.src = "game1.jpg";
      slideIndex_Game_Theory = 3;
      break;
    case 1:
      mainImage_Game_Theory.src = "game2.jpg";
      break;
    case 2:
      mainImage_Game_Theory.src = "game3.jpg";
      break;
    case 3:
      mainImage_Game_Theory.src = "game1.jpg";
      break;
    default:
      slideIndex_Game_Theory = 0;
  }
}

//last dance===============================================================

let slideIndex_Last_dance = 0;
const mainImage_Last_dance = document.getElementById("mainImg8");
function changeSlidesForLastDance(i) {
  slideIndex_Last_dance += i;

  if (slideIndex_Last_dance < 0) {
    slideIndex_Last_dance = 2;
  }

  if (slideIndex_Last_dance == 4) {
    slideIndex_Last_dance = 1;
  }

  switch (slideIndex_Last_dance) {
    case 0:
      mainImage_Last_dance.src = "dance1.jpg";
      slideIndex_Last_dance = 3;
      break;
    case 1:
      mainImage_Last_dance.src = "dance2.jpg";
      break;
    case 2:
      mainImage_Last_dance.src = "dance3.jpg";
      break;
    case 3:
      mainImage_Last_dance.src = "dance1.jpg";
      break;
    default:
      slideIndex_Last_dance = 0;
  }
}
//===========================================================================================

const backToTopLink = document.querySelector("#back-to-top-link");
const backToTopHeading = document.querySelector("#back-to-top-heading");

backToTopLink.addEventListener("click", (event) => {
  event.preventDefault();
  const headingTop = backToTopHeading.offsetTop;
  window.scrollTo({ top: headingTop, behavior: "smooth" });
});

function showAction() {
  const non = document.getElementsByClassName("des-container");
  for (i = 0; i < non.length; i++) {
    non[i].style.display = "none";
  }

  const show = document.getElementsByClassName("div-action");
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "flex";
  }
}

function showComedy() {
  const non = document.getElementsByClassName("des-container");
  for (i = 0; i < non.length; i++) {
    non[i].style.display = "none";
  }

  const show = document.getElementsByClassName("div-comedy");
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "flex";
  }
}

function showDocumenrary() {
  const non = document.getElementsByClassName("des-container");
  for (i = 0; i < non.length; i++) {
    non[i].style.display = "none";
  }

  const show = document.getElementsByClassName("div-documenrary");
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "flex";
  }
}

function showFrictional() {
  const non = document.getElementsByClassName("des-container");
  for (i = 0; i < non.length; i++) {
    non[i].style.display = "none";
  }

  const show = document.getElementsByClassName("div-frictional");
  for (i = 0; i < show.length; i++) {
    show[i].style.display = "flex";
  }
}

function showAll() {
  const all = document.getElementsByClassName("des-container");
  for (i = 0; i < all.length; i++) {
    all[i].style.display = "flex";
  }
}

const thumb = document.getElementsByClassName("thumbnail-panel");
var temp;

function loadDescription(title) {
  window.scrollTo(0, 0);
  const des = document.getElementsByClassName("s-" + title);
  temp = des;
  thumb[0].style.display = "none";
  des[0].style.display = "initial";
}

function backToThumbnail() {
  thumb[0].style.display = "initial";
  temp[0].style.display = "none";
}
