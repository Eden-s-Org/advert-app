import { useState } from "react";
import { Trash } from "lucide-react";
import ScrollTop from "../../components/ScrollTop";

export default function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") {
      alert("The task field is blank. Enter a task name and try again.");
      return;
    }
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
    <div className="flex flex-col items-center min-h-screen ml-60 bg-gray-200 p-4">
      <h2 class="text-xl md:text-3xl text-blue-950 font-bold mt-10">To Do List</h2>
      <div className="bg-white rounded-md p-6 shadow-lg w-[80%] mt-6">
        <div className="flex space-x-2 mb-4">
          <input
            type="text"
            className="flex-1 border-2 border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:border-red-500"
            placeholder="Add a task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyUp={(e) => e.key === "Enter" && addTask()}
          />
          <button
            className="bg-[#424f74] hover:bg-blue-950  text-white px-4 py-2 rounded-md"
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <div className="max-h-60 overflow-y-auto">
          {tasks.map((task, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md mb-2"
            >
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="h-5 w-5"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(index)}
                />
                <p className={task.completed ? "line-through text-gray-500" : ""}>
                  {task.text}
                </p>
              </label>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removeTask(index)}
              >
                <Trash size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
    <ScrollTop/>
    </>
  );
}