class EasyHTTP{

  // GET Request
  get(url){
    return new Promise((resolve,reject)=>{
      fetch(url)
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

 

  // Make HTTP POST Req

  post(url,data){
    return new Promise((resolve,reject)=>{
      fetch(url,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }



  // Make a PUT req
  put(url,data){
    return new Promise((resolve,reject)=>{

      fetch(url,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>resolve(data))
      .catch(err=>reject(err));
    })
  } 
  // Make a DELETE req
  delete(url){
    return new Promise((resolve,reject)=>{

      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(()=>resolve('Deleted'))
      .catch(err=>reject(err));
    })
  } 
}




