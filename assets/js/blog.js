
let j = 0;
let m = 1;
let userNameSpanBlog = document.querySelector('#user-name_');
let userTitleSpanBlog = document.querySelector('#user-title_');
let userContentSpanBlog = document.querySelector('#user-content_'  );
let myDivs = "";
// const themeButtonEl = $(`#theme-btn`);
isDark = false;
themeButtonEl.on("click", ()=>{
    console.log(`Theme was toggled`)
    isDark = !isDark//Toggle theme...
    console.log(`Theme is now ${isDark}`)
    const theme = { 'background-color': isDark ? '#d9e9e8' : '#1a1a1a', color: isDark ? '#1a1a1a' : '#d9e9e8'  
  }
  $('body').css(theme)
  })


  
function renderElements(){
        var data = JSON.parse(localStorage.getItem('get_obj')) || []

        for(k=0;k<data.length;k++){
            //Set the myDivs object for the HTML to populate
                myDivs = (` <div class="user-title" >
            <label for="user-title">Title</label>
                <input type="text" name="user-title" id="user-title_${+k}" />
            </div> 
            <div class="user-content" >
            <label for="user-content">Content</label>
                <input type="text" name="user-content" id="user-content_${+k}" />
            </div> 
            <div class="user-name" >
            <label for="user-name">Username</label>
                <input type="text" name="user-name" id="user-name_${+k}" /> `)
                //Enter the values for each field
            userNameSpanBlog.value  += data[k].username
            userTitleSpanBlog.value += data[k].title
            userContentSpanBlog.value += data[k].content
            if(k< (data.length - 1)){
                //Append the myDivs object 
            $(".container").append(myDivs)
            //Select the next objects in the column
            userNameSpanBlog = document.querySelector(`#user-name_${+k}`);
            userTitleSpanBlog = document.querySelector(`#user-title_${+k}`);
            userContentSpanBlog = document.querySelector(`#user-content_${+k}`);    
            }
        }
}


// function myFunction() {
//     var data = JSON.parse(localStorage.getItem('get_obj')) || []

//     var result = "";
//     let table = document.getElementById('data');



    
//     data.forEach(function (item) {
//         result = [
//         userNameSpanBlog.value  += item.username ,
//         userTitleSpanBlog.value += item.title,
//         userContentSpanBlog.value += item.content
//         ]
//     })
//     // result += "<input>" + userNameSpanBlog.value +  "<input>" +  userTitleSpanBlog.value + "<input>"  + userContentSpanBlog.value ;

//     result += table + result ;

//     document.getElementById("data").innerHTML = result;
//   }
// function displayTable() {
    
//     var table = "<table border=1>";
    
//     table += `<tr>
//             <th>Username</th>
//             <th>Title</th>
//             <th>Content</th>
//           </tr>`;


// // now loop through students
// // show their name and marks
// var tr = "";
// var data = JSON.parse(localStorage.getItem('get_obj')) || []
// for(let i = 0; i < data.length; i++) {
//   tr += "<tr>";
//   tr += `<td>${data[i].username}</td>`;
//   tr += `<td>${data[i].title}</td>`;
//   tr += `<td>${data[i].content}</td>`;
  
//   tr += "</tr>"
// }
// table += tr + "</table>";
// document.getElementById('data').innerHTML=table


// }
// displayTable()

// myFunction()
renderElements()