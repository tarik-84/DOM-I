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

//Nav

let services = document.getElementsByTagName('a')[0];
services.textContent = 'Services';

let product = document.getElementsByTagName('a')[1];
product.textContent = 'Product';

let vision = document.getElementsByTagName('a')[2];
vision.textContent = 'Vision';

let features = document.getElementsByTagName('a')[3];
features.textContent = 'Features';

let about = document.getElementsByTagName('a')[4];
about.textContent = 'About';

let contact = document.getElementsByTagName('a')[5];
contact.textContent = 'Contact';

//cta

let headerImg = document.getElementById('cta-img');
headerImg.src = 'img/header-img.png';

let h1 = document.getElementsByTagName('h1')[0];
h1.textContent = 'DOM Is Awesome';

let button = document.getElementsByTagName('button')[0];
button.textContent = 'Get Started';


//main-content

let featuresH4 = document.getElementsByTagName('h4')[0];
featuresH4.textContent = 'Features';

let featuresContent = document.getElementsByTagName('p')[0];
featuresContent.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let aboutH4 = document.getElementsByTagName('h4')[1];
aboutH4.textContent = 'About';

let aboutContent = document.getElementsByTagName('p')[1];
aboutContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let middleImg = document.getElementById('middle-img');
middleImg.src = 'img/mid-page-accent.jpg';

let servicesH4 = document.getElementsByTagName('h4')[2];
servicesH4.textContent = 'Services';

let servicesContent = document.getElementsByTagName('p')[2];
servicesContent.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';


let productH4 = document.getElementsByTagName('h4')[3];
productH4.textContent = 'Product';

let productContent = document.getElementsByTagName('p')[3];
productContent.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';



let visionH4 = document.getElementsByTagName('h4')[4];
visionH4.textContent = 'Vision';

let visionContent = document.getElementsByTagName('p')[4];
visionContent.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//contact

let contacth4 = document.getElementsByTagName('h4')[5];
contacth4.textContent = 'Contact';

let address = document.getElementsByTagName('p')[5];
address.textContent = '123 Way 456 Street Somewhere, USA';

let phone = document.getElementsByTagName('p')[6];
phone.textContent = '1 (888) 888-8888';

let email = document.getElementsByTagName('p')[7];
email.textContent = 'sales@greatidea.io';


//footer

let footer = document.getElementsByTagName('p')[8];
footer.textContent = 'Copyright Great Idea! 2018';



let links = document.querySelectorAll('a');
links.forEach(link => {
  link.style.color = 'green';
})



let newA1 = document.createElement('a');
newA1.textContent = 'Help';

let newA2 = document.createElement('a');
newA2.textContent = 'Home';

let parentElement = document.querySelector('nav');
parentElement.append(newA1);
parentElement.prepend(newA2);
