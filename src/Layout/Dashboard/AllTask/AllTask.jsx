import useCreateTask from "../../../hooks/useCreateTask";
import AllTaskCard from "./AllTaskCard";


const AllTask = () => {

    const [tasks] = useCreateTask()
    // console.log(tasks);


    return (
        <div>

            {tasks.length>0?<div className="grid grid-cols-1 md:grid-cols-2 gap-5" >
                {tasks.map((item, index) => <AllTaskCard key={index} data={item}  />)}
            </div>:<h2 className="text-center my-20" >No Task Here</h2>}

        </div>
    );
};

export default AllTask;