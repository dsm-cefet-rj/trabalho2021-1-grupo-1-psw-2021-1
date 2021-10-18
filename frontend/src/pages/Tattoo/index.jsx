import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export default function Tattoo(props) {

    const [tattoo, setTattoo] = useState({});

    useEffect( async () => {
        setTattoo(await (await api.get(`tattoos/${props.match.params.id}`)).data[0]);
    }, []);

    console.log(tattoo);

    return(
        <div>
            <h1>{tattoo._id}</h1>



        </div>
    )
}