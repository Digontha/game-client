import axios from "axios";
import { useEffect, useState } from "react";
import GamesCard from "./GamesCard/GamesCard";


const Games = () => {

    const [games, setGames] = useState()
    // console.log(games);
    const [pages, setPages] = useState(1)
    console.log(pages);
    const Plus = () => {
        if (pages < 3) {
            setPages(pages + 1);
        }
    }
    
    const Minus = () => {
        if (pages > 1) {
            setPages(pages - 1);
        }
    }
    useEffect(() => {
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=${pages}`)
            .then(res => {
                setGames(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [pages])

    return (
        <div>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 px-5 mt-10">
                {
                    games?.map(game => <GamesCard key={game.gameID} game={game}></GamesCard>)
                }
            </div>

            <div className="join grid grid-cols-2 text-white w-[30%] mx-auto my-10">
                <button onClick={Minus} className="join-item btn btn-outline text-white ">Previous page</button>
                <button onClick={Plus} className="join-item btn btn-outline text-white">Next</button>
            </div>

        </div>
    );
};

export default Games;