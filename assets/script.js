// reviws data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "Web Developer",
        img: "https://img.icons8.com/external-others-bzzricon-studio/512/external-business-business-others-bzzricon-studio-4.png",
        text: "Lorem Ipsum has been the industry's it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 2,
        name: "Martin High",
        job: "Cyber Security",
        img: "https://img.icons8.com/external-neolatte-zulfa-mahendra/512/external-user-online-study-neolatte-zulfa-mahendra.png",
        text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 3,
        name: "Lorencia Hill",
        job: "Python",
        img: "https://img.icons8.com/external-flat-zulfa-mahendra/512/external-employee-business-management-flat-zulfa-mahendra.png",
        text: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 4,
        name: "Julia Mcmurphy",
        job: "web Developer",
        img: "https://img.icons8.com/external-creatype-blue-field-colourcreatype/512/external-avatar-office-and-business-creatype-blue-field-colourcreatype.png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
]

// select items

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")


// set starting item
let currentItem = 0;

// load initial item
// anu gverdis restartisas rom pirvel riviuze gachndes
window.addEventListener('DOMContentLoaded', function(){
    showPerson()
})

// show person based on item 
function showPerson(){
    const item = reviews[currentItem]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job
    info.textContent = item.text
}

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++
    // isev tavidan rom daawyebinos imistvisaa
    // anu tu im shemtxvevashi davachert gilaks ro gadavides isev
    // mashin roca agaraa gadasasvleli daabrunebs tavidan
    // da dasvams pirvelze
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson();
})

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem < 0){
        // tu pirvelivedanve piriqit waviyvant slaids
        // mashin sul boloze gadaiyvans
        currentItem=reviews.length-1;
    }
    showPerson();
})

randomBtn.addEventListener('click', function(){
    currentItem = getRandomNumber()
    showPerson()
})

function getRandomNumber(){
    return Math.floor(Math.random() * reviews.length);
}
