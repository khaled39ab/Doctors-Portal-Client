/* import { useState } from 'react';

const useSaveUser = (user) => {
    const [createdUser, setCreatedUser] = useState('');

    const { name, email } = user;
    const newUser = { name, email }

    fetch(`http://localhost:4000/users`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
        .then(res => res.json())
        .then(data => {
            setCreatedUser(email)
        });

    return {createdUser};
};

export default useSaveUser; */