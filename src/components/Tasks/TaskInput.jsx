import { useActionState } from "react";
import { useState } from "react";
export default function TaskInput() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { taskTitle, taskDescription }]);

    setTaskTitle("");
    setTaskDescription("");

    console.log(mainTask);
  };

  let newTask = <h2>no task available</h2>;

  newTask = mainTask.map((t, i) => {
    return (
      <div className="m-2 bg-emerald-600 rounded-xl p-2 text-white text-l">
        <h5>
          <span className="font-bold text-xl">Title : </span>
          {t.taskTitle}
        </h5>
        <h5>
          <span className="font-bold text-xl">Description : </span>
          {t.taskDescription}
        </h5>
      </div>
    );
  });

  return (
    <div className="">
      <div className=" my-3 bg-gray-700 rounded-2xl w-full md:w-1/2 mt-3">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="p-5"
        >
          <div className="flex">
            <i className="ri-arrow-left-circle-line font-thin text-4xl opacity-80"></i>
            <h1 className="font-semibold ml-2 text-5xl text-emerald-600">
              Create Task
            </h1>
          </div>
          <div className="mt-5">
            <div className="m-4 flex">
              <h3 className="opacity-80 text-3xl text-emerald-600 font-bold">
                Task title
              </h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className="w-full font-semibold rounded-md py-1 px-3 items-center mt-2 bg-white"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div className="mt-4 m-4">
              <h3 className="opacity-80 text-3xl text-emerald-600 font-bold">
                Description
              </h3>
              <textarea
                value={taskDescription}
                onChange={(e) => {
                  setTaskDescription(e.target.value);
                }}
                className="w-full font-semibold rounded-md py-1 px-3 mt-2 bg-white"
                cols="30"
                rows="10"
                name=""
                id=""
                placeholder="Detailed description of task (Max 500 word)"
              ></textarea>
              <button className="mt-6 text-white bg-green-400 w-full p-3 font-bold text-xl rounded-lg">
                Create Task
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className=" my-3 bg-gray-700 rounded-2xl p-4">
        <ul>{newTask}</ul>
      </div>
    </div>
  );
}
