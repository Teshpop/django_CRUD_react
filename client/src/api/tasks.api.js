import axios from "axios";

const URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

const tasksApi = axios.create({
  baseURL: `${URL}/tasks/api/v1/tasks`,
});

export const getAllTasks = () => tasksApi.get("/");
export const getTask = (id) => tasksApi.get(`/${id}`);
export const createTask = (task) => tasksApi.post("/", task);
export const deleteTask = (id) => tasksApi.delete(`/${id}/`);
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task);
