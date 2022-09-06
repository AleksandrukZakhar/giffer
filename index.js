const input = document.querySelector("input");
const search = document.querySelector(".search");
const img = document.querySelector("img");
const another = document.querySelector(".another");

input.addEventListener("input", () => {
    search.classList.add("show");
});

const fetchGif = () => {
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=key&s=${input.value}`;

    fetch(url, {
        mode: "cors",
    })
        .then((res) => res.json())
        .then((json) => {
            img.classList.add("show");
            img.src = json.data.images.original.url;
            img.alt = json.data.id;
            another.classList.add("show");
        })
        .catch((err) => {
            throw new Error(err);
        });
};

search.addEventListener("click", () => {
    fetchGif();
});
another.addEventListener("click", fetchGif);
