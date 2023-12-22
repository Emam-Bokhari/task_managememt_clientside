import useCreateTask from "../../../hooks/useCreateTask";
import ManageTaskCard from "./ManageTaskCard";


const ManageTask = () => {
    const [tasks] = useCreateTask()
    return (
        <div>

            <div className="border-2 border-[#7345b2] flex justify-around " >
                <h2 className="font-bold" >To do list</h2>
                <h2 className="font-bold" >On Going</h2>
                <h2 className="font-bold" >Completed</h2>

            </div>
            
           {tasks.length>0? <div className="grid grid-cols-1 w-64 gap-5  mt-2" >
                {tasks.map((item, index) => <ManageTaskCard key={index} data={item}  />)}
            </div>:<h2 className="text-center my-20" >No task for manage</h2>}

        </div>
    );
};

export default ManageTask;