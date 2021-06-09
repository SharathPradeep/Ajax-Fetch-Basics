document.getElementById('button').addEventListener('click',loadData);

function loadData(){
  
  // create XHR object
  const xhr = new XMLHttpRequest();
  
  // OPEN
  xhr.open('GET','data.txt',true);

  // Optional method-used for spinners/loaders
  xhr.onprogress=function(){
    console.log('READYSTATE: ',xhr.readyState);
  }

  // 1st method
  xhr.onload=function(){
    console.log('READYSTATE: ',xhr.readyState);
    if(this.status===200){
      console.log(this.responseText);
      document.getElementById('output').innerHTML=`<h1>${xhr.responseText}</h1>`;
    }
  }


  // console.log('READYSTATE: ',xhr.readyState);


  //2nd method-old not recommended
  // xhr.onreadystatechange=function(){
  //   console.log('READYSTATE: ',xhr.readyState);
  //   if(this.status===200 && this.readyState===4){
  //     console.log(this.responseText);
  //   }  
  // } 

  xhr.onerror=function(){
      console.log('Request error...');
  }


  

  xhr.send();

  // HTTP Statuses
  // 200:OK
  // 403:Forbidden
  // 404:Not Found

  // readyState Values
    // 0: request not initialized 
    // 1: server connection established
    // 2: request received 
    // 3: processing request 
    // 4: request finished and response is ready
}