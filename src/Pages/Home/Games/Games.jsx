import axios from "axios";
import { useEffect, useState } from "react";
import GamesCard from "./GamesCard/GamesCard";


const Games = () => {

    const [games,setGames]=useState()
    // console.log(games);

    useEffect(()=>{
        axios.get("https://www.cheapshark.com/api/1.0/deals?storeID=1")
        .then(res=>{
            setGames(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])

    return (
        <div>
            {
                games?.map(game=><GamesCard key={game.gameID} game={game}></GamesCard>)
            }
        </div>
    );
};

export default Games;