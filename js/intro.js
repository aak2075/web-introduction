var submit = document.getElementById("submit")
var reset = document.getElementById("reset")
submit.addEventListener("click", click_submit);
reset.addEventListener("click", click_reset);

function click_submit() {
    const name = document.querySelector('input[type="text"]').value;

    const movies = document.querySelectorAll('input[value="movie"]:checked');

    const numberOfMovies = movies.length

    alert(`${name}님,  저와 ${numberOfMovies}개의 취향이 같으시네요!`)
}

function click_reset() {
    document.querySelector('input[type="text"]').value = "";

    let movies = document.getElementsByClassName("movieCheck");
    for(let i=0;i<movies.length;i++){
        movies[i].checked = false;
    }
}