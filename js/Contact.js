let ContactForm = document.getElementById('frmContact');

ContactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let fields = document.querySelectorAll('input[required],textarea[required]');
    let valid = true;

    fields.forEach((field) => {
        if(! validatefield(field)){
            valid = false;
        }
    });
    if(valid){
        e.target.submit()
    }

},false);

function validatefield(field){
   if(field.checkValidity()){
    return true;
   } else {
    field.classList.add('invalid')
    field.previousElementSibling.insertAdjacentHTML('beforeend' , `<span class="msg">${field.validationMessage}</span>`)
    return false;
   }
};

function resetfield(field){
    let fieldLabel =  field.previousElementSibling;
    field.classList.remove('invalid');
    while(fieldLabel.firstElementChild){
        fieldLabel.removeChild(fieldLabel.firstElementChild)
    }
    field.valid = true;
}