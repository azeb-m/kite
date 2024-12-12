// Handle opening and closing the chat popup
document.getElementById("chat-btn").addEventListener("click", function () {
  document.getElementById("chat-popup").style.display = "block";
});

document.getElementById("close-btn").addEventListener("click", function () {
  document.getElementById("chat-popup").style.display = "none";
});


document.getElementById("send-btn").addEventListener("click", function () {
  var message = document.getElementById("message-input").value;
  if (message) {
    var whatsappLink = `https://wa.me/+251960206436?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
    document.getElementById("message-input").value = ""; // Clear the input after sending
  }
});
