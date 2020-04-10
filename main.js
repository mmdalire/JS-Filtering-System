const navigationBar = document.querySelectorAll('[data-nav-list]');
const addMovieButton = document.querySelector('.movie-list__add-movie');
const movieModal = document.querySelector('.movie__modal-box');
const closeMovieModal = document.querySelector('.close');

//test
const addMovieToList = document.querySelector('#add-movie');
const movieList = document.querySelector('.movie-system__movie-list');

addMovieToList.addEventListener('click', e => {
    const movieName = document.querySelector('#movie-name');
    const newMovieItem = document.createElement('div');
    newMovieItem.className = 'movie-list__movie-item';
    newMovieItem.textContent = movieName.value;
    movieList.appendChild(newMovieItem);
    console.log(newMovieItem);


    movieModal.style.display = 'none';
})

//Navigation bar setting to active whenever clicked
navigationBar.forEach(navigation => {
    navigation.addEventListener('click', e => {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        navigation.classList.add('active');
    });
});

//For opening of modal box
addMovieButton.addEventListener('click', () => {
    movieModal.style.display = 'block';
})

//When closing of modal box through x icon
closeMovieModal.addEventListener('click', () => {
    movieModal.style.display = 'none';
})

//Whenever the user clicks outside the modal
window.addEventListener('click', e => {
    if(e.target === movieModal) { //If the user clicks outside the modal content
        movieModal.style.display = 'none';
    }
})

