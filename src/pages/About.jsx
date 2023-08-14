/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useNavigation } from "react-router-dom"



export function About() {
    const userData = useLoaderData()
    const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <h1>Loading data...</h1>
    }
    // console.log(userData);

  return (
    <div className="my-4">
        <h1 className="text-2xl font-extralight my-4 border-l-4 pl-2 border-red-500">this is About page</h1>
        {userData.map((item)=>(
            <p key={item.id} className="italic font-bold">{item.title}</p>
        ))}
    </div>
  )
}


export async function dataLoader(){
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const user = await res.json()

    return user
}