console.log('This is my index.js');
// Below Data variable is an array of objects which contains information about the candidate
const data = [
    {
        name: 'Jack',
        age: 18,
        city: 'San Francisco',
        language: 'Python',
        framework: 'Django',
        image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
        name: 'Asad',
        age: 35,
        city: 'Gujranwala',
        language: 'Javascript',
        framework: 'React.js',
        image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
        name: 'Rohan Das',
        age: 25,
        city: 'Kolkata',
        language: 'PHP',
        framework: 'Laravel',
        image: "https://randomuser.me/api/portraits/men/77.jpg",
    },
    {
        name: 'John',
        age: 45,
        city: 'Los Angeles',
        language: 'Java',
        framework: 'Spring',
        image: "https://randomuser.me/api/portraits/men/78.jpg",
    },
    {
        name: 'Adam',
        age: 39,
        city: 'London',
        language: 'Rust',
        framework: 'Actix Web',
        image: "https://randomuser.me/api/portraits/men/79.jpg",
    }
]

// CV Iterator
function cvIterator(Profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<Profiles.length ?
            {value: Profiles[nextIndex++], done:false} :
            {done:true}
        }
    };
}

// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

const candidates = cvIterator(data)
nextCV();
function nextCV(){
    const currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
    image.innerHTML = `<img src = '${currentCandidate.image}'>`;

    profile.innerHTML = `<ul class="list-group">    
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} Years Old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Framework ${currentCandidate.framework}</li>
  </ul>` 
}
else{
    alert('End of Applications');
    window.location.reload();
}
}