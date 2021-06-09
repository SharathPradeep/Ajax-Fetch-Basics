document.getElementById('button1').addEventListener('click',getText);

document.getElementById('button2').addEventListener('click',getJSON);


document.getElementById('button3').addEventListener('click',getApiData);


// Get text file
function getText(){
  fetch('test.txt')
    .then(function(res){
      return res.text();
    })
    .then(function(data){
      document.getElementById('output').innerHTML=data;
    })
    .catch(function(err){
      console.log(err);
    });
}

// Get JSON file
function getJSON(){
  fetch('posts.json')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      let output='';
      data.forEach(function(current){
        output+=`<li>${current.body}</li>`;
      })
      document.getElementById('output').innerHTML=output;
    })
    .catch(function(err){
      console.log(err);
    });
}


// Get from external api

function getApiData(){
  fetch('https://api.github.com/users')
    .then(function(res){
      return res.json();
    })
    .then(function(data){
      let output='';
      data.forEach(function(current){
        output+=`<li>${current.login}</li>`;
      })
      document.getElementById('output').innerHTML=output;
    })
    .catch(function(err){
      console.log(err);
    });
}