const blob = document.getElementById('blob');

window.onpointermove = event => {
    const { clientX, clientY } = event;

    document.getElementById('blob').animate({
        left: `${clientX}px`,
        top:  `${clientY}px`
    }, {duration: 3000, fill: 'forwards'})
}