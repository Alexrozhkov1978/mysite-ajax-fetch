document.querySelector('.about-txt-Lombarda').addEventListener('click', loadHtmlAjax);

function loadHtmlAjax() {
    const xhr= new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.html-placeholder').innerHTML = xhr.responseText
        }
    }
    xhr.open('GET', 'sametext.html', true)
    xhr.send();
}

document.querySelector('.about-villas-txt').addEventListener('click', loadJsonAjax);
function loadJsonAjax() {
    const xhr= new
    XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const villaData = JSON.parse(xhr.responseText);
            document.querySelector('.txt-abot-villa-cebao').innerText = villaData.villaCebaoStr1 + villaData.villaCebaoStr2;
            document.querySelector('.txt-abot-villa-socol').innerText = villaData.villaSocolStr1 + villaData.villaSocolStr2 + villaData.villaSocolStr3;
            }
    }
    xhr.open('GET', 'about-villas.json', true)
    xhr.send();
}

/*document.querySelector('.contact-form input[type=submit]').addEventListener('click', submitForm);
function submitForm(e){
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function (){
            if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.contact-form').InnerHTML = '<h3>Thank You! We will answer as soon as possible!</h3>';
            } else if ( xhr.readyState === 4 && xhr.status !== 200) {
                document.querySelector('.contact-form').InnerHTML = '<h3>Error! Try agan please</h3>';
            }
    }
    xhr.open('POST', 'sending-msg', true);
    const form = document.querySelector('contact-form');
    const data = new FormData(form);
    xhr.send(data);
}
*/


/*const text = document.querySelector('textarea');

document.querySelector('input[type=submit]')
  .addEventListener('click', saveText);

document.querySelector('.load')
  .addEventListener('click', loadText);

function saveText(e) {
  e.preventDefault();
  localStorage['text'] = text.value;
}

function loadText() {
  text.value = localStorage['text'] || '';
}
*/