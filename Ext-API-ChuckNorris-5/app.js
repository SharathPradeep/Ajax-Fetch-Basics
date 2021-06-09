document.querySelector('.get-jokes').addEventListener('click',loadJokes);


// loadJokes func

function loadJokes(e){

  const xhr=new XMLHttpRequest();

  const number=document.getElementById('number').value;

  xhr.open("GET",`http://api.icndb.com/jokes/random/${number}`,true);

  xhr.onload=function(){
    if(xhr.status==200){
      const response=JSON.parse(xhr.responseText);

      let output='';

      if(response.type==='success'){
        response.value.forEach(function(current){
          output+=`<li>${current.joke}</li>`;
        })
      }else{
        output+='<li>Something went Wrong</li>';
      }

      
      const ul=document.querySelector('.jokes');
      ul.innerHTML=output;
    }
    
  };

  xhr.send();


  e.preventDefault();
}