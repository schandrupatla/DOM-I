const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//Sree
// Can we do this using for loop?
//Navs
const anchorTags = document.querySelectorAll("a");
anchorTags[0].textContent = siteContent.nav["nav-item-1"];
anchorTags[1].textContent = siteContent.nav["nav-item-2"];
anchorTags[2].textContent = siteContent.nav["nav-item-3"];
anchorTags[3].textContent = siteContent.nav["nav-item-4"];
anchorTags[4].textContent = siteContent.nav["nav-item-5"];
anchorTags[5].textContent = siteContent.nav["nav-item-6"];

//Add color(green) to Nav items
anchorTags.forEach(item => item.style.color = "green");

//Create A new element and append
const navLinks =document.querySelector("nav");
const child1 = document.createElement("a");
child1.href = "#";
child1.textContent = "Blog";
child1.style.color = "green";
navLinks.appendChild (child1);

//Create A new element and prepend
//const navLinks =document.querySelector("nav");
const child2 = document.createElement("a");
child2.href = "#";
child2.textContent = "Welcome";
child2.style.color = "green";
navLinks.prepend (child2);

//Class-cta
//h1 and br
 //const headerOne = document.getElementsByTagName("h1");
const headerOne = document.querySelector(" .cta-text h1");
headerOne.textContent = siteContent.cta["h1"];
const str = "DOM<br> Is<br> Awesome";
headerOne.innerHTML = str;

//button
//const btn = document.getElementsByTagName("button");
const btn = document.querySelector(".cta-text button");
btn.textContent = siteContent.cta["button"];
//cta-img
 const ctaImg = document.getElementById("cta-img");
 ctaImg.setAttribute('src', siteContent.cta["img-src"]);
            //other way od doing this
// const ctaImg = document.querySelector("#cta-img");
// ctaImg.setAttribute('src', siteContent.cta["img-src"]);

//class main-content
//Div-1
 const textContentH4 = document.querySelector(".text-content h4");
textContentH4.textContent = siteContent ["main-content"]["features-h4"];
const textContentP = document.querySelector(".text-content p");
textContentP.textContent =  siteContent ["main-content"]["features-content"];
//Div-2-need help
const textContentH42 = document.querySelector(".top-content .text-content:nth-of-type(2) h4");
textContentH42.textContent = siteContent ["main-content"]["about-h4"];
const textContentP2 = document.querySelector(".top-content .text-content:nth-of-type(2) p");
textContentP2.textContent =  siteContent ["main-content"]["about-content"];
 const middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//class bottom-content
//Div-1
const bottomContentH4 = document.querySelector(".bottom-content h4");
bottomContentH4.textContent = siteContent ["main-content"]["services-h4"];
const bottomContentP = document.querySelector(".bottom-content p");
bottomContentP.textContent =  siteContent ["main-content"]["services-content"];
//Div-2
const bottomContentH42 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4");
bottomContentH42.textContent = siteContent ["main-content"]["product-h4"];
const bottomContentP2 = document.querySelector(".bottom-content .text-content:nth-of-type(2) p");
bottomContentP2.textContent =  siteContent ["main-content"]["product-content"];
//Div-3
const bottomContentH43 = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4");
bottomContentH43.textContent = siteContent ["main-content"]["vision-h4"];
const bottomContentP3 = document.querySelector(".bottom-content .text-content:nth-of-type(3) p");
bottomContentP3.textContent =  siteContent["main-content"]["vision-content"];

//Contact
const contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent.contact["contact-h4"];
const contactP1 = document.querySelector(".contact p:nth-of-type(1)");
contactP1.textContent =  siteContent.contact["address"];


const contactP2 = document.querySelector(".contact p:nth-of-type(2)");
contactP2.textContent = siteContent.contact["phone"];
const contactP3 = document.querySelector(".contact p:nth-of-type(3)");
contactP3.textContent = siteContent.contact["email"];

//footer
const footerP = document.querySelector("footer p");
footerP.textContent = siteContent.footer["copyright"];