import React from "react";

const TaskItem = ({ task }) => {
  return (
    <div className="bg-slate-900/40 border border-slate-700 rounded-2xl p-4 mb-3 hover:border-slate-500 transition-colors">
      {/* Top Row: Title & Date */}
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-semibold text-lg text-white">{task.title}</h3>
        <span className="text-xs text-slate-500 bg-slate-800 px-2 py-1 rounded-full whitespace-nowrap ml-2">
          {task.createdAt}
        </span>
      </div>

      {/* Description: Always visible, simple text */}
      {task.description && (
        <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-slate-700 pl-3">
          {task.description}
        </p>
      )}
    </div>
  );
};

export default TaskItem;
