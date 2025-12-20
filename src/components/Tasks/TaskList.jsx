import { useState } from "react";
import { setLocalStorageData } from "../../Localstorage";

function TaskCard({ task, onComplete, onDelete }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group glass rounded-3xl p-6 border border-white/5 hover:border-indigo-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full">
      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onDelete(task.originalIndex)}
          className="p-2 bg-rose-500/10 text-rose-500 rounded-lg hover:bg-rose-500 hover:text-white transition-colors"
          title="Delete Task"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="space-y-4 flex-grow">
        <div className="space-y-1 pr-8">
          <h4 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors break-words">
            {task.taskTitle}
          </h4>
          <div className="relative">
            <p className={`text-gray-400 text-sm leading-relaxed whitespace-pre-wrap transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
              {task.taskDescription}
            </p>
            {task.taskDescription.length > 100 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors uppercase tracking-widest"
              >
                {isExpanded ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-white/5 flex flex-col space-y-3 mt-4">
        <div className="flex items-center justify-between">
          <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Created</span>
          <span className="text-[11px] text-indigo-400 font-medium">{task.createdAt}</span>
        </div>

        {task.completed ? (
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-emerald-500 uppercase tracking-widest font-bold">Completed</span>
            <span className="text-[11px] text-emerald-400 font-medium">{task.completedAt}</span>
          </div>
        ) : (
          <button
            onClick={() => onComplete(task.originalIndex)}
            className="w-full mt-2 py-2.5 bg-white text-black font-bold text-xs rounded-xl hover:bg-indigo-500 hover:text-white transition-all transform hover:-translate-y-0.5"
          >
            Mark as Done
          </button>
        )}
      </div>
    </div>
  );
}

export default function TaskList({ mainTask, setMainTask }) {
  const [showCompleted, setShowCompleted] = useState(false);

  const completeHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask[i].completed = true;
    copyTask[i].completedAt = new Date().toLocaleString();
    setMainTask(copyTask);
    setLocalStorageData(copyTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
    setLocalStorageData(copyTask);
  };

  const clearAll = () => {
    const updatedTasks = showCompleted
      ? mainTask.filter((t) => !t.completed)
      : mainTask.filter((t) => t.completed);
    setMainTask(updatedTasks);
    setLocalStorageData(updatedTasks);
  };

  const filteredTasks = mainTask
    .map((t, i) => ({ ...t, originalIndex: i }))
    .filter((t) => (showCompleted ? t.completed : !t.completed));

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10">
          <button
            onClick={() => setShowCompleted(false)}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${!showCompleted
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Active Tasks
          </button>
          <button
            onClick={() => setShowCompleted(true)}
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${showCompleted
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                : "text-gray-400 hover:text-white"
              }`}
          >
            Completed
          </button>
        </div>

        {filteredTasks.length > 0 && (
          <button
            onClick={clearAll}
            className="px-6 py-2.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-500 border border-rose-500/20 rounded-xl font-bold text-sm transition-all active:scale-95"
          >
            Clear {showCompleted ? "Completed" : "Active"}
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.length === 0 ? (
          <div className="col-span-full py-20 glass rounded-3xl border-dashed border-2 border-white/10 flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-4 bg-white/5 rounded-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-300">
                {showCompleted ? "No history yet" : "All caught up!"}
              </h3>
              <p className="text-gray-500 text-sm">
                {showCompleted ? "Completed tasks will appear here." : "Enjoy your free time or add a new task above."}
              </p>
            </div>
          </div>
        ) : (
          filteredTasks.map((t) => (
            <TaskCard
              key={t.originalIndex}
              task={t}
              onDelete={deleteHandler}
              onComplete={completeHandler}
            />
          ))
        )}
      </div>
    </div>
  );
}
