import axios from "axios";


//export all functions under one constant name loginService so that we can use it in other file as loginService.<functionName>
// export const userService = {
//     login
// }

// function to perform login which return user from db if entered correct credentials
// export function login(username,password){
//     console.log("cred",username,password)
//     let users= await axios.get(`http://localhost:4000/users?name=${username}`);
//     const user=users.data.find( x => x.password === password );
//     console.log(user);
//     if(!user)
//         return null;
//     return user;



//     fetch(`http://localhost:4000/users?name=${username}`)
// }