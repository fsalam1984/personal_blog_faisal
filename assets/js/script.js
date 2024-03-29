const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');
const contentInput = document.querySelector('#content');
const submitButton = document.querySelector('#submit');
const msgDiv = document.querySelector('#msg');
const userNameSpan = document.querySelector('#user-name');
const userTitleSpan = document.querySelector('#user-title');
const userContentSpan = document.querySelector('#user-content');
// renderLastRegistered();

const themeButtonEl = $(`#theme-btn`);
// light theme state
let isDark = false;

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute('class', type);
}

function saveLastRegistered() {    
      if (!username || !title || !content) {
        return;
      }
      
    }
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
//clear the local storage first
  // localStorage.clear()
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;
  let obj = { 
    username: username, 
    title: title, 
    content: content
  
  };
  //Set variable to 'get_obj' or empty array
  let aObj = JSON.parse(localStorage.getItem('get_obj')) || []
  //Push the aObj to obj array variable
  aObj.push(obj)
  //Set the localStorage as a JSON String
  localStorage.setItem('get_obj', JSON.stringify(aObj));
  
  

  if (username === '') {
    displayMessage('error', 'Username cannot be blank');
  } else if (title === '') {
    displayMessage('error', 'Title cannot be blank'); 
  } else if (content === '') {
    displayMessage('error', 'Content cannot be blank');  

   
  
  } else {
    displayMessage('success', 'Registered successfully');
    window.open("blog.html");

  }
//   renderLastRegistered()
}



);

themeButtonEl.on("click", ()=>{
  event.preventDefault()
  console.log(`Theme was toggled`)
  isDark = !isDark//Toggle theme...
  console.log(`Theme is now ${isDark}`)
  const theme = { 'background-color': isDark ? '#d9e9e8' : '#1a1a1a', color: isDark ? '#1a1a1a' : '#d9e9e8'  
}
$('body').css(theme)
}
)


saveLastRegistered()
// renderLastRegistered() 