import Logo from "../assets/DevShalehin.png";
import TaskItem from "./TaskItem";
import FiltersButton from "./FiltesButtons";
import NewTast from "./NewTast";
import useTask from "../hooks/useTask";

export default function TaskManager() {
  const tasks = useTask();  

  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen bg-gray-900 text-white">
        <div className="bg-gray-700 p-5 rounded-2xl ">
          <header className="text-center block">
            <img className="w-48 inline-block" src={Logo} alt="" />
            <h2 className="text-3xl mb-6 font-semibold">Task Manager</h2>
          </header>
          <FiltersButton />

          <NewTast />
          {tasks.map((task) => (
            <TaskItem key={task.id} task= {task} status={Boolean(task.complete)} /> 
          ))}
        </div>
      </div>
    </>
  );
}
