class EasyHTTP{

  // GET Request
  async get(url){
    
      const response= await fetch(url);

      const data= await response.json();

      return data;
    
  }

 

  // Make HTTP POST Req

  async post(url,data){
      const response= await fetch(url,{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
      });
      
      const data1 = await response.json();

      return data1;
    
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




