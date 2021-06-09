// async function myFunc(){
//   const promise=new Promise((resolve,reject)=>{
//     setTimeout(()=>resolve('Hello'),1000);
//   });

//   const error=false;

//   if(!error){
//     const res=await promise; 
//     // Wait until promise is resolved
//     return res;
//   }else{
//     await Promise.reject(new Error('Something went wrong'));
//   }
  
// }

// myFunc()
//   .then(res=>console.log(res))
//   .catch(err=>console.log(err));


async function getUsers(){
  const response=await fetch('https://jsonplaceholder.typicode.com/users');

  const data= await response.json();

  return data;
}


getUsers().then(data=>console.log(data));