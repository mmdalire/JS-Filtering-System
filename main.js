const navigationBar = document.querySelectorAll('[data-nav-list]');
const addMovieButton = document.querySelector('.movie-list__add-movie');
const movieModal = document.querySelector('.movie__modal-box');
const closeMovieModal = document.querySelector('.close');

//Adding movie into the list
const addMovieToList = document.querySelector('#add-movie');
const movieList = document.querySelector('.movie-system__movie-list');
const selectGenre = document.querySelector('#movie-genre');

//Add movie into the list
const addMovie = () => {
    //Create a new item
    const newMovieItem = document.createElement('div');
    newMovieItem.className = 'movie-list__movie-item';

    //Place of logo
    const newMovieLogo = document.createElement('div');
    newMovieLogo.className = 'movie-logo';
    newMovieLogo.innerHTML = changeMovieLogo();
    
    //Place of movie description container
    const newMovieDescriptionContainer = document.createElement('div');
    newMovieDescriptionContainer.className = 'movie-description';

    //Movie title
    const newMovieTitle = document.createElement('h2');
    newMovieTitle.textContent = document.querySelector('#movie-name').value;
    document.querySelector('#movie-name').value = '';

    //Movie genre
    const newMovieGenre = document.createElement('div');
    newMovieGenre.classList = 'movie-genre';
    newMovieGenre.textContent = document.querySelector('#movie-genre').value;
    document.querySelector('#movie-genre').value = 'None';

    //Movie rating
    const newMovieRating = document.createElement('div');
    newMovieRating.className = 'movie-rating';
    newMovieRating.innerHTML = changeMovieRating();
    document.querySelector('#movie-rating').value = 'None';

    //Movie description
    const newMovieDescription = document.createElement('p');
    newMovieDescription.textContent = document.querySelector('#movie-description').value;
    document.querySelector('#movie-description').value = '';
    
    //Append the description information inside the container
    newMovieDescriptionContainer.appendChild(newMovieTitle);
    newMovieDescriptionContainer.appendChild(newMovieGenre);
    newMovieDescriptionContainer.appendChild(newMovieRating);
    newMovieDescriptionContainer.appendChild(newMovieDescription);

    //Append the container
    newMovieItem.appendChild(newMovieLogo);
    newMovieItem.appendChild(newMovieDescriptionContainer)

    //Add the movie list into the container
    movieList.appendChild(newMovieItem);
}

//Change the logo of movie according to genre
const changeMovieLogo = () => {
    const genreLogo = document.querySelector('#movie-genre').value;
    switch(genreLogo) {
        case 'Action':
            return '<i class="fas fa-fighter-jet fa-7x"></i>';
        case 'Comedy':
            return '<i class="far fa-laugh fa-7x"></i>';
        case 'Drama':
            return '<i class="fas fa-theater-masks fa-7x"></i>';
        case 'Horror':
            return '<i class="fas fa-ghost fa-7x"></i>';
        case 'Romance':
            return '<i class="fas fa-heart fa-7x"></i>';
        default:
            return '';
    }
}

//Change the movie ratings
const changeMovieRating = () => {
    const rating = document.querySelector('#movie-rating').value;
    const remainingStar = 5 - rating;
    let starRatings = '';
    for(let i = 0; i < rating; i++) {
        starRatings += '<i class="fas fa-star" style="margin-right: 4px"></i>';
    }
    for(let i = 0; i < remainingStar; i++) {
        starRatings += '<i class="far fa-star" style="margin-right: 4px"></i>';
    }
    return starRatings;
}

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
});

//When closing of modal box through x icon
closeMovieModal.addEventListener('click', () => {
    movieModal.style.display = 'none';
});

//Add movie modal submit button
addMovieToList.addEventListener('click', e => {
    addMovie();
    movieModal.style.display = 'none';
});

//Selecting genre and changing its logo in modal 
selectGenre.addEventListener('change', e => {
    const genreLogo = document.querySelector('.add-movie__genre-image');
    genreLogo.innerHTML = changeMovieLogo();
});

//Whenever the user clicks outside the modal
window.addEventListener('click', e => {
    if(e.target === movieModal) { //If the user clicks outside the modal content
        movieModal.style.display = 'none';
    }
})

