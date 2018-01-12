window.onload = function () {
    /* active status on click : data-toggle for tabs*/
    function toogleActive(event) {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    }

    $('.feature-items').on('click', '.feature', toogleActive);

    /* function to toggle a class on a masonry item */
    function toggleBigClassForOneItem(event) {
        // change size of item via class
        //only one can be big at a time
        var $itemIsBig = $(this).hasClass('masonry-grid-item--big');
        event.data.grid.find('.masonry-grid-item').removeClass('masonry-grid-item--big');
        if (!$itemIsBig) {
            $(this).addClass('masonry-grid-item--big');
        }
        // trigger layout
        event.data.grid.isotope();
    }

    /* isotope/masonry for credentials */
//grid init
    var $grid = $('.masonry-grid-credentials').isotope({
        itemSelector: '.masonry-grid-item',
        stamp: '.masonry-stamp',
        masonry: {
            columnWidth: 2
        }
    });

//on click behavior
    $grid.on('click', '.masonry-grid-item', {grid: $grid}, toggleBigClassForOneItem);

//filters
    var $allButtons = $('.masonry-grid-credentials .filter-button-group button');
    $('.masonry-grid-credentials .filter-button-group').on('click', 'button', function () {
        $allButtons.removeClass('active');
        $(this).toggleClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });

    /* isotope/masonry for faq */
//grid init
    var $gridFaq = $('.masonry-grid-faq').isotope({
        itemSelector: '.masonry-grid-item'
    });

//on click behavior
    $gridFaq.on('click', '.masonry-grid-item', {grid: $gridFaq}, toggleBigClassForOneItem);
}