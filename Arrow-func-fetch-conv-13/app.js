document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJSON);


document.getElementById('button3').addEventListener('click',getApiData);


// Get text file
function getText(){
  fetch('test.txt')
    .then(res=> res.text())
    .then(data=>document.getElementById('output').innerHTML=data)
    .catch(err=>console.log(err));
}

// Get JSON file
function getJSON(){
  fetch('posts.json')
    .then(res=>res.json())
    .then(data=> {
      let output='';
      data.forEach(current=> output+=`<li>${current.body}</li>`)
      document.getElementById('output').innerHTML=output;
    })
    .catch(err=>console.log(err));
}


// Get from external api

function getApiData(){
  fetch('https://api.github.com/users')
    .then(res=> res.json())
    .then(data=> {
      let output='';
      data.forEach(current=>output+=`<li>${current.login}</li>`)
      document.getElementById('output').innerHTML=output;
    })
    .catch(err=>console.log(err));
}