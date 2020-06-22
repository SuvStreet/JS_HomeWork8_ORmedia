const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';

// событие нажатие на кнопку коты 
document.getElementById('catsBtn').addEventListener('click', () => {
    addPictureCat(CAT_IMG);
});

// событие нажатие на кнопку собаки 
document.getElementById('dogsBtn').addEventListener('click', () => {
    addPictureDog(DOG_IMG);
});

// при наачльной загрузке страницы загружается по умолчанию коты
document.addEventListener("DOMContentLoaded", ()=>{
    addPictureCat(CAT_IMG);
});

// анимационная загрузка
function loading(){
    document.getElementById('imgPosition').innerHTML =
    `<div class="cssload-thecube">
        <div class="cssload-cube cssload-c1"></div>
        <div class="cssload-cube cssload-c2"></div>
        <div class="cssload-cube cssload-c4"></div>
        <div class="cssload-cube cssload-c3"></div>
    </div>`;
}

//добавление котов
function addPictureCat(url){
    loading();
    fetch(url).then(response =>{
        response.json().then(data => {
            let strucktCat = document.getElementById('imgPosition');
            let img = document.createElement('img');
            img.src = data[0].url;
            img.alt = 'cat';

            img.onload = () => {
                strucktCat.innerHTML = '';
                strucktCat.appendChild(img);
                if(data[0].breeds.length !== 0){
                    document.getElementById('poroda').innerHTML = 
                    `<span class="spanCat">Порода: </span>${data[0].breeds[0].name}`;
                    document.getElementById('lifeWeight').innerHTML = 
                    `<span class="spanCat">Продолжнительность жизни: </span>${data[0].breeds[0].life_span} лет`;
                }
                else{
                    document.getElementById('poroda').innerHTML = 
                    `<span class="spanCat">Порода: </span>Н/Д`;
                    document.getElementById('lifeWeight').innerHTML = 
                    `<span class="spanCat">Продолжнительность жизни: </span>Н/Д`;
                }
            };
            // console.log(data);
        });
    });
};

//добавление собак
function addPictureDog(url){
    loading();
    fetch(DOG_IMG).then(response =>{
        response.json().then(data => {
            let strucktDog = document.getElementById('imgPosition');
            let img = document.createElement('img');
            img.src = data[0].url;
            img.alt = 'dog';

            img.onload = () => {
                strucktDog.innerHTML = '';
                strucktDog.appendChild(img);
                if(data[0].breeds.length !== 0){
                    
                    document.getElementById('poroda').innerHTML = 
                    `<span class="spanDog">Порода: </span>${data[0].breeds[0].name}`;
                    document.getElementById('lifeWeight').innerHTML = 
                    `<span class="spanDog">Вес: </span>${data[0].breeds[0].weight.metric} кг`;  
                }
                else{
                    document.getElementById('poroda').innerHTML = 
                    `<span class="spanDog">Порода: </span>Н/Д`;
                    document.getElementById('lifeWeight').innerHTML = 
                    `<span class="spanDog">Вес: </span>Н/Д`;
                }
            };
            // console.log(data);
        });
    });
};

