
        const slider = document.querySelector(".slider")

        let widthSlide = 0

        function passarSlide() {
            if(widthSlide == -300) {
            widthSlide = 0
            }
            slider.style.marginLeft = `${widthSlide}vw`
        }

        setInterval(() => {
            widthSlide += -100
            passarSlide()
        }, 3000);

        