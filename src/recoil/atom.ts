import { atom } from "recoil";

type Task = {
    id: number;
    task: string;
    description: string;
    isCompleted: boolean;
};

export const tasksState = atom<Task[]>({
    key:'tasks',
    default: []
})