const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

function openModal(element) {
  modal.style.display = "block";        
  modalImg.src = element.src;           
  captionText.innerHTML = element.alt;  
}


function closeModal() {
  modal.style.display = "none";
}
