import { useEffect, useState } from 'react';
import { api } from '../../services/api';


export default function Tattoo(props) {

    const [tattoo, setTattoo] = useState({});

    useEffect(() => { //useEffect nao funciona sempre
        const axiosGet = async () => {
            let response = await (api.get(`tattoos/${props.match.params.id}`)).data[0];
            setTattoo(response);
        }
        axiosGet();
    }, []);

    console.log(tattoo);

    // tirar o console.log e terminar a página das tatuagens mais tarde
    return(
        <div>
            <h3>{tattoo.description}</h3>
            {
                tattoo.tags.map((tag, index)=> {
                    return <p key={index}>{tag}</p>
                })
            }




        </div>
    )
}