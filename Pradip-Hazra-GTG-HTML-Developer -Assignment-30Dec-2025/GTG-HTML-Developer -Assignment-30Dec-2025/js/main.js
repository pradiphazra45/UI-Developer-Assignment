$(document).ready(function () {



    var main = $("#productMainSlider");

    main.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: false,
        smartSpeed: 400
    });

    // Thumbnail click → slide main image
    $("#productThumbs .thumb").each(function (index) {
        $(this).on("click", function () {
            main.trigger("to.owl.carousel", [index, 300, true]);

            $("#productThumbs .thumb").removeClass("active");
            $(this).addClass("active");
        });
    });

    // Update active thumbnail when sliding
    main.on("changed.owl.carousel", function (event) {
        var index = event.item.index;

        $("#productThumbs .thumb").removeClass("active");
        $("#productThumbs .thumb").eq(index).addClass("active");
    });

    const counters = document.querySelectorAll('.counter-number');
    let started = false;

    const startCounter = () => {
        counters.forEach(counter => {
            const target = +counter.dataset.target;
            let count = 0;

            const update = () => {
                count++;
                counter.textContent = count + '%';
                if (count < target) {
                    requestAnimationFrame(update);
                }
            };

            update();
        });
    };

    const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && !started) {
            started = true;
            startCounter();
        }
    }, {
        threshold: 0.4
    });

    observer.observe(document.getElementById('counterSection'));
    ///add class header on scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 80) {
            $('.navbar ').addClass('bg-white');
        } else {
            $('.navbar').removeClass('bg-white');
        }
    });
    ///click header menu close
    $(".close-menu").click(function () {
        $('.navbar-collapse').removeClass("show"); // Adds the 'highlighted' class to the clicked element
    })
    //radion button check show subscription
    $('input[name="option"]').on('change', function () {
        if (this.value === 'single-subscription') {
            $('#double-subscription').stop(true, true).slideUp(300);
            $('#single-subscription').stop(true, true).slideDown(300);
        }
        else if (this.value === 'double-subscription') {
            $('#single-subscription').stop(true, true).slideUp(300);
            $('#double-subscription').stop(true, true).slideDown(300);
        }
    });
});
