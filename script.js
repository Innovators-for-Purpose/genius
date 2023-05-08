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
        linkElem.setAttribute("href", "style-index.css");

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
    <button class="card-button">View <ion-icon name="arrow-forward-outline"></ion-icon></button>
  </div>
</div>`
);

createComponent(
  "nav-bar",
  `<nav>
  <div class="navcontent">
     <p>GENIUS WITHIN</p>
    <div class="navlinks">
    <div class="hamburger">
      <span class="material-symbols-outlined">
      menu
      </span>
      <div class="dropdown">
        <ul>
          <li><a href="">About the Geniuses</a></li>
          <li><a href="">The Making of</a></li>
        </ul>
    </div>
      <button><a href="/">About the Geniuses</a></button>
      <button><a href="">The Making of</a></button>
      </div>
  </div>

  </nav>`
);

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
