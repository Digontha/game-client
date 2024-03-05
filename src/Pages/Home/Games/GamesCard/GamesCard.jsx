
import PropTypes from 'prop-types';

const GamesCard = ({game}) => {
    // console.log(game);
    const {title,thumb,salePrice} = game||{};
    return (
       <>
       <div className="max-w-[350px] space-y-4 rounded-lg  p-6 shadow-lg md:w-[350px] bg-[#2D3842] text-white mb-2">
            <img alt="card navigate ui" className="w-[302px] h-[113px]  rounded-lg " src={thumb} />
            <div className="grid gap-2">
                <h1 className="text-lg font-semibold ">{title}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">This is a brief description of the product. It highlights the key features and benefits.</p>
                <div className="text-lg font-semibold  ">${salePrice}</div>
            </div>
            <div className="flex gap-4">
                <button className="px-6 py-2 bg-slate-800 text-white rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-950">Add to Cart</button>
                    <button className="px-4 py-2 bg-blue-500 hover:bg-gray-800 hover:text-white border-black border duration-300 rounded-md">View Details</button>
            </div>
        </div>

        
       </>
    );
};

GamesCard.propTypes = {
    game:PropTypes.Object,
};

export default GamesCard;