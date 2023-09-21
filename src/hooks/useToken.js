import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email }
        

        if (email) {
            fetch(`https://doctors-portal-server-two-eta.vercel.app/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const token = data.token;
                    if (token) {
                        localStorage.setItem('accessToken', token)
                        setToken(token)
                    };
                })
        }
    }, [user]);

    return [token];
};


export default useToken;
