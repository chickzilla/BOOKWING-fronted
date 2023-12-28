const BackendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

export default async function Register({Email,password} : {Email : string,password : string}){
    const response = await fetch(`${BackendUrl}/auth/signup` , {
        method : "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify({
            email : Email,
            password : password
        })
    });

    if(!response.ok){
        throw new Error ("รักพ่อ ร.9")
        
    }
    return await response.json();
}