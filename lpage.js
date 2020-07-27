


/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBuilder = () => {
  let navUI = '';
  sections.forEach(section => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
    
  });
  navigation.innerHTML = navUI;
  
};
navBuilder();
// Add class 'active' to section when near top of viewport


//getting the largest value that's less or equal to the number
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//remove the active class
const removeActive = (section) => {
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
};

//addiing the active class
const addActive = (condition, section) => {
  if(condition){
    section.classList.add('your-active-class');
    section.style.cssText= "background-color: black; cursor: pointer";
  };
};

//implementing the actual function

const activeSection =()=>{
  sections.forEach(section => {
    const elementOffset = offset(section);
    
    inviewport = () => elementOffset < 150 && elementOffset >= -150;
    
    removeActive(section);
    addActive(inviewport(),section);
  });
};

function myFunction(e){
    const elems = document.querySelectorAll('.active');
    [].forEach.call(elems,function(el){
        el.classList.remove('active');
    });
    e.target.className = 'active';
}

document.addEventListener('scroll', activeSection);

// Scroll to anchor ID using scrollTO event
const scroll_to =() => {
  const links = document.querySelectorAll('.navbar__menu a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      for(i =0; i<sections; i++){
        sections[i].addEventListener('click', sectionScroll(link));
      }
    });
  });
};

scroll_to();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


var text = new Blotter.Text("Hello", {
    family : "serif",
    size : 120,
    fill : "#171717"
  });

  var material = new Blotter.ChannelSplitMaterial();
  material.uniforms.uSineDistortSpread.value = 0.025;
  material.uniforms.uSineDistortCycleCount.value = 2;
  material.uniforms.uSineDistortAmplitude.value = 0.13;
  material.uniforms.uNoiseDistortVolatility.value = 20;
  material.uniforms.uNoiseDistortAmplitude.value = 0.01;
  material.uniforms.uRotation.value = 60;
  material.uniforms.uSpeed.value = 0.168;

  var blotter = new Blotter(material, { texts : text });

  var scope = blotter.forText(text);

  scope.appendTo(document.getElementByName('h1'));