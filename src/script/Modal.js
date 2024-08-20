 // Ambil elemen modal
 var modalBackdrop = document.getElementById("modalBackdrop");
 var modal = document.getElementById("modal");
 var btnCloseModal = document.getElementById("closeModal");

 // Fungsi untuk membuka modal
 function openModal() {
     modalBackdrop.classList.remove("hidden");
 }

 // Fungsi untuk menutup modal
 function closeModal() {
     modalBackdrop.classList.add("hidden");
 }

 // Tambahkan event listener untuk setiap kartu
 document.getElementById("Card1").addEventListener("click", openModal);
 document.getElementById("Card2").addEventListener("click", openModal);
 document.getElementById("Card3").addEventListener("click", openModal);

 // Tambahkan event listener untuk menutup modal saat latar belakang modal diklik
 modalBackdrop.addEventListener("click", function(event) {
     if (event.target === modalBackdrop) {
         closeModal();
     }
 });

 // Tambahkan event listener untuk menutup modal saat tombol close ditekan
 btnCloseModal.addEventListener("click", closeModal);