import { Task } from "../types/types";

interface TaskItemProps {
  task: Task;
  onDelete: (id: number) => void;
  updateTaskStatus: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onDelete,
  updateTaskStatus,
}) => {
  return (
    <li key={task.id} className="list-group-item">
      <span>{task.text}</span>
      <span>{task.status}</span>
      <span>{task.priority}</span>
      <span>{task.dueDate.toLocaleDateString("tr-TR")}</span>

      <button
        className="btn btn-primary btn-sm"
        onClick={() => updateTaskStatus(task.id)}
      >
        Update Status
      </button>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
