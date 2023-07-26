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

function insertElement(element, content, place_inserted, image) {
  if (content == null) {
    content = "";
  }
  let area = document.querySelector(place_inserted);
  if (area == null) {
    area = document.getElementsByClassName(place_inserted);
  }
  if (image == true) {
    let image = element.setAttribute("src", content);
    area.appendChild(image);
  }
  let text = element.textContent(content);
  area.appendChild(text);
}
function insertImage(image_element, content, place_inserted){
  // creates source of image tag and inserts it into certain place
  // insert alt text
  if (content == null) {
    content = ""
  }
  let area = document.querySelector(place_inserted);
  let image = image_element.setAttribute(src, content);
  area.appendChild(image);
}

function insertText(text_element, content, place_inserted){
  if (content == null) {
    content = ""
  }
  let area = document.querySelector(place_inserted);
  let text = text_element.textContent(content);
  area.appendChild(text);
}

function insertTextByClass(text_element, content, place_inserted){
  if (content == null) {
    content = ""
  }
  let area = document.getElementsByClassName(place_inserted);
  let text = text_element.textContent(content);
  area.appendChild(text);
}

function insertImageByClass(image_element, content, place_inserted){
  // creates source of image tag and inserts it into certain place
  // insert alt text
  if (content == null) {
    content = ""
  }
  let area = document.getElementsByClassName(place_inserted);
  let image = image_element.setAttribute(src, content);
  area.appendChild(image);
}

header_image = document.createElement("img");
title = document.createElement("h3");
description = document.createElement("p");
third_dimension_model_text = document.createElement("p");
third_dimension_model_image = document.createElement("img");

const content = {
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
    third_dimension_model_text: 'Mary L. Gray is a Senior Principal Researcher at Microsoft Research, and a Faculty Associate at Harvard University’s Berkman Klein Center for Internet and Society. <br /> She has written several books about the struggles of queer people and their connection to technology. <br /> Mary is also recognized as a leading expert in the emerging field of AI and ethics.<br /> She sits on several boards, including Public Responsibility in Medicine and Research and others in addition to chairing the Microsoft Research Ethics Review Program.<br /> Her contribution to society has enabled the tech industry to continue advancing.',
    third_dimension_model_image: '/images/gray/desktop_card.png'
  },
  'hamilton': {
    header_image: '/images/hamilton/desktop_banner.png',
    title: 'Margeret Hamilton',
    description: null,
    third_dimension_model_text: 'This model shows a rocket and a moon. <br /> Both are concepts Margaret Hamilton is extremely familiar with, as she was one of the many software engineers that worked on Apollo 11, which sent the first men to the moon. <br /> As soon as she heard MIT was looking for people to build software for "sending man to the moon", she joined the MIT/NASA/Apollo project starting with the unmanned missions.<br /> She created the ability for the software to communicate asynchronously in real-time with the astronaut within a distributed system-of-systems environment. <br />Hamilton received the NASA Exceptional Space Act Award and the Presidential Medal of Freedom awarded by Barack Obama in 2016. <br /> Her breakthrough work at such a pivotal moment in history should always be remembered and celebrated.',
    third_dimension_model_image: '/images/hamilton/desktop_card.png'
  },
  'jackson': {
    header_image: '/images/jackson/desktop_banner.png',
    title: 'Dr. Shirley Jackson',
    description: null,
    third_dimension_model_text: "This model shows a Newton's cradle, which shows the conservation of energy and conservation of momentum. Both are key elements of physics, which is what Shirley Jackson studied at MIT. <br /> She worked as a research associate in theoretical physics at the Fermi National Accelerator Laboratory, or Fermilab. <br /> She became the first African American woman to receive a doctorate at MIT. <br /> She is now a Physicist and has used that to invent that caller ID and call waiting on smart technology.<br /> She is also the first African American president of Rensselaer Polytechnic Institute, and received the national medal of science in 2016.",
    third_dimension_model_image: ''
  },
  'khan': {
    header_image: '/images/khan/desktop_banner.png',
    title: 'Sal Khan (Salaman Khan, CEO of Khan Academy)',
    description: "Salaman Amin Khan, born October 11, 1976 is the founder of Khan Academy. Khan Academy is a free, non- profit educational app and organization Sal produced with over 6,500+ video lessons teaching individuals step by step about academic subjects, originally focusing on mathematics and science. <br /><br /> He is also the founder of Schoolhouse.world, Khan Lab School, and Khan World School, which are all nonprofits focused on making education accessible for all. <br /><br /> When Khan was in highschool (at Grace King High School), he took upper-level mathematics courses at the University of New Orleans. He graduated as class valedictorian in 1994. <br /><br /> He attended the Massachusetts Institute of Technology in Cambridge, MA, where he developed math software for children with ADHD and tutored fourth- and seventh-grade public school students in Boston. Khan graduated with his Bachelor and Master degrees for electrical engineering and computer science. In 1998, he got another bachelor's degree in mathematics. Khan also holds a Master of Business Administration from Harvard business school. <br /><br /> In his early career years, Khan was a summertime intern at the Palo Alto Research Center and from 2003 to 2009, he worked as a hedge fund analyst at Connective Capital Management. He now continues his work of providing accessible education to students all over.",
    third_dimension_model_text: 'This model highlights Khan Academy, which was founded and is run by Sal Khan. Khan Academy is a nonprofit organization with a mission to provide free, world class education for anyone, anywhere. <br /> Khan Academy’s platform includes more than 70,000 practice problems as well as videos and articles that cover a range of K–12 subjects. <br /> The organization partners with school districts across the country and around the world that serve students who are historically under-resourced. <br /> Sal Khan has created a company that’s sole purpose is to help people, which is a great reflection of his own character. <br />',
    third_dimension_model_image: '/images/khan/desktop_card.png'
  },
  'land': {
    header_image: '/images/land/desktop_banner.png',
    title: 'Dr. Edwin Land',
    description: null,
    third_dimension_model_text: "This model shows a polaroid camera, which was first invented by Edwin Land, as part of the Polaroid Corporation. <br /> This breakthrough in technology was created because of his daughter's demand to see an image taken of her instantly. <br /> It was created by Land figuring out how to bring the exposed negative and positive paper through rollers. When the camera’s button was clicked, the shutter on the camera opened, which allowed light to enter it, hitting the photosensitive film, and recreating the image in front of the camera. <br /> This technology cut the 2 hour wait to develop images that had been the norm and set the stage for instant hand held cameras and eventually smartphone cameras to make photographing easy and accessible.",
    third_dimension_model_image: '/images/land/desktop_card.png'
  },
  'mcnair': {
    header_image: '/images/mcnair/desktop_banner.png',
    title: 'Dr. Ronald McNair',
    description: null,
    third_dimension_model_text: null,
    third_dimension_model_image: '/images/mcnair/desktop_card.png'
  },
  'moses': {
    header_image: '/images/moses/desktop_banner.png',
    title: 'Bob Moses',
    description: "Bob Moses (January 23, 1935 – July 25, 2021) was born and raised in Harlem, NY, where he attended public schools. He received a B.A. in Philosophy from Hamilton College in 1956, and received an M.A. in Philosophy from Harvard University in 1957. Moses directed the Student Non-Violent Coordinating Committee’s Mississippi Voter Registration Project from 1961-1964; was co-Director of the Council of Federated Organizations 1962-1964, and was a lead organizer for the 1964 Mississippi “Freedom” Summer Project, parachuting Mississippi Freedom Democratic Party to 1964 National Democratic Convention in Atlantic City. Moses taught mathematics at the Samé School in Tanzania, East Africa from 1969 – 1976, when he returned to the United States and re-entered the doctoral program in Philosophy at Harvard. <br /><br /> A MacArthur Foundation Fellow 1982-1987, he used his fellowship to begin the Algebra Project, which uses mathematics as organizing tool for quality education for all children in America. With support of the National Science Foundation the Algebra Project works with middle and high school students who previously performed in the lowest quartile on standardized exams, proposing that they attain a high school math benchmark: graduate on time in four years, ready to do college math for college credit. Moses co-authored with Charles E. Cobb, Jr., the book Radical Equations—Civil Rights from Mississippi to the Algebra Project (Beacon Press, 2001); and co-edited with Theresa Perry, et al., of Quality Education as a Constitutional Right-creating a grassroots movement to transform public schools (Beacon, 2010). <br /><br /> Moses was the Distinguished Visitor for the Center for African American Studies at Princeton University 2011-2012, and adjunct lecturer at NYU School of Law from 2012 – 2016. He served on the Education Advisory Committee of the Mathematical Sciences Research Institute from 2004 to 2021. In May 2016, the University of North Carolina press published Dr. Laura Visser-Maessen’s book, Robert Parris Moses – a life in civil rights and leadership at the grassroots. He received numerous honorary doctorate degrees, delivered keynote speeches and workshops nationwide, and served as principal investigator on eight National Science Foundation mathematics education research awards.",
    third_dimension_model_text: null,
    third_dimension_model_image: '/images/moses/desktop_card.png'
  },
  'pasterski': {
    header_image: '/images/pasterski/desktop_banner.png',
    title: 'Dr. Sabrina Gonzalez Pasterski',
    description: "Sabrina Pasterski is a proud first-generation Cuban-American & Chicago Public Schools alumna who, by 16, had built & flown her own airplane. She became the first MIT freshman named to the NASA January Operational Internship and earned the inaugural MIT Freshman Entrepreneurship Award. After a summer at Phantom-Works, excelling at MIT and being hired by CERN-CMS, she was named a Lindau Nobel Young Researcher. She graduated #1 at MIT-Physics, matriculated into Harvard’s PhD program and was awarded her SB while still a teenager. Sabrina was named to Scientific American’s 30 under 30 in 2012 as well as the 2015 Forbes 30 under 30 Science list. <br /><br /> At age twelve, Sabrina started building a two-seat one-hundred horsepower light sport aircraft. At fourteen, she flew her Cessna 150 solo in Canada and completed the build of her experimental aircraft. She conducted her first US solo flight in the airplane she built at sixteen and graduated MIT while still a teenager. She earned her PhD at Harvard under Andy Strominger. Half way through her post-doc at the Princeton Center for Theoretical Science, she was targeted by Brown University and the Perimeter Institute for open faculty positions—she declined Brown and accepted Perimeter becoming a professor of theoretical physics at age twenty-seven.",
    third_dimension_model_text: null,
    third_dimension_model_image: '/images/pasterski/desktop_card.png'
  },
  'wood': {
    header_image: '/images/wood/desktop_banner.png',
    title: 'Dr. Danielle Wood',
    description: null,
    third_dimension_model_text: "This model shows a pyramid with numerous images regarding NASA and space, which are heavy influences in Danielle Wood’s career as an Assistant Professor in Media Arts & Sciences at MIT. <br /> Within the MIT Media Lab, Prof. Wood leads the Space Enabled Research Group which seeks to advance justice in Earth's complex systems, using designs enabled by space. <br /> Wood is a scholar of societal development with a background that includes satellite design, earth science applications, systems engineering, and technology policy. In her research, Prof. Wood applies these skills to design innovative systems that harness space technology to address development challenges around the world.",
    third_dimension_model_image: '/images/wood/desktop_card.png'
  }
};
genius_card = document.querySelector("genius-card");
if (genius_card.getAtrribute("onclick") == true) {
  switch (content) {
      case "joy":
        location.href = location.href + "/joy";
        insertImage(header_image, content[0][header_image], header);
        insertTextByClass(title, content[0][title], container_header);
        insertTextByClass(description, content[0][description], container_header);
        insertImageByClass(third_dimension_model_image, content[0][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[0][third_dimension_model_text], left);
      case 'pressley':
        location.href = location.href + "/pressley";
        insertImage(header_image, content[1][header_image], header);
        insertTextByClass(title, content[1][title], container_header);
        insertTextByClass(description, content[1][description], container_header);
        insertImageByClass(third_dimension_model_image, content[1][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[1][third_dimension_model_text], left);
      case 'bhatia':
        location.href = location.href + "/bhatia";
        insertImage(header_image, content[2][header_image], header);
        insertTextByClass(title, content[2][title], container_header);
        insertTextByClass(description, content[2][description], container_header);
        insertImageByClass(third_dimension_model_image, content[2][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[2][third_dimension_model_text], left);
      case 'dressel':
        location.href = location.href + "/dressel";
        insertImage(header_image, content[3][header_image], header);
        insertTextByClass(title, content[3][title], container_header);
        insertTextByClass(description, content[3][description], container_header);
        insertImageByClass(third_dimension_model_image, content[3][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[3][third_dimension_model_text], left);
        break;
      case 'gray':
        location.href = location.href + "/gray";
        insertImage(header_image, content[4][header_image], header);
        insertTextByClass(title, content[4][title], container_header);
        insertTextByClass(description, content[4][description], container_header);
        insertImageByClass(third_dimension_model_image, content[4][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[4][third_dimension_model_text], left);
      case 'hamilton':
        location.href = location.href + "/hamilton";
        insertImage(header_image, content[5][header_image], header);
        insertTextByClass(title, content[5][title], container_header);
        insertTextByClass(description, content[5][description], container_header);
        insertImageByClass(third_dimension_model_image, content[5][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[5][third_dimension_model_text], left);
      case 'jackson':
        location.href = location.href + "/jackson";
        insertImage(header_image, content[6][header_image], header);
        insertTextByClass(title, content[6][title], container_header);
        insertTextByClass(description, content[6][description], container_header);
        insertImageByClass(third_dimension_model_image, content[6][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[6][third_dimension_model_text], left);
        break;
      case 'khan':
        location.href = location.href + "/khan";
        insertImage(header_image, content[7][header_image], header);
        insertTextByClass(title, content[7][title], container_header);
        insertTextByClass(description, content[7][description], container_header);
        insertImageByClass(third_dimension_model_image, content[7][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[7][third_dimension_model_text], left);
        break;
      case 'land':
        location.href = location.href + "/land";
        insertImage(header_image, content[8][header_image], header);
        insertTextByClass(title, content[8][title], container_header);
        insertTextByClass(description, content[8][description], container_header);
        insertImageByClass(third_dimension_model_image, content[8][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[8][third_dimension_model_text], left);
      case 'mcnair':
        location.href = location.href + "/mcnair";
        insertImage(header_image, content[9][header_image], header);
        insertTextByClass(title, content[9][title], container_header);
        insertTextByClass(description, content[9][description], container_header);
        insertImageByClass(third_dimension_model_image, content[9][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[9][third_dimension_model_text], left);
      case 'moses':
        location.href = location.href + "/moses";
        insertImage(header_image, content[10][header_image], header);
        insertTextByClass(title, content[10][title], container_header);
        insertTextByClass(description, content[10][description], container_header);
        insertImageByClass(third_dimension_model_image, content[10][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[10][third_dimension_model_text], left);
      case 'pasterski':
        location.href = location.href + "/pasterski";
        insertImage(header_image, content[11][header_image], header);
        insertTextByClass(title, content[11][title], container_header);
        insertTextByClass(description, content[11][description], container_header);
        insertImageByClass(third_dimension_model_image, content[11][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[11][third_dimension_model_text], left);
      case 'wood':
        location.href = location.href + "/wood";
        insertImage(header_image, content[12][header_image], header);
        insertTextByClass(title, content[12][title], container_header);
        insertTextByClass(description, content[12][description], container_header);
        insertImageByClass(third_dimension_model_image, content[12][third_dimension_model_image], model);
        insertTextByClass(third_dimension_model_text, content[12][third_dimension_model_text], left);
  }
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

  /* {
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
  <button-component></button-component> } */
