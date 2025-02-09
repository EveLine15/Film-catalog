const cardHolder = document.querySelector('.card-holder');
const emptyMessage = document.querySelector('.empty');

JSON.parse(localStorage.favour).length !== 0 ? changeLayout(): emptyMessage.classList.remove('none');

function changeLayout(){
    JSON.parse(localStorage.favour).forEach(element => {
        const poster = document.createElement('div');
        poster.classList.add('poster');
        poster.innerHTML += `<img src="${element.posterUrl}" id="${element.kinopoiskId}" alt="film">`;
        cardHolder.appendChild(poster);
    });
}