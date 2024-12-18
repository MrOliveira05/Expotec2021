let arrow = document.querySelectorAll(".arrow");
  for (var i = 0; i < arrow.length; i++) 
  {
      arrow[i].addEventListener("click", (e)=>{
      let arrowParent = e.target.parentElement.parentElement;
      arrowParent.classList.toggle("showMenu");
  });

  }
      let sidebar = document.querySelector(".sidebar");
      let sidebarBtn = document.querySelector(".menu-btn");
      console.log(sidebarBtn);
      sidebarBtn.addEventListener("click", ()=>{
      sidebar.classList.toggle("close");
  });

  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  menuBtn.addEventListener('click', () => 
  {
    if(!menuOpen) 
    {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else 
    {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  }); 

/*===== SCROLL REVEAL ANIMATION =====*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '550px',
    duration: 1700,
});

/*---------------------SCROLL HOME---------------------*/
sr.reveal('.button2',{delay: 300}); 
sr.reveal('.home__data',{delay: 150}); 
sr.reveal('.seetags',{delay: 150});
sr.reveal('.section-title',{delay: 200});
sr.reveal('.tag',{delay: 1});
sr.reveal('.tag2',{delay: 1});
sr.reveal('.tag3',{delay: 1});
sr.reveal('.tag4',{delay: 1});
sr.reveal('.tag5',{delay: 1});
sr.reveal('.tag6',{delay: 1});
sr.reveal('.about__text',{delay: 200});

/*--------------------SOBRE-----------------------------*/
sr.reveal('.gallery',{delay: 150}); 
sr.reveal('.gallery2',{delay: 150}); 
sr.reveal('.about__subtitle',{delay: 170}); 

/*---------------------SCROLL ABOUT--------------------*/
sr.reveal('.about__img',{}); 
sr.reveal('.tags__title',{delay: 300}); 
sr.reveal('.tags__titles',{delay: 300}); 

/*-_-_-_-_-_-DARK MODE-_-_-_-_-_-*/
const html = document.querySelector("html")
const checkbox = document.querySelector("input")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
    background: getStyle(html, "--background"),
    backside:getStyle(html, "--backside"),
    firstcolor: getStyle(html, "--firstcolor"),
    secondcolor: getStyle(html, "--secondcolor"),
    icons: getStyle(html, "--icons"),
    hoverside: getStyle(html, "--hoverside")
}

const darkMode = {
    background: "#121212",
    backside:"#244B53",
    firstcolor: "#334E68",
    secondcolor: "#BCCCDC",
    icons:"#BDBDBD",
    hoverside:"#243B53"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


/*-_-_-_-_-_-BARRA DE PROGRESSO-_-_-_-_-_-*/
showProgressBar = () => {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("js-barraDeLeitura").style.width = `${scrolled}%`;
};
window.onscroll = () => {
  showProgressBar();
};



/*-------------SLIDE WORDS----------------*/ 
setInterval(function () {
  const show = document.querySelector('span[data-show]')
  const next = show.nextElementSibling || document.querySelector('span:first-child')
  const up = document.querySelector('span[data-up]')
  
  if (up) {
    up.removeAttribute('data-up')
  }
  
  show.removeAttribute('data-show')
  show.setAttribute('data-up', '')
  
  next.setAttribute('data-show', '')
}, 2000)

