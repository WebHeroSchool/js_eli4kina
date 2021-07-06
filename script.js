
let userName = getUserName();
let githubAPIURL = 'https://api.github.com/users/';

if(userName !== undefined && userName.trim() != '') {
  let avatar = document.getElementById('avatar');
  let profileDescription = document.getElementById('description');
  let profileLink = document.getElementById('link');

  getUser(avatar, profileDescription, profileLink);
} else {
  alert('Введите не пустое имя');
} 

function getUserName() {
  let searchURL = window.location.search;
  let parseURL = searchURL.split('=');

  return parseURL[1];
 }

function getUser (avatar, profileDescription, profileLink) {
  const load = document.getElementById('1');
  const loading = new Promise((resolve, redject) => {
    setTimeout(() => {
      resolve(load.classList.add('not_active'));
      redject(console.log('Что-то пошло не так'))
    }, 3000);
  });


  Promise.all ([loading])
  .then (([loadPage]) => fetch(githubAPIURL + userName)) 
  .then(res =>  res.json())
  .then(json => {

    if(json.message != undefined) {
      console.log(json.message);
      profileDescription.innerHTML =  `Пользователя с ником ${userName} не существует`;
    } else {
      profileDescription.innerHTML =  (json.bio != null) ? json.bio : "Нет данных";
      profileLink.href = json.html_url;
      profileLink.innerText = (json.name != null)? json.name : "Нет данных";
      avatar.src = json.avatar_url;
    }

  })
  .catch(err => console.log('Информация о пользователе не доступна ' + err));
 }
  