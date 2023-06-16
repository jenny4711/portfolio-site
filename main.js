"use stric";
const body=document.querySelector('body')
const nIcon=document.querySelector('#netflix_project')
const btn=document.querySelector('.circlebtn')
const modeBtn=document.querySelector('.fa-solid')
const git=document.querySelector('.fa-github')
const linked=document.querySelector('.fa-linkedin')
const lines=document.querySelectorAll('#line')
const navA=document.querySelectorAll('.a')
const icon=document.querySelector('#nfIcon')
const joblyIcon=document.querySelector('#jbIcon')
console.log(navA)

function toggleById(id){
  if(body.classList.contains("mode")){
    id.classList.add('line')
    icon.classList.remove('iconWh')
    icon.classList.add('iconBk')
    joblyIcon.classList.remove('iconJwh')
    joblyIcon.classList.add('iconBk')
   
  }else{
    id.classList.remove("line")
    icon.classList.remove('iconBk')
    icon.classList.add('iconWh')
    joblyIcon.classList.remove('iconBk')
    joblyIcon.classList.add('iconJwh')
  }
}

btn.addEventListener("click",()=>{
  body.classList.toggle("mode")
  modeBtn.classList.toggle('darkMode')
  git.classList.toggle('darkMode')
  linked.classList.toggle('darkMode')
  lines.forEach(line=>toggleById(line))
  navA.forEach(a=>a.classList.toggle('aTag'))
  toggleById(icon)

 
})