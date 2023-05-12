// Write an asynchronous function that accepts a message string
//  and a delay time in milliseconds.
//  The function should log the message to the console after 
// the specified delay time.
const call = ()=>{
    console.log('the number you call is not available')
}
setTimeout(call,4000)
const message =()=>{
    console.log('call me back when you see my call')
}
message()
// You have an array of user IDs and a function getUserData(id) 
// that returns a Promise with user data when given a user ID.
//  Write an asynchronous function that fetches 
// and logs the data for each user ID one by one, in sequence.

async function getUserData(id){
  for(const x of id){
  
  try{
  let fetches = await getUserData(x)
  console.log(fetches)
 }
  catch(error){
    console.log({error})
  }
}
}
let id=[1,2,3,4,5,6];
getUserData(id)
      
// You have an asynchronous function performTask() that returns a Promise.
//  The Promise resolves if the task is successful and rejects if
//   there's an error. Write a function that calls performTask() and 
//   logs a custom success message if the task is successful,
//  and a custom error message if there's an error.
function performTask(){
    return new Promise((resolves,rejects)=>{
     const success = false
     if(success){
      setTimeout(()=>{
        resolves('task is successful')},5000)  
      
     }else{
        setTimeout(()=>{
            rejects('task not completed')},5000)
        
    }
    })   
}
function messageTask(){
    performTask()
    .then(()=>{
        console.log('I made it')
    })
    .catch(()=>{
        console.log('I will do it again')
    })
}
messageTask()