import { useState } from "react";


export default function About(){
  const [userName,setUserName]= useState("John");
  const [userAge,setUserAge]= useState(24)
  const [userCity,setUserCity]= useState("indore");
  const [userLive,setUserLive]= useState(true);
  const [ count, setCount] = useState(0)

  let name = "smith";
  const changeName = () =>{
    name = "john smith";
    console.log(name)

    setUserName ("hello john smith")

    
  }
  const increment = () =>{
    setCount(count + 1)

  }

const decrement = () =>{
  setCount(count - 1)

}

  

  return (
  <>
    <h1>{userName}</h1>
    <h2>{userAge}</h2>
    <h2>{userCity}</h2>
    <h2>{userLive}</h2>
    <h2>{name}</h2>
    <button onClick={changeName}>Change</button>
    <button onClick={increment}>Change</button>
    <samp>{count}</samp>
    <button onClick={decrement}>Change</button>
  </>

  )

}
