import { Task } from "../types/types";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <>
      <td>{task.text}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.dueDate.toLocaleDateString("tr-TR")}</td>
      <td>
        <select className="form-select">
          <option selected>Status</option>
          <option value={"To do"}>To do</option>
          <option value={"In progress"}>In progress</option>
          <option value={"Done"}>Done</option>
        </select>
        <button className="btn btn-danger btn-sm">Delete</button>
      </td>
    </>
  );
};

export default TaskItem;
