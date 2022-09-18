'use strict';

const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('confirmPassword');
const messages=[...document.getElementsByClassName('message')]
const submit=document.getElementById('submit');
const inputs=[...document.getElementsByClassName('form--inp')]
const form= document.querySelector('form');
 inputs.forEach(input=>{
    input.addEventListener('blur',function(){
const id=input.id;
    if(id==='username')process(input,input.value.length===0,'invalid username');
    else if(id==='email')process(input,!/\S+@\S+\.\S+/.test(input.value),'invalid email');
    else if(id==='password')process(input,input.value.length<8,'8 chars minimum');
    else if(id==='confirmPassword')process(input,input.value!==password.value,'passwords not matching')
    })
 
})
submit.addEventListener('click',function(e){
    e.preventDefault()
  inputs.forEach(input=>{
 const id=input.id;
    if(id==='username')process(input,input.value.length===0,'invalid username');
    else if(id==='email')process(input,!/\S+@\S+\.\S+/.test(input.value),'invalid email');
    else if(id==='password')process(input,input.value.length<8,'8 chars minimum');
    else if(id==='confirmPassword')process(input,input.value!==password.value,'passwords not matching')
})
if(messages.every(msg=>msg.textContent==='')){
   form.textContent='Registration Successful';
   form.style.color='rgb(155, 15, 155)';
   form.style.fontSize='24px';
   form.style.width='75%';
   form.style.textAlign='center'
}
})

const process=(inp,condition,txt)=>{
    if(condition){
        x(inp,txt)
    }else{
        ok(inp)
    }
}
const x=(i,txt)=>{
    const msg=i.parentElement.parentElement.querySelector('small');
    msg.textContent=txt;
    const err=i.nextElementSibling;
    err.classList.remove('hide');
}
const ok=(i)=> {
        const msg=i.parentElement.parentElement.querySelector('small');
    msg.textContent='';
    const err=i.nextElementSibling;
    err.classList.add('hide'); 
}