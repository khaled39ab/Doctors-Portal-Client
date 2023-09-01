import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email }
        // console.log(user?.email);

        if (email) {
            fetch(`http://localhost:4000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    const token = data.token;
                    if (token) {
                        localStorage.setItem('accessToken', token)
                        setToken(token)
                    };
                })
        }
    }, [user]);

    return { token };
};


export default useToken;
