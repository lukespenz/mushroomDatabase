const navAddButton = document.getElementById('addMushroom')
const viewButton = document.getElementById('viewMushrooms')
const addButton = document.getElementById('addButton')

const mushroomContainer = document.querySelector('#mushroom-container')

const baseURL = `http://localhost:5503/api/public` //?
const loginPage = baseURL + `/index`
const addPage = `http://localhost:5503/api/public/addMushroom`
const viewPage = baseURL + `http://localhost:5503/api/public/viewMushrooms`

const errCallback = err => console.log(err.response.data)
const mushroomCallback = ({ data : mushrooms }) => displayMushrooms(mushrooms)

const navAdd = () => {
    console.log('clicked')
    window.location.href='./addMushroom.html'
} //changes to add mushroom page through nav bar

const viewMushrooms = () => {
    window.location.href='./viewMushrooms.html'
    displayMushrooms();
    console.log('clicked')
} //changes to view mushrooms page through nav bar

const addMushroom = (body) => axios.post(`${viewPage}`, body).then(submitHandler).catch(errCallback)
const deleteMushroom = (id) => axios.delete(`${viewPage}/${id}`).then(submitHandler).catch(errCallback)

const submitHandler = () => {
    const form = document.getElementById('add-mushroom-form')
    form.addEventListener('submit', submitHandler)
    
    let photo = document.querySelector('#photo')
    let name = document.querySelector('#name')
    let location = document.querySelector('#location')
    let date = document.querySelector('#date')
    let who = document.querySelector('#who')
    let altitude = document.querySelector('#altitude')
    let habitat = document.querySelector('#habitat')
    let substrate = document.querySelector('#substrate')
    let sporePrint = document.querySelector('#sporePrint')
    let edible = document.querySelector('#edible')
    let psychoactive = document.querySelector('#psychoactive')
    let notes = document.querySelector('#notes')
    
    let mushroomInfo = {
        photo: photo.value,
        name: name.value,
        location: location.value,
        date: date.value,
        who: who.value,
        altitude: altitude.value,
        habitat: habitat.value,
        substrate: substrate.value,
        sporePrint: sporePrint.value,
        edible: edible.value,
        psychoactive: psychoactive.value,
        notes: notes.value
    }
    
    axios.post(viewPage, mushroomInfo).then(() => {
        window.location.replace(viewPage)
    })
}


const displayMushrooms = () => {
console.log('work!')
    axios.get(addPage)
    .then((res) => {
        for(let i = 0; i < res.data.length; i++){
            createMushroomCard(res.data[i])
            console.log(res.data)
        }

    })
        //sequelize...
        //.innerHTML = ``
       
        }

const createMushroomCard = (mushroom) => {

        const mushroomCard = document.createElement('div')
        mushroomCard.classList.add('mushroom-card')
    
        mushroomCard.innerHTML = `
        <img alt='mushroom-photo' src=${mushroom.photo} class="mushroom-photo"/>
        <p class="mushroomname">${mushroom.name}</p>
        <p class="mushroom-location">${mushroom.location}</p>
        <p class="mushroom-date">${mushroom.date}</p>
        <button onclick="deletemushroom(${mushroom.id})">delete</button>
        `
        mushroomContainer.appendChild(mushroomCard)
    }
        
        //addButton.addEventListener('submit', addMushroom) //adds mushroom when clicked
        viewButton.addEventListener('click', viewMushrooms) //footer button changes webpage
        navAddButton.addEventListener('click', navAdd) //footer button changes webpage
        

displayMushrooms();