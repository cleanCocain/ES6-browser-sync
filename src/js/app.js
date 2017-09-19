import Test from './test';
import Join from './join';

const title = "JavaScript Browserify with Browser-Sync";
let count = [];

let test = new Test("Dilakshan", "100");
let array = [];
array = test.returnArr();

for (let i = 0; i < array.length; i++) {
  count[i] = (array[i]);
}


document.getElementById("title").innerHTML = title;
document.getElementById("name").innerHTML = test.myName();
document.getElementById("id").innerHTML = test.myId();
document.getElementById("arr").innerHTML = `Your name is ${count[0]} and Your id is "${count[1]}"`;

//static object
var newTest = Test.defaultPara();

//static test case
// document.getElementById("test").innerHTML = newTest.para;

// const url = "http://localhost:1337/user";
// fetch(url,{
//     method: 'get'
// })
// .then(data => data.json())
// .then(users => {
// 	console.log(users);
//   let html = `
//    <thead>
//   <tr>
//   <th>ID</th>
//   <th>Name</th>
//   <th>&nbsp&nbsp&nbspCountry</th>
//   <th>Email</th>
//   </tr><br>
// </thead>`;
//   let count =0;

//   users.forEach(user => html += `

//    <tbody>
//    <tr>
//    <td>${user.id}</td>
//    <td>&nbsp&nbsp&nbsp&nbsp&nbsp${user.name}</td>
//    <td>&nbsp&nbsp&nbsp${user.country}</td>
//    <td>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp${user.email}</td>
//    </tr>
//    </tbody>`);

//   document.getElementById("user").innerHTML = html;

// })
// .catch(e =>  console.log(e)
// );
