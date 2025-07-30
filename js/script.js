
    document.addEventListener('DOMContentLoaded', function() {
      const toggleBtn = document.getElementById('menu-toggle');
      const sidebar  = document.getElementById('sidebar');
      const main     = document.getElementById('main');

      toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        sidebar.classList.toggle('expanded');
        main.classList.toggle('shifted');
      });
    });
const bankButtons = document.querySelectorAll('.bank-button');

bankButtons.forEach(button => {
    button.addEventListener('click', () => {
        bankButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
    });
});

  document.addEventListener("DOMContentLoaded", function () {
    const proceedBtn = document.querySelector(".proceed-button");
    const dashboard = document.querySelector(".dashboard");

    // Hide dashboard initially
    dashboard.style.display = "none";

    proceedBtn.addEventListener("click", function () {
      dashboard.style.display = "block";
    });
  });


  //for eye opening and closing and password seeing in signup page
  const signupPage = document.querySelector(".signuppage")
if(signupPage){
    let closedeye = true
  const ClosedEye = document.querySelectorAll(".bxs-eye-closed")
  const SeePass = document.querySelector("#pwd")
  const alsoSeePass = document.querySelector("#pwds")
  const OpenEye = document.querySelectorAll(".bx-eye")
  OpenEye.forEach((el)=>{
      el.style.display = "none"
  })
  
  ClosedEye.forEach((el,index)=>{
    el.addEventListener("click" , ()=>{
      const doit = OpenEye[index]
      el.style.display = "none"
      doit.style.display = "block"
      SeePass.type = "text"
      alsoSeePass.type = "text"
      logPass.type = "text"
      closedeye = false

    })
  })
  OpenEye.forEach((el,index)=>{
    const didit = ClosedEye[index]
    el.addEventListener("click" , ()=>{
      el.style.display = "none"
      didit.style.display = "block"
      SeePass.type = "password"
      alsoSeePass.type = "password"
      logPass.type = "password"
      closedeye = true

    })
  })

}


const logPass = document.querySelector("#logpas")
if(logPass){
  let closedeye = true
  const ClosedEye = document.querySelector(".bxs-eye-closed")
  const OpenEye = document.querySelector(".bx-eye")
  OpenEye.style.display = "none"

    ClosedEye.addEventListener("click",()=>{
      ClosedEye.style.display = "none"
      OpenEye.style.display = "block "
      logPass.type = "text"
      closedeye = false
    })
    OpenEye.addEventListener("click",()=>{
      ClosedEye.style.display = "block"
      OpenEye.style.display = "none"
      logPass.type = "password"
      closedeye = false
  })
 

}


  








