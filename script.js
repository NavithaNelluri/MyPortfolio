/* SKILL BAR + MOVING PERCENT */
const fills=document.querySelectorAll(".fill");

function animateOnScroll(){
  fills.forEach(fill=>{
    let mark = fill.querySelector(".skill-mark");
    if(!mark){
      mark=document.createElement("span");
      mark.classList.add("skill-mark");
      fill.appendChild(mark);
    }

    const rect=fill.getBoundingClientRect();
    const width=parseInt(fill.dataset.width||"0");

    if(rect.top<window.innerHeight){
      fill.style.width=width+"%";
      mark.textContent=width+"%";
      mark.style.left=width+"%";
    }
  });
}

/* REVEALS */
const reveals=document.querySelectorAll(
".reveal-up,.reveal-left,.reveal-right,.reveal-down");

function reveal(){
  reveals.forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-60){
      el.classList.add("reveal-active");
    }
  });
}


/* CARD TILT */
document.querySelectorAll(".project-card,.card").forEach(c=>{
  c.classList.add("tilt-card");

  c.addEventListener("mousemove",e=>{
    const r=c.getBoundingClientRect();
    const x=e.clientX-r.left-r.width/2;
    const y=e.clientY-r.top-r.height/2;

    c.style.transform =
     `perspective(800px) rotateX(${(-y/15)}deg)
      rotateY(${(x/15)}deg) scale(1.03)`;
  });

  c.addEventListener("mouseleave",()=>{
    c.style.transform="perspective(800px) scale(1)";
  });
});


/* DARK MODE */
const toggle=document.getElementById("theme-toggle");
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("dark-mode");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode")?"dark":"light"
  );
});

if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark-mode");
}


/* CURSOR GLOW */
const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});


/* LOADER */
window.addEventListener("load",()=>{
  document.getElementById("loader-overlay").style.display="none";
});


/* SCROLL EVENTS */
window.addEventListener("scroll",()=>{
  animateOnScroll();
  reveal();
});

window.addEventListener("DOMContentLoaded",()=>{
  animateOnScroll();
  reveal();
});


/* TYPEWRITER EFFECT */
const roleText = "Full Stack Developer";
const roleEl = document.querySelector(".section__text__p2");

let i = 0;
function typeWriter(){
  if(!roleEl) return;

  if(i <= roleText.length){
    roleEl.textContent = roleText.slice(0, i);
    i++;
    setTimeout(typeWriter, 80);
  }
}
typeWriter();

/* MAGNETIC BUTTON EFFECT */
document.querySelectorAll(".btn,.view-button").forEach(btn=>{
  btn.addEventListener("mousemove", e=>{
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width/2;
    const y = e.clientY - r.top  - r.height/2;

    btn.style.transform =
      `translate(${x * 0.15}px,${y * 0.15}px) scale(1.05)`;
  });

  btn.addEventListener("mouseleave", ()=>{
    btn.style.transform = "translate(0,0) scale(1)";
  });
});

/* PARALLAX HERO IMAGE */
const heroImg = document.querySelector(".section__pic-container img");

window.addEventListener("scroll", ()=>{
  if(heroImg){
    heroImg.style.transform =
      `translateY(${window.scrollY * 0.08}px)`;
  }
});


/* SCROLL PROGRESS BAR */
window.addEventListener("scroll",()=>{
  const scrolled =
   (window.scrollY /
   (document.body.scrollHeight - window.innerHeight)) * 100;

  document.getElementById("scroll-progress").style.width =
    scrolled + "%";
});

/* RIPPLE ON CLICK */
document.querySelectorAll(".btn,.view-button").forEach(el=>{
  el.addEventListener("click",e=>{
    const span=document.createElement("span");
    span.className="ripple";
    span.style.left = e.offsetX+"px";
    span.style.top  = e.offsetY+"px";
    el.appendChild(span);

    setTimeout(()=>span.remove(),600);
  });
});


document.querySelectorAll(".project-card").forEach((card,i)=>{
  card.style.setProperty("--i", i);
});

/* WHOOSH SECTION REVEAL */
document.querySelectorAll("section").forEach(el=>{
  el.classList.add("section-whoosh");
});

function sectionReveal(){
  document.querySelectorAll(".section-whoosh").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight-200){
      el.classList.add("show");
    }
  });
}
window.addEventListener("scroll",sectionReveal);
sectionReveal();


/* SAFE REVEAL ACTIVATION */
document.querySelectorAll(".reveal-up").forEach(el=>{
  function check(){
    if(el.getBoundingClientRect().top < window.innerHeight-80){
      el.classList.add("reveal-active");
    }
  }
  window.addEventListener("scroll",check);
  check();
});



