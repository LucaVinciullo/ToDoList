export interface Task {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  // TODO enum | union type
  type: string;
  // TODO enum | union type
  tag: string;
  date: Date;
}
