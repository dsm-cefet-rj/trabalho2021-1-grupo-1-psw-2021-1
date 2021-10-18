import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export default function Tattoo(props) {

    const [tattoo, setTattoo] = useState({});

    useEffect( async () => {
        setTattoo(await (await api.get(`tattoos/${props.match.params.id}`)).data[0]);
    }, []);

    console.log(tattoo);

    // tirar o console.log e terminar a página das tatuagens mais tarde
    return(
        <div>
            <h3>{tattoo.description}</h3>




        </div>
    )
}