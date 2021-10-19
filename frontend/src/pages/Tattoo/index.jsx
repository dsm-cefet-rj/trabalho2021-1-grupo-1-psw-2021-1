import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

export default function Tattoo(){

    let { id } = useParams();
    let [ tattoo, setTattoo ] = useState([]);

    useEffect(() => {
        const fetchTattoo = async () => {
            let { data } = await api.get(`tattoos/${id}`);
            setTattoo(data);
        }
        fetchTattoo();
        console.log(tattoo)
    }, []);

    return(
        <div>
        </div>
    )
}