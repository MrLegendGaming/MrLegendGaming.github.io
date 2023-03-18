let toTop = document.getElementById("back-to-top");


// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 512 || document.documentElement.scrollTop > 512) {
        toTop.animate({
            right: `25px`
        }, {duration: 200, fill: 'forwards'});
    } else {
        toTop.animate({
            right: `-100px`
        }, {duration: 200, fill: 'forwards'});
    }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}