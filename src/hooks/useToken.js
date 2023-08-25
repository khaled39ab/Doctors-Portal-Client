import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const email = user?.email;
        const currentUser = { email: email }

        if (email) {
            fetch(`http://localhost:4000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'Application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data.accessToken);
                    const accessToken = data.accessToken;
                    localStorage.setItem('accessToken', accessToken)
                    setToken(accessToken)
                })
        }
    }, [user]);

    return { token };
};


export default useToken;