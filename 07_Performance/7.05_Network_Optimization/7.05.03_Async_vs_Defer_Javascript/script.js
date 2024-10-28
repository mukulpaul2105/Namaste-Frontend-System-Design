function addListener () {
   document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("click", () => {
         alert("Card clicked");
      });
   });
}

window.onload = addListener;