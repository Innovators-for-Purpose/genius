function createComponent(templateId, template) {
  const templateElement = document.createElement("template");
  templateElement.setAttribute("id", templateId);
  templateElement.innerHTML = template;
  document.body.appendChild(templateElement);

  customElements.define(
    templateId,
    class extends HTMLElement {
      constructor() {
        super();
        const template = document.getElementById(templateId);
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        // Apply external styles to the shadow DOM
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", "/style-index.css");

        const iconlinkElem = document.createElement("link");
        iconlinkElem.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
        );
        iconlinkElem.setAttribute("rel", "stylesheet");

        // Attach the created element to the shadow DOM
        shadowRoot.appendChild(linkElem);
        shadowRoot.appendChild(iconlinkElem);
        //         <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap" rel="stylesheet"></link>
        console.log("Looking for buttonlink");
        let link = this.attributes.buttonlink?.value;
        if (link) {
          console.log("Found buttonlink: ", link);
          const cardLink = shadowRoot.getElementById("card-link");
          console.log("<a> tag found: ", cardLink);
          cardLink.href = link;
          // get reference to <a>
          // set href attribute on <a> to "link"
        }
      }
    }
  );
}

function setActiveClass(path, element) {
  if (window.location.pathname === path) {
    element.classList.add("active");
  } else {
    element.classList.remove("active");
  }
}

createComponent(
  "genius-card",
  `<div class="card-br-top genius-card">
  <slot name="Genius Image"></slot>
  <div class="card-content genius-card-content">
    <div class="card-text">Spring 2023</div>
    <div class="card-header"><slot name="Genius Name"></slot></div>
    <a class="card-button geniusCardButton" id="card-link">
      View <ion-icon name="arrow-forward-outline"></ion-icon> 
    </a>
  </div>
</div>`
);

createComponent(
  "nav-bar",
  `<nav>
  <div class="navcontent">
    <div class="homelink linkbold"><a href="/index.html">GENIUS WITHIN</a></div>

    <div class="navlink"><a href="/geniuses.html">About the Geniuses</a></div>
  </div>

  </nav>`
);

createComponent(
  "genius-footer",
  `<footer>
      <ul> <h3 id="centering2">Innovators for Purpose</h3>
        <li><a href="???">Website</a></li>
        <li><a href="???">Instagram</a></li>
        <li><a href="???">Twitter</a></li>
      </ul>
      <ul> <h3 id="centering">2 Blocks</h3>
        <li><a href="???">Website</a></li>
        <li><a href="???">Book</a></li>
        <li><a href="???">Podcast</a></li>
      </ul>
  </footer>`
);

const carouselGroups = [
  "cardgroup1",
  "cardgroup2",
  "cardgroup3",
  "cardgroup4",
  "cardgroup5",
];

const carouselGroupsDouble = [
  "doubleCardGroup1",
  "doubleCardGroup2",
  "doubleCardGroup3",
];

let cardGroup = 0;

let geniusCards = document.querySelectorAll(".carousel-group");

let geniusCardsDouble = document.querySelectorAll(".carouselDouble");

// <div class="double"> // display: flex
//   <div class="single"> // display: flex
//     <div class="card"></div>
//     <div class="card"></div>
//   </div>
//   <div class="single"> // display: flex
//     <div class="card"></div>
//     <div class="card"></div>
//   </div>
// </div>

// geniusCards.forEach((element) => {
//   element.style.display = "none";
// });

// geniusCardsDouble.forEach((element) => {
//   element.style.display = "none";
// });

if (document.URL.includes("geniuses.html")) {
  geniusCardsDouble.forEach((element) => {
    element.style.display = "none";
  });

  geniusCardsDouble[cardGroup].style.display = "block";

  geniusCards.forEach((element) => {
    element.style.display = "flex";
  });
} else {
  geniusCardsDouble.forEach((element) => {
    element.style.display = "block";
  });

  geniusCards.forEach((element) => {
    element.style.display = "none";
  });

  geniusCards[cardGroup].style.display = "flex";
}

function carousel(direction, list, displayWhenShown) {
  if (direction === FORWARD) {
    console.log(list.length);
    if (direction === FORWARD && cardGroup === list.length - 1) {
      return;
    }
    cardGroup++;
    list[cardGroup].style.display = displayWhenShown;
    list[cardGroup - 1].style.display = "none";
    console.log(cardGroup);
    // display carouselgroup according to id
    // use index
    // carouselGroups[cardGroup]
  } else {
    if (cardGroup === 0) {
      return;
    }
    cardGroup--;
    list[cardGroup].style.display = displayWhenShown;
    list[cardGroup + 1].style.display = "none";
    console.log(cardGroup);
  }
}

const FORWARD = true;
const BACKWARD = false;
// createComponent('card-component', `
//     <div class="template-div">
//         <h1 class="template-header">Header in template</h1>
//         <p class="template-p"><slot name="paragraph-text"></slot></p>
//     </div>
// `);

// createComponent('button-component', `
//     <div class="template-div">
//         <button>Click me</button>
//     </div>
// `);

// Usage examples:
{
  /*
<card-component>
  <div slot="paragraph-text">
    <span>This is card 1</span>
  </div>
</card-component>
<card-component>
  <span slot="paragraph-text">This is card 2</span>
</card-component>
<button-component></button-component>
<button-component></button-component>
<button-component></button-component>
*/
}
