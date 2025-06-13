import { InputCheckbox } from "@/components/atoms/input-checkbox";
import { Label } from "@/components/atoms/label";
import { Task } from "@/interfaces/task";

import styles from './index.module.css'
import { useState, useEffect } from "react";

export const TaskItem = ({ index, name, task, onCheckTask }:{ index:number, name:string, task:Task, onCheckTask: (taskIndex:number, value:boolean) => void }) => {
    const [checked, setChecked] = useState<boolean>();

    useEffect(() => {
        setChecked(task.completed);
    }, [task.completed]);

    const handleToggle = () => {
        setChecked(prev => {
            const newCheckedValue = Boolean(!prev)
            onCheckTask(index, newCheckedValue);
            return newCheckedValue
        });
    }

    const handleCheckChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setChecked(() => {
            const newCheckedValue = Boolean(e.target.checked)
            onCheckTask(index, newCheckedValue);
            return newCheckedValue
        });
    }

    return (
        <div className={styles.item} onClick={() => { handleToggle() }}>
            <InputCheckbox name={name} value={checked} onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleCheckChange(e)} />
            <Label htmlFor={name}>{task.name}</Label>
            {task.completed && (<b> - Completed!</b>)}
        </div>
    )
}