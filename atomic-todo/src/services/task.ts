import {Task} from '@/interfaces/task'
import {SetStateAction, Dispatch} from 'react'

export class TaskService{

    update(newAllTasks:Task[]){
        this.updateLocalStorage(newAllTasks);
    }

    load(setAllTasks:Dispatch<SetStateAction<Task[]>>){
        this.loadLocalStorage(setAllTasks);
    }

    loadLocalStorage(setAllTasks:Dispatch<SetStateAction<Task[]>>) {
        const currentData = localStorage.getItem('allTasks');

        if(!currentData){
            setAllTasks(this.initialTasksFactory())
        } else {
            try {
                setAllTasks(JSON.parse(currentData))
            } catch {
                setAllTasks(this.initialTasksFactory())
            }
        }
    }

    updateLocalStorage(newAllTasks:Task[]) {
        localStorage.setItem('allTasks', JSON.stringify(newAllTasks))
    }

    
    initialTasksFactory():Task[]{
        const initialTasks:Task[] = [];
        const newTask:Task = {
            name: "test",
            completed:false,
        }
        initialTasks.push(newTask)
        return initialTasks;
    }

}