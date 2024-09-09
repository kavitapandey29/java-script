const APIURL = "https://api.github.com/users/";

async function getUser(username) {
  try {
    const response = await fetch(APIURL + username);
    const data = await response.json();
    console.log(data);

    const card = `
      <div>
        <img src="${data.avatar_url}" />
        <h2>${data.name}</h2>
        <p>Username: ${data.login}</p>
        <p>Bio: ${data.bio}</p>
      </div>
      <div>
        <h1>Number of Repos: ${data.public_repos}</h1>
      </div>
      <div>
        <h1>Email: ${data.email}</h1>
      </div>
      <div>
        <h1>Followers: ${data.followers}</h1>
        <h1>Following: ${data.following}</h1>
      </div>
      <div>
        <h1>Location: ${data.location}</h1>
      </div>
      <div>
        <h1>Website: ${data.blog}</h1>
      </div>
      <div>
        <h1>Joined: ${data.created_at}</h1>
      </div>
    `;

    // Create a div element to hold the card
    const cardElement = document.createElement("div");
    cardElement.innerHTML = card;

    // Add the card to the page
    document.body.appendChild(cardElement);
  } catch (error) {
    console.error(error);
  }
}

getUser("kavitapandey29");

