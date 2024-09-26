
// console.log('sdfawgsrv')
const wrapper=document.querySelector('.wrapper');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const popupBtn=document.querySelector('.btnLogin-popup');
const iconClose=document.querySelector('.icon-close')
// var regestration =function(){
//     wrapper.classList.add('active');
// }
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
})
// registerLink.addEventListener('click',regestration);
loginLink.addEventListener('click',()=>{
   wrapper.classList.remove('active');
});
popupBtn.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});
// window.alert('hello')
