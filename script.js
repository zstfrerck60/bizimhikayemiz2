<script>
/* ==============================
   1️⃣ TANIŞMA SÜRESİ SAYACI
   ============================== */

const startDate = new Date("2023-12-31T11:39:00");

function updateCounter() {
    const now = new Date();
    let diff = now - startDate;

    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("counter").innerHTML =
    const counterEl = document.getElementById("counter");

// eski sayı aşağı aksın
counterEl.classList.remove("slide-in");
counterEl.classList.add("slide-out");

setTimeout(() => {
    counterEl.textContent =
        `${years} yıl ${days} gün ${hours} saat ${minutes} dk ${seconds} sn`;

    counterEl.classList.remove("slide-out");
    counterEl.classList.add("slide-in");
}, 200);


        years + " yıl " +
        days + " gün " +
        hours + " saat " +
        minutes + " dk " +
        seconds + " sn";
}

setInterval(updateCounter, 1000);
updateCounter();



/* ==============================
   2️⃣ MÜZİK PLAY / PAUSE
   ============================== */

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let isPlaying = false;

musicBtn.addEventListener("click", () => {
    if (!isPlaying) {
        music.play();
        musicBtn.textContent = "⏸️ Müziği Durdur";
        isPlaying = true;
    } else {
        music.pause();
        musicBtn.textContent = "▶️ Müzik Aç";
        isPlaying = false;
    }
});




document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("dailyMessageInput");
    const button = document.getElementById("dailyMessageBtn");
    const box = document.getElementById("dailyMessageBox");

    // Sayfa açılınca mesajı yükle
    const savedMessage = localStorage.getItem("dailyMessage");
    const savedTime = localStorage.getItem("dailyMessageTime");

    if (savedMessage && savedTime) {
        const now = Date.now();
        const diff = now - Number(savedTime);

        if (diff < 24 * 60 * 60 * 1000) {
            box.textContent = savedMessage;
        } else {
            localStorage.removeItem("dailyMessage");
            localStorage.removeItem("dailyMessageTime");
        }
    }

    // Kaydet butonu
    button.addEventListener("click", () => {
        const text = input.value.trim();
        if (text === "") return;

        localStorage.setItem("dailyMessage", text);
        localStorage.setItem("dailyMessageTime", Date.now());

        box.textContent = text;
        input.value = "";
    });

});




/* ==============================
   4️⃣ GÜNLER BUTONLARI (GÜN 1-2-3)
   ============================== */

function goToDay(day) {
    window.location.href = "gun" + day + ".html";
}
</script>
// FOTO SLIDER - otomatik + buton
document.addEventListener("DOMContentLoaded", () => {
    const photos = [];
    for (let i = 1; i <= 10; i++) {
        photos.push(`images/foto${i}.jpg`);
    }

    let currentIndex = 0;
    const sliderImage = document.getElementById("sliderImage");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    let autoSlide;

    function showPhoto(index) {
        sliderImage.style.opacity = 0;
        setTimeout(() => {
            sliderImage.src = photos[index];
            sliderImage.style.opacity = 1;
        }, 300);
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    }

    nextBtn.addEventListener("click", () => {
        nextPhoto();
        resetAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
        prevPhoto();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextPhoto, 3000); // 3 saniye otomatik geçiş
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    showPhoto(currentIndex);
    startAutoSlide();
});
// FOTO SLIDER - otomatik + buton
const photos = [];
for (let i = 1; i <= 10; i++) {
    photos.push(`images/foto${i}.jpg`);
}

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let autoSlide;

function showPhoto(index) {
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = photos[index];
        sliderImage.style.opacity = 1;
    }, 200);
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
}

// Butonlar
prevBtn.addEventListener("click", () => {
    prevPhoto();
    resetAutoSlide();
});

nextBtn.addEventListener("click", () => {
    nextPhoto();
    resetAutoSlide();
});

// Otomatik kaydır
function startAutoSlide() {
    autoSlide = setInterval(nextPhoto, 3000); // 3 saniye
}

function resetAutoSlide() {
    clearInterval(autoSlide);
    startAutoSlide();
}

// Başlangıç
showPhoto(currentIndex);
startAutoSlide();
// FOTO SLIDER - otomatik + buton
(function() {
    const photos = [];
    for(let i = 1; i <= 10; i++) {
        photos.push(`images/foto${i}.jpg`);
    }

    let currentIndex = 0;
    const sliderImage = document.getElementById("sliderImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let autoSlide;

    function showPhoto(index) {
        sliderImage.style.opacity = 0;
        setTimeout(() => {
            sliderImage.src = photos[index];
            sliderImage.style.opacity = 1;
        }, 200);
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    }

    prevBtn.addEventListener("click", () => {
        prevPhoto();
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        nextPhoto();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextPhoto, 3000); // 3 saniye
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // Başlangıç
    showPhoto(currentIndex);
    startAutoSlide();
})();
document.addEventListener("DOMContentLoaded", function() {
    const photos = [];
    for (let i = 1; i <= 10; i++) {
        photos.push(`images/foto${i}.jpg`);
    }

    let currentIndex = 0;
    const sliderImage = document.getElementById("sliderImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const sliderContainer = document.querySelector(".photo-container");
    let autoSlide;

    function showPhoto(index) {
        sliderImage.style.opacity = 0;
        setTimeout(() => {
            sliderImage.src = photos[index];
            sliderImage.style.opacity = 1;
        }, 200);
    }

    function nextPhoto() {
        currentIndex = (currentIndex + 1) % photos.length;
        showPhoto(currentIndex);
    }

    function prevPhoto() {
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
        showPhoto(currentIndex);
    }

    prevBtn.addEventListener("click", () => {
        prevPhoto();
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        nextPhoto();
        resetAutoSlide();
    });

    function startAutoSlide() {
        autoSlide = setInterval(nextPhoto, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlide);
        startAutoSlide();
    }

    // --- Mobil swipe desteği ---
    let touchStartX = 0;
    let touchEndX = 0;

    sliderContainer.addEventListener("touchstart", function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    sliderContainer.addEventListener("touchend", function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) { // hassasiyet
            if (diff > 0) {
                nextPhoto();
            } else {
                prevPhoto();
            }
            resetAutoSlide();
        }
    }

    // Başlangıç
    showPhoto(currentIndex);
    startAutoSlide();
});
