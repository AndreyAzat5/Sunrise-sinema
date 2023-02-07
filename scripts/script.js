const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}


function out() {
  //получаем значение поля email
  let value1 = document.getElementById('komento').value
  
  //получаем значение поля state
  let value2 = document.getElementById('state').value
  
  if (!value1 && !value2) return;
  let container = document.createElement('div');
  container.className = "container";
  
  //выводим значения обоих полей
  container.innerHTML ='<div class="userkoment">'+'<img src="avatarkaIkon.png"/>'+'<div class="boxtextuser">' + value2 + '<br>' + '<p class="textuser">'+value1+'</p>'+'</div>'+'</div>';
  document.getElementById('out').appendChild(container)
  }


// смена видимости блоков трейлера и фильма
  function showHide(elemID){
    document.getElementById(elemID=="blok_id"?"blok_1":"blok_id").style.display = "none";
    document.getElementById(elemID=="blok_id"?"blok_id":"blok_1").style.display = "block";
}

// смена  цвета кнопок трейлер и фильм
function izmeColor(elemID){
  document.getElementById(elemID=="blok"?"blok_2":"blok").style.backgroundColor = "#32a7c4";
  document.getElementById(elemID=="blok"?"blok":"blok_2").style.backgroundColor = "black";
}




// Поле поиска 

function poisk(){

  var val = document.getElementById('elastic').value.trim().toLowerCase();
  let elasticItems = document.querySelectorAll('.column a');
  if(val !== ''){
      elasticItems.forEach(function(elem){
          elem.innerText.toLowerCase().includes(val) 
              ? window.location.replace(elem)
              : document.querySelector('input').value = "Нет информации"; 
      });
  } 
}