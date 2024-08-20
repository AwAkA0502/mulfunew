function toggleContent(event) {
    const container = event.currentTarget;
    const slider = container.querySelector('.slider');
    const contentContainer = container.querySelector('.content-container');
    
    if (slider.classList.contains('hidden') && contentContainer.classList.contains('hidden')) {
        slider.classList.remove('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        slider.classList.add('hidden');
        contentContainer.classList.add('hidden');
    }
}

function toggleContent(event) {
    const container = event.currentTarget;
    const slider = container.querySelector('.slider');
    const contentContainer = container.querySelector('.content-container');

    if (slider.classList.contains('hidden') && contentContainer.classList.contains('hidden')) {
        slider.classList.remove('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        slider.classList.add('hidden');
        contentContainer.classList.add('hidden');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.container1').forEach(container => {
        const contents = container.querySelectorAll('.content');
        const totalContents = contents.length;
        let currentIndex = 1;

        function showContent(index) {
            contents.forEach(content => {
                content.classList.add('hidden');
            });

            const currentContent = container.querySelector(`.content[data-index="${index}"]`);
            if (currentContent) {
                currentContent.classList.remove('hidden');
            }
        }

        function updatePageNumber() {
            const pageNumber = container.querySelector('.page-number');
            pageNumber.textContent = `${currentIndex} of ${totalContents}`;
        }

        function showPreviousContent(event) {
            event.stopPropagation();
            currentIndex = (currentIndex === 1) ? totalContents : currentIndex - 1;
            showContent(currentIndex);
            updatePageNumber();
        }

        function showNextContent(event) {
            event.stopPropagation();
            currentIndex = (currentIndex === totalContents) ? 1 : currentIndex + 1;
            showContent(currentIndex);
            updatePageNumber();
        }

        container.querySelector('.slider-prev').addEventListener('click', showPreviousContent);
        container.querySelector('.slider-next').addEventListener('click', showNextContent);

        showContent(currentIndex);
        updatePageNumber();
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menuBar = document.getElementById("menuBar");
    const overlay = document.getElementById("overlay");
    const closeButton = document.getElementById("closeButton");

        menuButton.addEventListener("click", function() {
        menuBar.classList.toggle("menuClosed");
        menuBar.classList.toggle("menuOpen");
        overlay.classList.toggle("overlayVisible");
    });

    closeButton.addEventListener("click", function() {
        menuBar.classList.remove("menuOpen");
        menuBar.classList.add("menuClosed");
        overlay.classList.remove("overlayVisible");
    });
});












document.addEventListener("DOMContentLoaded", function () {
    const zoomSlider = document.getElementById("zoomSlider");
    const zoomableImages = document.querySelectorAll(".zoomable");

    zoomSlider.addEventListener("input", function () {
        const width = zoomSlider.value + '%';
        zoomableImages.forEach(img => {
            img.style.width = width;
        });
    });
});

    
