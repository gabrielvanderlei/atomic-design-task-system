import { TaskTemplate } from "@/components/templates/task-template";
import { Task } from "@/interfaces/task";
import { TaskService } from "@/services/task";
import { useState, useEffect, useMemo } from "react";

export const TaskPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [allTasks, setAllTasks] = useState<Task[]>([]);
    const taskService = useMemo(() => new TaskService(), []);

    useEffect(() => {
        taskService.load(setAllTasks);
        setIsLoading(false)
    }, [taskService]);

    useEffect(() => {
        setIsLoading(true);
        taskService.update(allTasks);
        setIsLoading(false)
    }, [allTasks, taskService])

    const handleCreateTask = (taskText:string) => {
        setAllTasks((prev) => {
            return [
                ...prev,
                {
                    name: taskText,
                    completed: false
                }
            ]
        })
    }

    const handleRemoveTask = (taskIndex:number) => {
        setAllTasks((prev) => prev.filter((_, index:number) => index !== taskIndex));
    }

    const onCheckTask = (taskIndex:number, value:boolean) => {
        setAllTasks((prev) => {
            const newPrev:Task[] = [...prev]
            newPrev[taskIndex].completed = value;
            return newPrev;
        });
    }

    const onUpdateTask = (taskIndex:number) => {
        const newNamePrompt = prompt("New task content:")

        if(newNamePrompt !== null){
            setAllTasks((prev) => {
                const newPrev:Task[] = [...prev]
                newPrev[taskIndex].name = newNamePrompt;
                return newPrev;
            });
        }
    }

    return (
        <div>
            <TaskTemplate
                title={'Tasks'}
                subtitle={'Register your task'}
                description={'Just click in "create new task"'}
                tasks={allTasks}
                onCreateTask={handleCreateTask}
                onRemoveTask={handleRemoveTask}
                onCheckTask={onCheckTask}
                onUpdateTask={onUpdateTask}
                isLoading={isLoading}
                />
        </div>
    )
}