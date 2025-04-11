export type PriorityType = 'urgent'|'high' | 'medium' | 'low';

export interface TodoIf {
  checked: boolean;
  id: number;

  title: string;
  description: string;
  flagId: number;
  dueDate: Date;
  priority: PriorityType;
}
