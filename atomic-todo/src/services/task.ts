import Task from '@/interfaces/task'

export class TaskService{

    update(newAllTasks){
        this.updateLocalStorage(newAllTasks);
    }

    load(setAllTasks){
        this.loadLocalStorage(setAllTasks);
    }

    loadLocalStorage(setAllTasks) {
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

    updateLocalStorage(newAllTasks) {
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