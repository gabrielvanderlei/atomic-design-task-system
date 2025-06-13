import { Button } from "@/components/atoms/button";
import { TaskItem } from "@/components/molecules/task-item";
import { TaskNewItem } from "@/components/molecules/task-new-item";
import { Task } from "@/interfaces/task";

interface TaskListProps{
    tasks:Task[],
    onCreateTask: (taskText:string) => void,
    onRemoveTask: (taskIndex:number) => void,
    onCheckTask: (taskIndex:number, value:boolean) => void,
    onUpdateTask: (taskIndex:number) => void
}

export const TaskList = ({ tasks, onCreateTask, onRemoveTask, onCheckTask, onUpdateTask }:TaskListProps) => (
    <div className="p-5">
        <div className="mb-4">
            <TaskNewItem onCreateTask={onCreateTask} />
        </div>
        {tasks.map((task:Task, index:number) => (
            <div key={index} className="flex mt-2">
                <div className="flex-1 ml-1">
                    <Button onClick={() => onRemoveTask(index)}>Remove</Button>
                </div>
                <div className="flex-1 ml-1">
                    <Button onClick={() => onUpdateTask(index)}>Edit</Button>
                </div>
                <div className="flex-8">
                    <TaskItem index={index} task={task} name={`task_${index}`} onCheckTask={onCheckTask}/>
                </div>
            </div>
        ))}
    </div>
)