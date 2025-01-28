export interface Task {
  id: number;
  text: string;
  status: "To do" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  dueDate: Date;
}
