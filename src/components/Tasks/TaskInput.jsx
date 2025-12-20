import { setLocalStorageData } from "../../Localstorage";
import { useState } from "react";
import { getLocalStorageData } from "../../Localstorage";
import TaskList from "./TaskList";

import lockedGif from "./locked.gif";

export default function TaskInput() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [mainTask, setMainTask] = useState(() => getLocalStorageData());

  const submitHandler = (e) => {
    e.preventDefault();
    if (!taskTitle.trim() || !taskDescription.trim()) {
      return alert("Please fill in both title and description");
    }
    const newTask = {
      taskTitle,
      taskDescription,
      createdAt: new Date().toLocaleString(),
      completed: false,
    };
    const updatedTasks = [...mainTask, newTask];
    setMainTask(updatedTasks);
    setLocalStorageData(updatedTasks);

    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="space-y-12">
      <div className="glass rounded-3xl overflow-hidden shadow-2xl">
        <div className="flex flex-col lg:flex-row">
          <div className="p-8 lg:p-12 lg:w-3/5 space-y-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">New Task</h2>
                <p className="text-gray-400 text-sm">Organize your thoughts and get things done.</p>
              </div>
            </div>

            <form onSubmit={submitHandler} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1 uppercase tracking-wider">Task Title</label>
                <input
                  value={taskTitle}
                  onChange={(e) => setTaskTitle(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                  type="text"
                  placeholder="e.g., Design System Refinement"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 ml-1 uppercase tracking-wider">Description</label>
                <textarea
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all duration-300"
                  rows="4"
                  placeholder="Describe your task in detail..."
                ></textarea>
              </div>

              <button className="group relative w-full overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-indigo-700 hover:shadow-indigo-500/25 active:scale-95">
                <span className="relative flex items-center justify-center gap-2">
                  Create Task
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </form>
          </div>

          <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 items-center justify-center p-0 border-l border-white/5 overflow-hidden">
            <img
              src={lockedGif}
              alt="Security Animation"
              className="w-full h-full object-cover mix-blend-lighten opacity-80"
            />
          </div>
        </div>
      </div>

      <TaskList mainTask={mainTask} setMainTask={setMainTask} />
    </div>
  );
}
