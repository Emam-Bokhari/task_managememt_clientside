import useCreateTask from "../../../hooks/useCreateTask";
import AllTaskCard from "./AllTaskCard";


const AllTask = () => {

    const [tasks] = useCreateTask()
    console.log(tasks);


    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5" >
                {tasks.map((item, index) => <AllTaskCard key={index} data={item}  />)}
            </div>

        </div>
    );
};

export default AllTask;