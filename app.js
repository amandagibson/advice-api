const apiUrl = "https://api.adviceslip.com/advice";

const shakeButton = document.getElementById("shake-button");
let responseMessage = document.getElementById("response-message");

shakeButton.addEventListener("click", () => {
  // // clear the previous advice message
  responseMessage.textContent = "";
  // fetch the advice from the API with a cache-busting query parameter
  fetch(`${apiUrl}?t=${Date.now()}`, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      responseMessage.textContent = data.slip.advice;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
});
