function appendImageElem(keyword, index) {
    const imgElem = document.createElement('img');
    imgElem.src = `https://source.unsplash.com/400x255/?${keyword}&sig=${index}`

    const galleryElem = document.querySelector('.gallery')
    galleryElem.appendChild(imgElem)
}

function removePhotos() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = ''
}

function loading(type) {
    const modalSpinerElem = document.querySelector('.modal-spiner');
    modalSpinerElem.setAttribute('style', `display : ${type}`)
}

function searchPhotos(event) {
    if (event.key === 'Enter') {
        loading('block')
        removePhotos();
        for (let i = 0; i < 12; i++) {
            appendImageElem(event.target.value, i);
        }
        setTimeout(() => {
            loading('none')
        }, 1000)
    }
}


(() => { // Immediately-Invoked Function Expression, or IIFE for short.
    loading('none')
    const inputElem = document.getElementById('search');
    inputElem.addEventListener('keydown', searchPhotos);
})();