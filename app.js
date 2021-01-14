
// TAKE IN USER SUBMITTED INFO
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const searchValue = document.querySelector("input");
  getGif(searchValue.value);
  searchValue.value = "";
});

// MAKE REQUEST TO GIPHY API
async function getGif(keyword) {
  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "AlNKnZfSrp3fg4ISsu3RnmeAWcDxUgGQ",
      q: keyword,
    },
  });
  const index = Math.floor(Math.random() * response.data.data.length);
  const imgURL = response.data.data[index].images.fixed_height.url;
  addGifToContainer(imgURL);
}

//APPEND GIF TO CONTAINER
const addGifToContainer = (url) => {
  const gif = document.createElement("IMG");
  gif.setAttribute("src", url);
  document.getElementById("gifContainer").append(gif);
};

//REMOVE ALL GIFS
document.getElementById("deleteBtn").addEventListener("click", function () {
  document.getElementById("gifContainer").textContent = "";
});

//REMOVE INDIVIDUAL GIF
document
  .getElementById("gifContainer")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      event.target.remove();
    }
  });
