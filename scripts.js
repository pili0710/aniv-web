const message = document.querySelector(".message");
const photos = document.querySelector(".photos");
const text = document.querySelector(".text");
const continueBtn = document.querySelector(".continue");
const finalMessage = document.querySelector(".final-message");

message.addEventListener("click", function() {
    message.classList.add("hidden");
    photos.classList.remove("hidden");
    text.classList.remove("hidden");
    continueBtn.classList.remove("hidden");
});

continueBtn.addEventListener("click", function() {
    photos.classList.add("hidden");
    text.classList.add("hidden");
    continueBtn.classList.add("hidden");
    finalMessage.classList.remove("hidden");
});
