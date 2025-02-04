import { useNavigate } from "react-router-dom";

function TasksCard({ tasks }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"
      onClick={() => {
        navigate("/tasks/" + tasks.id);
      }}
    >
      <h1 className="uppercase font-bold">{tasks.title}</h1>
      <p className=" text-slate-400">{tasks.description}</p>
    </div>
  );
}

export default TasksCard;
