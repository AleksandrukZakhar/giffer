let url = "";
const input = document.querySelector("input");
const search = document.querySelector(".search");
const img = document.querySelector("img");
const another = document.querySelector(".another");

input.addEventListener("input", () => {
    search.classList.add("show");
});

const fetchGif = async (url) => {
    const loadingImg = "https://bit.ly/3CZXt32";

    another.classList.remove("show");

    img.classList.add("show");
    img.src = loadingImg;
    img.alt = "Loading";

    try {
        const response = await fetch(url, {
            mode: "cors",
        });
        const res = await response.json();

        img.src = res.data.images.original.url;
        img.alt = res.data.id;
        another.classList.add("show");
    } catch (err) {
        throw new Error(err);
    }
};

search.addEventListener("click", () => {
    url = `https://api.giphy.com/v1/gifs/translate?api_key=7mpjdDaOie3ZY0DbJUMDrPwfMahd2SDA&s=${input.value}`;
    input.value = "";
    search.classList.remove("show");

    fetchGif(url);
});

another.addEventListener("click", () => fetchGif(url));
