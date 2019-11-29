$(document).ready(function(){
    $('.video-wr').on('click', function() {
        $(this).replaceWith($(this).data('video'))
    })
});