import { useEffect, useState } from "react";

const useToken = userEmail => {
    const [token, setToken] = useState('');
    console.log(userEmail);

    useEffect(() => {
        const email = userEmail?.email;

        if (email) {
            fetch(`http://localhost:4000/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        const token = data.accessToken;
                        localStorage.setItem('accessToken', token)
                        setToken(token)
                    };
                })
        }
    }, [userEmail]);

    return { token };
};


export default useToken;
