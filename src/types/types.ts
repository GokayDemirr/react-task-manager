export interface Task {
  id: number;
  text: string;
  status: "To do" | "In progress" | "Done";
  priority: "Low" | "Medium" | "High";
  dueDate: Date;
}
