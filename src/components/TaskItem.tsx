import { Task } from "../types/types";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const handleDelete = () => {};

  const handleUpdateStatus = () => {};

  return (
    <>
      <td>{task.text}</td>
      <td>{task.status}</td>
      <td>{task.priority}</td>
      <td>{task.dueDate.toLocaleDateString("tr-TR")}</td>
      <td>
        <button className="btn btn-primary btn-sm" onClick={handleUpdateStatus}>
          Update Status
        </button>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Delete
        </button>
      </td>
    </>
  );
};

export default TaskItem;
