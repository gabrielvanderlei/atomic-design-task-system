import { Button } from "@/components/atoms/button";
import {InputText} from "@/components/atoms/input-text";
import { useState } from "react";

export const TaskNewItem = ({ onCreateTask }:{onCreateTask: (taskText:string) => void}) => {
    const [task, setTask] = useState('');

    return (
        <div>
            <InputText value={task} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value) }/>
            <span className="ml-1">
                <Button onClick={() => onCreateTask(task)}>Create Task</Button>
            </span>
        </div>
    )
}