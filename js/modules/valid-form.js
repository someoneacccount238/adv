
export function submitForm() {
  const formList = [...document.getElementsByClassName('js-form')];
  console.log(formList);

  if (formList.length <= 0) return;
  formList.forEach(activeForm => {
    
    activeForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const method = activeForm.getAttribute('method');
      const action = activeForm.getAttribute('action');
      const emailInp = activeForm.querySelector('.js-name');
      const phoneInp = activeForm.querySelector('.js-phone');
      const roleClientEl = [...activeForm.querySelectorAll('input[type=radio]')].find(r => r.checked)?.value;
      const roleClientVal = roleClientEl ? roleClientEl : 'offer';
      const taInp = activeForm.querySelector('.js-message');
      let formBody = new FormData()
      console.log(emailInp);
      console.log(phoneInp);
      console.log(roleClientVal);
      console.log(taInp);
      formBody.append('name', emailInp.value);
      formBody.append('phone', phoneInp.value);
      formBody.append('role', roleClientVal);
      formBody.append('message', taInp.value);
      
      const response = await fetch(action, {
        method,
        body: formBody,
      });

      if (response.ok) {
        console.log('Good mail');
        activeForm.reset();
      } else {
        console.log('Bad mail');
      }
    });
  });
};

