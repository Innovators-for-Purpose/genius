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

function CreateWebPageComponent(name, header_image,title, description, third_dimension_model_text, third_dimension_model_image){



}

header_image = document.createElement("img")
title = document.createElement("h3")
description = document.createElement("p")
third_dimension_model_text = document.createElement("p")
third_dimension_model_image = document.createElement("img")
let content = {
  'joy': {
    header_image: "/images/joy/desktop_banner.png",
    title: "Joy Buolamwini",
    description: 'Joy Buolamwini is a Black Ghanaian-Canadian American computer scientist and digital activist. She was born 1989 in Edmonton, Canada and grew up in Mississippi. She attended Cordova High School and earned her PhD at MIT. She is known for her Ted Talks and her spoken word titled “AI, Ain’t I A Woman?” She is known as the “Poet of Code”. <br /><br /> When Joy was a grad student at MIT media lab in 2015, she first discovered that artificial intelligence can be harmful and discriminative in many ways. Joy noticed that some facial analysis software could not detect her dark skin. <br /><br /> AI systems have been created by mostly white men, so there tends to be a bias in the technology that causes it to easily recognize white men, but not so much people of color and women. This bias in artificial intelligence leads to discrimination. Since then, she has gender prejudices in AI services. <br /><br /> While filming “Coded Bias”, Joy thought about what people would gain from this. She figured they would learn how tech directly impacts people on earth, and how the biases in technology affect people daily. In the documentary, you see a scene where a Black 14 year-old boy in a school uniform is being stopped with his friends by the police; The police are looking for a suspect, and used facial recognition that pinned the boy as the supposed offender. After finger printing and ruling him out as their suspect, they left the poor boy shaking and scared. <br /><br /> The police and FBI use facial recognition to try and scan for criminals, but as you can tell it is not a very accurate process to go through. This is just one example of the bias in AI technology that can potentially ruin an innocent person’s life. <br /><br /> Joy is still a researcher at the MIT Media Lab where, she continues to identify bias in algorithms and to develop practices for accountability during their design. </div>',
    three_dimension_model_text: 'This model shows an unbalance, similar to the one that is severely prevalent in the accuracy of facial recognition software. <br /> This was what Joy Boulamwini discovered during her time in MIT. <br /> She made that her main focus, and used her research to fuel her thesis, which uncovered large racial and gender biases in AI services from companies like Microsoft, IBM, and Amazon. <br /> With her help, facial recognition will be turned into a tool that is fair for everyone, and not something that is filled with human bias.',
    third_dimension_model_image: '/images/joy/desktop_card.png'
  },
  'pressley': {
    header_image: '/images/pressley/desktop_banner.png',
    title: 'Rep. Ayanna Pressley',
    description: null,
    third_dimension_model_text: 'This model shows a cube that encompasses the life and career of Ayanna Pressley, a Massachusetts congresswoman. <br /> Raised in Chicago, she first came to Boston for college, which led her to be able to quickly use her activist skills that she’d practiced back at home to tackle sexism and equal education in schools. <br /> As the first woman of color to serve on the Boston City Council, she also pioneered pathways in Boston that helped impacted families share stories about gun violence in their neighborhoods. <br /> She currently uses her position as congresswoman in Massachusetts 7th district, the most diverse in the state, to push her values and beliefs and create a safer and better living space for everyone.',
    third_dimension_model_image: '/images/pressley/desktop_card.png'
  },
  'bhatia': {
    header_image: '/images/bhatia/desktop_banner.png',
    title: 'Sangeeta N. Bhatia MD, PhD',
    description: 'Sangeeta N. Bhatia MD, PhD is an inventor, Massachusetts Institute of Technology professor and biotech entrepreneur who adapts technologies developed in the computer industry for medical innovation. At MIT, she is the John J. and Dorothy Wilson Professor or Engineering, Director of the Marble Center for Cancer Nanomedicine and Investigator of the Howard Hughes Medical Institute. Trained as both a physician and engineer, Sangeeta’s laboratory leverages miniaturization tools from the computer industry for medical innovation with applications in liver disease, cancer and infectious diseases. She and her over 150 trainees have contributed to more than 50 issued or pending patents, launched multiple biotechnology companies, and published more than 200 peer-reviewed papers. Bhatia was the 25th person in history to be an elected member of all three US National Academies: NAS, NAM, and NAE. She has been honored with the Lemelson-MIT Prize (known as the “Oscar” for inventors), the Heinz Medal, and the Othmer Gold Medal for groundbreaking inventions and advocacy for women in STEM fields. She has presented her vision for the application of engineering solutions to solve medical problems on international stages such as the World Economic Forum, TED, the Gates Grand Challenges, and the Biden Cancer Moonshot. She currently serves as a Trustee at Brown University and Director at Vertex Pharmaceuticals. <br /><br /> Sangeeta was born in Boston, the daughter of Indian immigrants, educated in the public schools. She and her husband have two daughters. She loves Boston sports teams, yoga, travel, good books and everything coffee.',
    third_dimension_model_text: 'This model shows a scientific beaker with a formula inside.<br /> This is the kind of equipment that Sangeeta N. Bhatia is surrounded by on a daily basis. <br /> She is an MIT professor, biotech entrepreneur, and biomedical researcher who focuses on repurposing computer industry innovations for medical advancement. <br /> Her education has allowed her to win prizes and awards, like the Lemelson-MIT Prize, which is compared to Oscars for inventors.<br /> Her myriad of achievements prove how much of a prominent figure she is in her line of work.',
    third_dimension_model_image: '/images/bhatia/desktop_card.png'
  },
  'dressel': {
    header_image: '/images/dressel/desktop_banner.png',
    title: 'Millie Dresselhaus (The Queen Of Carbon Science)',
    description: 'Millie Dresselhaus was an American nanotechnologist born November 11, 1930 in Brooklyn, New York. Millie and her family were seriously affected by the Great Depression, but Millie was always determined. By age 8 she was working, doing piecework assembly tasks at home and by working in a zipper factory. Growing up, she would take every educational opportunity that was offered for young girls, because most little girls her age were not allowed to learn. <br /><br /> Millie attended Hunter College, which was traditionally a women’s college, where the men in her classes would always come to Millie for help. After graduating, she studied superconductors at the University of Cambridge. She received her PhD from the University of Chicago in 1958, and then moved to Lincoln Lab as a staff member. Millie had a 57-year career at MIT, and later became a professor of physics in 1983. <br /><br /> These accomplishments led to her becoming the First Female Institute Professor at MIT. From 2003 to 2008, Millie was the chair of the governing board for the American Institute of Physics. She also served as president of the American Physical Society, the first female president of the American Association for the Advancement of Science, and treasurer of the National Academy of Sciences. Millie would have continued her journey, but unfortunately passed away on February 20, 2017 at Mount Auburn Hospital, in Cambridge MA. Her accomplishments continue to impact today’s scientific minds.',
    third_dimension_model_text: null,
    third_dimension_model_image: '/images/dressel/desktop_card.png'
  },
  'gray': {
    header_image: '/images/gray/desktop_banner.png',
    title: 'Mary L. Gray',
    description: 'Mary L. Gray is Senior Principal Researcher at Microsoft Research and Faculty Associate at Harvard University’s Berkman Klein Center for Internet and Society. She maintains a faculty position in the Luddy School of Informatics, Computing, and Engineering with affiliations in Anthropology and Gender Studies at Indiana University. Mary, an anthropologist and media scholar by training, focuses on how people’s everyday uses of technologies transform labor, identity, and human rights. Mary’s research has been covered by popular press venues, including The Guardian, El Pais, The New York Times, The Los Angeles Times, Nature, The Economist, Harvard Business Review, The Chronicle of Higher Education, and Forbes Magazine. Her publications include books, such as Out in the Country: Youth, Media, and Queer Visibility in Rural America and Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass as well as scholarly journal articles that span computer science, LGBTQ studies, and science technology studies. Mary is also recognized as a leading expert in the emerging field of AI and ethics, particularly research at the intersections of computer and social sciences. She sits on several boards, including Public Responsibility in Medicine and Research and the California Governor’s Council of Economic Advisors, in addition to chairing the Microsoft Research Ethics Review Program—the only federally-registered institutional review board of its kind in the tech industry. In 2020, Mary was named a MacArthur Fellow for her contributions to anthropology and the study of technology, digital economies, and society.',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  },
  '': {
    header_image: '',
    title: '',
    description: '',
    third_dimension_model_text: '',
    third_dimension_model_image: ''
  }
}

switch(window.location.pathname){
  case '/joy.html':
    createComponent('img', {src: content['/joy.html'].header_image});
    createComponent('h1', content['/joy.html'].title);
    break;
  case '/pressley.html':
    break;
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
      <ul><h3>Innovators for Purpose</h3>
       <li id="footerlist">91 1st Street #425475</li>
       <li id="footerlist">Cambridge, MA 02141-1804</li>
       <li id="footerlist">857-285-3842</li>
       <li id="footerquote">Empowering Our Next Generation of Innovators.</li>
       <li id="copyright">© 2014-22 INNOVATORS FOR PURPOSE</li>
      </ul>
      <ul><h3>Info</h3>
        <li><a href="https://innovatorsforpurpose.org/our-story">Our Story</a></li>
        <li><a href="https://innovatorsforpurpose.org/our-programs">Our Programs</a></li>
        <li><a href="https://innovatorsforpurpose.org/our-work">Our Work</a></li>
        <li><a href="https://innovatorsforpurpose.org/blog">News + Updates</a></li>
      </ul>
      <ul><h3>Action</h3>
        <li><a href="https://innovatorsforpurpose.org/donate">Donate</a></li>
        <li><a href="https://innovatorsforpurpose.org/contact">Contact</a></li>
      </ul>
      <ul><h3>Join Our Email List</h3>
        <li><i class="fa-brands fa-instagram" style="color: #ffffff;"></i>
        <li><button div="footerbutton"><a href="https://innovatorsforpurpose.us5.list-manage.com/subscribe?u=ceaa442c0a87d88191f55f02b&id=586ff77dec">Subscribe</a></button></li>
        <a href="https://www.instagram.com/innovatorsforpurpose/">
          <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png" height="30px" width="30px" class="footer-icon">
        </a>
        <a href="https://www.linkedin.com/company/innovators-for-purpose#:~:text=About%20us,impact%20through%20Design%20and%20STEM.">
         <img src="https://iconsplace.com/wp-content/uploads/_icons/ffffff/256/png/linkedin-icon-18-256.png" height="30px" width="30px" class="footer-icon">
       </a>
        </li>
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
