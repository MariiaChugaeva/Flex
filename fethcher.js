document.addEventListener("DOMContentLoaded", () => {
    const email = "m.chugaeva@innopolis.university";
    const apiUrl = `https://fwd.innopolis.university/api/hw2?email=${email}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const comicId = data;
            return fetch(`https://fwd.innopolis.university/api/comic?id=${comicId}`);
        })
        .then(response => response.json())
        .then(comic => {
            const comicTitle = document.getElementById("IDtitle");
            const comicImg = document.getElementById("IDimage");
            const comicDate = document.getElementById("IDdata");

            comicTitle.textContent = comic.safe_title;
            comicImg.src = comic.img;
            comicImg.alt = comic.alt;
            const date = new Date(comic.year, comic.month - 1, comic.day);
            comicDate.textContent = date.toLocaleDateString();
        })
});
