import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import TasksCard from "./TasksCard";

function TasksList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data);
    }

    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3">
      {tasks.map((tasks) => (
        <TasksCard key={tasks.id} tasks={tasks} />
      ))}
    </div>
  );
}

export default TasksList;
