console.log('runn');

const addButton = document.getElementById('addMushroom')
const viewButton = document.getElementById('viewMushrooms')


const addMushroom = () => {
    console.log('clicked')
    window.location.replace(addPage)
}

addButton.addEventListener('click', addMushroom)

const viewMushrooms = () => {
    console.log('clicked')
    window.location.replace(viewPage)
}

viewButton.addEventListener('click', viewMushrooms)

const loginPage = `/public/index.html`
const addPage = `/public/addMushroom.html`
const viewPage =`/public/viewMushrooms.html`