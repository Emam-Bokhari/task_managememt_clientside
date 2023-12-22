import { MdAutoDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const AllTaskCard = ({data}) => {
    console.log(data);
    const { title, description,category,date } = data || {};

    return (
        <div>
            <div  className="flex flex-col min-h-full">
            <div className="bg-white p-8 rounded flex flex-col justify-between h-full">
                <div className="space-y-2">
                    <h2 className="text-xl md:text-2xl font-bold text-[#2c2a37]">{title}</h2>

                    <h2 className="text-lg md:text-xl  font-bold text-[#2c2a37]">Deadline: {date}</h2>

                    <h2 className="text-lg md:text-xl  font-bold text-[#76757a]"><span className="text-red-500" >Priority:</span> {category}</h2>

                    <p className="text-base text-[#76757a] flex-grow">
                        {description?.length > 60
                            ? `${description.slice(0, 60)}...`
                            : description
                        }
                    </p>
                </div>

                <div className="flex justify-between mt-3" >
                    <button><MdAutoDelete className="text-2xl" /></button>

                    <button><FaEdit className="text-2xl" /></button>
                </div>

            </div>
        </div>
        </div>
    );
};

export default AllTaskCard;