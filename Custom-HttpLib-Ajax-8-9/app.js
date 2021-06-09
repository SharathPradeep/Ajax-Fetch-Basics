const http=new easyHTTP();

// Get Posts

// http.get('https://jsonplaceholder.typicode.com/posts',function(error,posts){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(posts);
//   }
// });


// Get Single Posts

// http.get('https://jsonplaceholder.typicode.com/posts/1',function(error,posts){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(posts);
//   }
// });


// create data
// const data={
//   title:'Custom Post',
//   body:'This is a custom post'
// };

// Create posts using POST

// http.post('https://jsonplaceholder.typicode.com/posts',data,function(post){
//   console.log(post);
// });

// create update data
// const data1={
//   title:'New Post',
//   body:'This is a new post'
// };

// // Update Post-PUT
// http.put('https://jsonplaceholder.typicode.com/posts/1',data1,function(newpost){
//   console.log(newpost);
// });


// Delete
http.delete('https://jsonplaceholder.typicode.com/posts/1',function(deleted){
  console.log(deleted);
});
