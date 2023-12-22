import { useContext } from "react";
import { AuthContext } from './../../../AuthProvider/AuthProvider';
import { useForm } from "react-hook-form";


const CreateTask = () => {

    const { register, handleSubmit } = useForm()
    const {user}=useContext(AuthContext)
    const userEmail=(user?.email);

    const onSubmit = (data) => {
        const title=data.taskTitle 
        const category=data.category
        const date=data.date
        const description=data.description
        console.log(title,category,date,description);
    }



    return (
        <div>
        

        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]">
          CREATE <span className="text-[#975cec]">TASK</span>
        </h2>

        <div className="bg-gray-200 p-6 my-5 rounded-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col md:flex-row gap-5 my-5">
              <div className="flex-1">
                <input
                  className="bg-white p-2 rounded-sm w-full outline-none"
                  type="text"
                  name="email"
                  placeholder="Email" readOnly
                  defaultValue={userEmail}
                  
                />
              </div>
              <div className="flex-1">
                <input
                  className="bg-white p-2 rounded-sm w-full outline-none"
                  type="text"
                  name="taskTitle"
                  placeholder="Task Title"
                  {...register("taskTitle", { required: true })}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 my-5">

              <div className="flex-1">
                <select className="bg-white w-full p-2 rounded-sm outline-none" name="category" {...register("category", { required: true })}>
                  <option value="" >Select Priority</option>
                  <option value="Low">Low</option>
                  <option value="Moderate">Moderate</option>
                  <option value="High">High</option>
                </select>
              </div>

              <div className="flex-1">
                <input className="bg-white w-full p-2 rounded-sm outline-none" type="date" name="date" {...register("date", { required: true })} />
              </div>
            </div>

            <div className="my-5">
              <textarea
                className="w-full rounded-sm resize-none p-2 outline-none"
                name="description"
                rows="10"
                placeholder="Description"
                {...register("description", { required: true })}
              ></textarea>
            </div>


            <div className="my-5">
              <input
                className="bg-[#975cec] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                type="submit"
                value="Create"
              />
            </div>
          </form>
        </div>

        </div>
    );
};

export default CreateTask;