import useCreateTask from "../../../hooks/useCreateTask";


const AllTask = () => {

    const [tasks]=useCreateTask()
    console.log(tasks);


    return (
        <div>
            all task
        </div>
    );
};

export default AllTask;