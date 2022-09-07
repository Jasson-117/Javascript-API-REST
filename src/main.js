const apiKey = '6222775ee16ea2d51ce8f600f8108354'
async function getTrendingMoviesPreview(){
    const res = await fetch('http://api.themoviedb.org/3/trending/movie/day?api_key='+apiKey);
    const data = await res.json()

    const movies = data.results;
    movies.forEach(element => {
        const trendingPreviewMoviesContainer = document.querySelector
        ('#trendingPreview .trendingPreview-movieList')
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        const movieImg = document.createElement('img');
        movieImg.classList.add('movie-img');
        movieImg.setAttribute('alt',element.tittle) 
        movieImg.setAttribute(
            'src',
            'https://image.tmdb.org/t/p/w300'+ element.poster_path,
        );
        movieContainer.appendChild(movieImg);
        trendingPreviewMoviesContainer.appendChild(movieContainer);
    });
}
getTrendingMoviesPreview();