const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("usernameInput");
const profileDiv = document.getElementById("profile");
const repoDiv = document.getElementById("repos");
const loading = document.getElementById("loading");
const errorText = document.getElementById("error");

searchBtn.addEventListener("click", () => {
  const username = input.value.trim();
  if (username !== "") {
    fetchUser(username);
  }
});

async function fetchUser(username) {
  profileDiv.innerHTML = "";
  repoDiv.innerHTML = "";
  errorText.innerText = "";
  loading.style.display = "block";

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (response.status === 404) {
      loading.style.display = "none";
      errorText.innerText = "User Not Found";
      return;
    }

    const user = await response.json();
    displayProfile(user);

    fetchRepos(user.repos_url);

  } catch (error) {
    errorText.innerText = "Something went wrong";
  } finally {
    loading.style.display = "none";
  }
}

async function fetchRepos(url) {
  const response = await fetch(url);
  const repos = await response.json();

  const topRepos = repos.slice(0, 5);

  let repoHTML = `<div class="repo-list"><h3>Top Repositories</h3><ul>`;

  topRepos.forEach(repo => {
    repoHTML += `
      <li>
        <a href="${repo.html_url}" target="_blank">
          ${repo.name}
        </a>
      </li>
    `;
  });

  repoHTML += "</ul></div>";
  repoDiv.innerHTML = repoHTML;
}

function displayProfile(user) {
  const joinDate = new Date(user.created_at).toDateString();

  profileDiv.innerHTML = `
    <div class="profile-card">
      <img src="${user.avatar_url}" />
      <h2>${user.name || "No Name"}</h2>
      <p>${user.bio || "No bio available"}</p>
      <p>Joined: ${joinDate}</p>
      <a href="${user.html_url}" target="_blank">Visit GitHub</a>
    </div>
  `;
}
