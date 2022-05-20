// Libraries
import "core-js/stable";
import "regenerator-runtime/runtime";
// Style & Static files
import './css/main.scss';
import s2iLogo from './imgs/JS Advanced Project.png';
// JS
import formActions from './js/formActions';

// HTML Settings: Favicon
const img = document.getElementById('s2i-logo');
img.src = s2iLogo;

// HTML Form event controller
const form = document.getElementById('form');
const formBtn = document.getElementById('form-button');
formBtn.addEventListener("click", function(event){
    event.preventDefault();
    formActions.searchCity(form.city.value)
      .then(res => { 
        return formActions.updateCard(res, form.city.value, null) 
      })
      .catch(e => { 
        if (e) {
          return alert('Oops, something bad happened! Retry later.');
        }
      });
});