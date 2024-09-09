var people = document.querySelector('.people');

var data = [
    { name: "puneeta", src: "https://images.unsplash.com/photo-1467632499275-7a693a761056?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "puneet", src: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVufGVufDB8fDB8fHww" },
    { name: "alex", src: "https://images.unsplash.com/photo-1496346236646-50e985b31ea4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVufGVufDB8fDB8fHww" },
    { name: "zyan", src: "https://plus.unsplash.com/premium_photo-1664015982598-283bcdc9cae8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVufGVufDB8fDB8fHww" },
    { name: "rishu", src: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1lbnxlbnwwfHwwfHx8MA%3D%3D" },
    { name: "richa", src: "https://images.unsplash.com/photo-1616847220575-31b062a4cd05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww" }
];

// Function to create person HTML
function createPersonHTML(person) {
    return `
        <div class="person">
            <div class="img">
                <img src="${person.src}">
            </div>
            <h3>${person.name}</h3>
        </div>`;
}

// Function to render people based on the data
function renderPeople(peopleData) {
    people.innerHTML = peopleData.map(createPersonHTML).join('');
}

// Initial rendering of all people
renderPeople(data);

// Input event listener for filtering people
var input = document.querySelector("input");
input.addEventListener("input", function() {
    var searchTerm = input.value.toLowerCase();
    var matchingData = data.filter(function(elem) {
        return elem.name.toLowerCase().startsWith(searchTerm);
    });
    renderPeople(matchingData);
});