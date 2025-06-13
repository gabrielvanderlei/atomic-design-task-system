import { Button } from "@/components/atoms/button";
import {InputText} from "@/components/atoms/input-text";
import { useState } from "react";

export const TaskNewItem = ({ name, value, onCreateTask }:{name:string, value:boolean, onCreateTask: (taskText:string) => void}) => {
    const [task, setTask] = useState(value);

    return (
        <div>
            <InputText name={name} value={task} onChange={(e:React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value) }/>
            <span className="ml-1">
                <Button for={name} onClick={() => onCreateTask(task)}>Create Task</Button>
            </span>
        </div>
    )
}