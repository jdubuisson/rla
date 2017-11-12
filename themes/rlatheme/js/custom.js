window.onload = function () {
    var $grid = $('.masonry-grid').isotope({
        itemSelector: '.masonry-grid-item',
        stamp: '.masonry-stamp',
        masonry: {
            columnWidth: 20
        }
    });

    $grid.on('click', '.masonry-grid-item', function () {
        // change size of item via class
        $grid.find('.masonry-grid-item').removeClass('masonry-grid-item--big');
        $(this).toggleClass('masonry-grid-item--big');
        // trigger layout
        $grid.isotope();
    });
    var $allButtons = $('.filter-button-group button');
    $('.filter-button-group').on('click', 'button', function () {
        $allButtons.removeClass('active');
        $(this).toggleClass('active');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    });
}