function toggleAI(){
  const box=document.getElementById("aiBox");
  box.style.display = box.style.display==="block"?"none":"block";

  if(!box.dataset.init){
    addBot("Hi 👋 Ask me about skills, experience, or projects.");
    box.dataset.init="true";
  }
}

function askAI(){
  const input=document.getElementById("aiInput");
  const q=input.value.trim();
  if(!q) return;

  addUser(q);
  input.value="";

  setTimeout(()=>{
    addBot(getAnswer(q.toLowerCase()));
  },400);
}

function addUser(t){
  const log=document.getElementById("chatLog");
  log.innerHTML += `<div class="msg user">${t}</div>`;
  log.scrollTop = log.scrollHeight;
}

function addBot(t){
  const log=document.getElementById("chatLog");
  log.innerHTML += `<div class="msg bot">${t}</div>`;
  log.scrollTop = log.scrollHeight;
}

function getAnswer(q){
  if(q.includes("skill")) return "Node.js, React, Angular, AWS, GCP, MongoDB, MySQL, Microservices.";
  if(q.includes("experience")) return "Cognizant, Accenture, Antino, Webkul, Dreamer Technoland.";
  if(q.includes("project")) return "Coca-Cola, CLA, NGP Nora, Mitra Leader, Stock System, OxygenXL.";
  if(q.includes("contact")) return "Email, Phone and LinkedIn available in contact section.";
  return "Ask me about skills, experience, projects, or contact.";
}
function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("open");
}

function closeMenu(){
  document.getElementById("navLinks").classList.remove("open");
}

/* optional: close menu on outside click */
document.addEventListener("click", function(e){
  const nav = document.getElementById("navLinks");
  const toggle = document.querySelector(".menu-toggle");

  if(!nav.contains(e.target) && !toggle.contains(e.target)){
    nav.classList.remove("open");
  }
});
