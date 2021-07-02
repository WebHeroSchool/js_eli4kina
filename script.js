
let userName = getUserName();
let githubAPIURL = 'https://api.github.com/users/';

if(userName !== undefined && userName.trim() != '') {

  let profileName = document.getElementById('name');
  //Почему тут profileName равен null?
  console.log(profileName);
  let avatar = document.getElementById('avatar');
  console.log(avatar);
  let profileDescription = document.getElementById('description');
  console.log(profileDescription);
  let profileLink = document.getElementById('link');
  console.log(profileLink);

 fetch(githubAPIURL + userName)
  .then(res => res.json())
  .then(json => {
    console.log('Данные из json');
    console.log(json.avatar_url);
    console.log(json.name);
    console.log(json.bio);
    console.log(json.html_url)

    profileName.innerHTML = (json.name !== null)? json.name : "Нет данных";
    profileDescription.innerHTML =  (json.bio !== null) ? json.bio : "Нет данных";
    profileLink.href = json.html_url;
    avatar.src = json.avatar_url;
  })
  .catch(err => console.log('Информация о пользователе не доступна' + err));
} else {
  alert('Введите не пустое имя');
} 

function getUserName() {
  let searchURL = window.location.search;
  let parseURL = searchURL.split('=');
  //console.log('userName = ' + parseURL[1]);
  return parseURL[1];
 }
  