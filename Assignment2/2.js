function changeBackgroundColor(sectionId, color) {
    document.getElementById(sectionId).style.backgroundColor = color;
}

function changeBackgroundGradient(sectionId, color1, color2) {
    document.getElementById(sectionId).style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

function changeBackgroundImage(sectionId, imageUrl) {
    const section = document.getElementById(sectionId);
    section.style.backgroundImage = `url(${imageUrl})`;
    section.style.backgroundSize = 'cover';
    section.style.backgroundRepeat = 'no-repeat';
    section.style.backgroundPosition = 'center';
}
