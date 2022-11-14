import axios from "axios";
import {useEffect, useState} from "react";
import "./Cripto.css"

export const CriptoApp = () => {
    const [getCripto, setGetCripto] = useState('');

    const URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false";

    const cripto = async () => {
        try{
            const rta = await axios.get(URL);
            setGetCripto(rta.data);
        }
        catch(error){
            console.error(error);
        }
    }

    useEffect(() => {
        cripto()
    }, []);

    return (
        <div className="cripto__container">
            <ul>
                {!getCripto ? 'Cargando cripto datos :) ' : getCripto.map((data)=>
                <div className = 'criptos'>
                    <li>
                        <img src={data.image} alt={data.name} />
                        <li><span>{data.name} ({data.symbol})</span></li>
                        <li><span>${data.current_price}</span></li>
                        <li><span>MCR: {data.market_cap_rank}</span></li>
                        <li><span>MC: {data.market_cap}</span></li>
                    </li>
                </div>
                )}
            </ul>
        </div>
    )
}