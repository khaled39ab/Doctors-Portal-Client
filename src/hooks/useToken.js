import { useEffect, useState } from "react";

const useToken = user => {

    const [token, setToken] = useState('');

    useEffect(() => {
        console.log(user);
    }, [user]);

    return { token };
};

export default useToken;