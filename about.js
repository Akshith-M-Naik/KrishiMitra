document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.images');
    const prevBtn = document.querySelector('.pre-btn');
    const nextBtn = document.querySelector('.nxt-btn');
    let index = 0;
    const intervalTime = 2000; // Change slide every 5 seconds
    let slideInterval;

    function showImage() {
        images.forEach(img => img.style.display = 'none');
        images[index].style.display = 'block';
    }

    function nextImage() {
        index++;
        if (index >= images.length) {
            index = 0;
        }
        showImage();
    }

    function prevImage() {
        index--;
        if (index < 0) {
            index = images.length - 1;
        }
        showImage();
    }

    function startSlide() {
        slideInterval = setInterval(nextImage, intervalTime);
    }

    function stopSlide() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', function() {
        nextImage();
        stopSlide();
        startSlide();
    });

    prevBtn.addEventListener('click', function() {
        prevImage();
        stopSlide();
        startSlide();
    });

    startSlide(); // Start the slideshow initially
});
