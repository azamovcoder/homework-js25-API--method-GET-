console.log("JS");
const API__URL = "https://dummyjson.com/users";
let loading = document.querySelector(".loading");
async function fetchData(URL) {
  const data = await fetch(URL, {
    method: "GET",
  });
  data
    .json()
    .then((res) => createUser(res))
    .catch((err) => console.log(err))
    .finally((loading.style.display = "none"));
}

fetchData(API__URL);

function createUser(data) {
  console.log(data.users);
  let users = "";
  data.users.forEach((user) => {
    users += `
       <div class="user__card">
              <img src="${user.image}" alt="">
              <h4>Full name:  ${user.firstName} ${user.lastName} , ${user.maidenName}</h4>
              <p><span>Gender: </span> ${user.gender}</p>
              <div class = "age"> 
                <p><span> Birth-Date :</span>${user.birthDate}</p>
                <p><span> Age :</span>${user.age}</p>
              </div>
              <div class = "information">
              <p><span>Weight: </span>${user.weight}</p>
              <p><span>Height: </span>${user.height} </p>
              <p><span>BloodGroup: </span>${user.bloodGroup} </p>
              <p><span>EyeColor: </span>${user.eyeColor}</p>
              </div>
              <p class ="university"><span>University: </span>${user.university}</p>
              <p><span>Address:</span> ${user.company.address.address} ${user.company.address.city}</p>


          </div>
      `;
  });
  document.querySelector(".wrapper").innerHTML = users;
}

function createLoadingItem(count) {
  let loadingItems = "";
  for (let i = 0; i < count; i++) {
    loadingItems += `
    <div class="loading__item">
      <div class="loading__img bg__animation"></div>
      <div class="loading__title bg__animation"></div>
      <div class="loading__title bg__animation"></div>
    </div>

    `;
  }

  loading.innerHTML = loadingItems;
}

createLoadingItem(8);
