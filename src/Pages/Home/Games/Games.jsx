import axios from "axios";
import { useEffect, useState } from "react";
import GamesCard from "./GamesCard/GamesCard";



const Games = () => {

    const [games, setGames] = useState([])
    // console.log(games);
    const [pages, setPages] = useState(1)
    const [title, setTitle] = useState("")
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
        axios.get(`https://www.cheapshark.com/api/1.0/deals?storeID=${pages}&title=${title}`)
            .then(res => {
                setGames(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [pages, title])

    return (
        <div>
            {games.length <= 0 ?
                <>
                    
                    <div className="flex flex-col space-y-2 justify-center items-center h-60">
                    <p className="text-white text-3xl flex justify-center ">No Game Available</p>
                       <button onClick={()=>window.location.reload()} className="btn btn-neutral">Back</button>
                    </div>
                </>
                :
                <>
                    <div className=" flex justify-center gap-3 mt-5">
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Search Your Desire Game"
                            className="w-[50%] bg-[#211C13] rounded-lg border border-[#1B8EF8] px-4 py-2 text-[#1B8EF8] ring-offset-2 duration-300 focus:outline-none focus:ring-2" type="text" />
                        <button className="w-36 h-12 border-2 border-sky-300 text-sky-800 font-black rounded-full hover:text-white duration-300 relative group"><span className="absolute w-12 group-hover:w-[88%] duration-300 flex group-hover:justify-start rounded-full inset-2 bg-sky-300 group-hover:bg-sky-500 group-hover:duration-500 -z-10"></span>Search</button>
                    </div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-1 px-5 mt-10">
                        {
                            games?.map(game => <GamesCard key={game.gameID} game={game}></GamesCard>)
                        }
                    </div>

                    <div className="join grid grid-cols-2 text-white w-[30%] mx-auto  h-full">
                        <button onClick={Minus} className="join-item btn btn-outline text-white ">Previous page</button>
                        <button onClick={Plus} className="join-item btn btn-outline text-white">Next</button>
                    </div>
                </>
            }

        </div>
    );
};

export default Games;