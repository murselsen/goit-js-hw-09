import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e=document.querySelector(".feedback-form");e.addEventListener("input",t=>{t.preventDefault(),console.log("Input event fired",t);let a=e.elements.email.value,l=e.elements.message.value.toString().trim();console.log("email:",a),console.log("message:",l),localStorage.setItem("feedback-form-state",JSON.stringify({email:a,message:l}))});const s=JSON.parse(localStorage.getItem("feedback-form-state"))||null;s.email&&(e.elements.email.value=email);s.message&&(e.elements.message.value=message);e.addEventListener("submit",t=>{t.preventDefault();let a=e.elements.email.value,l=e.elements.message.value.toString().trim();console.log({email:a,message:l}),localStorage.removeItem("feedback-form-state"),t.currentTarget.reset()});
//# sourceMappingURL=02-form.js.map
