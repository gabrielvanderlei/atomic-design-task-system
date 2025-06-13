import { Header } from "@/components/organisms/header";
import { TaskList } from "@/components/organisms/task-list";
import { Task } from "@/interfaces/task";

import styles from './index.module.css'

interface TaskTemplateProps{
    title:string,
    subtitle:string,
    description:string,
    tasks:Task[],
    onCreateTask: (taskText:string) => void,
    onRemoveTask: (taskIndex:number) => void,
    onCheckTask: (taskIndex:number, value:boolean) => void,
    onUpdateTask: (taskIndex:number, name:string) => void
}

export const TaskTemplate = ({ title, subtitle, description, tasks, onCreateTask, onRemoveTask, onCheckTask, onUpdateTask, isLoading }:TaskTemplateProps) => {
    return (
        <div className={styles.taskContainer}>
            <Header title={title} subtitle={subtitle} description={description} />
            {isLoading ? <div className="p-3">Loading</div> : (
              <TaskList tasks={tasks} onCreateTask={onCreateTask} onRemoveTask={onRemoveTask} onCheckTask={onCheckTask} onUpdateTask={onUpdateTask}/>
            )}
        </div>
    )
}