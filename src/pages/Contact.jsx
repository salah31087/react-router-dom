/* eslint-disable react-refresh/only-export-components */
import { useLoaderData, useNavigation } from "react-router-dom"




export function Contact() {
    const userData = useLoaderData()
    const navigation = useNavigation()

    if(navigation.state === "loading"){
        return <h1>Loading data...</h1>
    }

    return (
        <div>
            <div className="text-2xl font-extralight my-4 border-l-4 pl-2 border-red-500">this is Contact page</div>
            {userData.map((item) => (
                <p key={item.id} className="italic font-bold">{item.name}</p>
            ))}
        </div>
    )
}


export async function contactDataLoader() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await res.json()

    return response
}