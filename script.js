// fetch

const CAT_IMG = 'https://api.thecatapi.com/v1/images/search?size=full';
const DOG_IMG = 'https://api.thedogapi.com/v1/images/search';

document.getElementById('catsBtn').addEventListener('click', () => {
    addPictureCat(CAT_IMG);
});

document.getElementById('dogsBtn').addEventListener('click', () => {
    addPictureDog(DOG_IMG);
});

function addPictureCat(url){
    fetch(url)
    .then(response =>{
        response.json()
        .then(data => {
            let strucktCat = document.getElementById('picture');

            strucktCat.innerHTML =
            `<div>
                <img src=${data[0].url} alt="cat" />
            </div>`;

            /* console.log(data);
            console.log(data[0].url); 

            console.log(document.getElementById('catsBtn'));*/
        })
    })
};

function addPictureDog(url){
    fetch(DOG_IMG)
    .then(response =>{
        response.json()
        .then(data => {
            let strucktDog = document.getElementById('picture');

            strucktDog.innerHTML =
            `<div>
                <img src=${data[0].url} alt="dog" />
            </div>`;

            /* console.log(data);
            console.log(data[0].url); 

            console.log(document.getElementById('dogsBtn'));*/
        })
    })
};

