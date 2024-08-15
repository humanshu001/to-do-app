import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Button } from "./ui/button"
import { tasksState } from "@/recoil/atom"
import { useRecoilValue, useRecoilState } from "recoil"

type taskType = {
    id: number,
    task: string,
    description: string,
    isCompleted: boolean
}

export default function TableList(props:{filter:string}) {
    const tasks : any = useRecoilValue(tasksState)
    const [todoList, setTodoList] = useRecoilState(tasksState)
    const oldTasks = tasks

    const deleteTask = (id:number) => {
        setTodoList((oldTasks) => oldTasks.filter((task:taskType) => task.id !== id))
    }

    const toggleTask = (id:number) => {
        setTodoList((oldTasks) => oldTasks.map((task:taskType) => {
            if(task.id === id) {
                return {
                    ...task,
                    isCompleted: !task.isCompleted
                }
            }
            return task
        }))
    }
  return (
    <>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Task</TableHead>
                    <TableHead>Task Description</TableHead>
                    <TableHead className="w-[200px] text-center">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                
            { tasks.length >0 ? 
            
            tasks.map((task:taskType) => (
                (props.filter === 'all' || (props.filter === 'completed' && task.isCompleted) || (props.filter === 'not-completed' && !task.isCompleted)) &&
                <TableRow key={task.task}>
                    <TableCell className="font-medium">{task.isCompleted? <del className="text-gray-500">{task.task}</del>: <p>{task.task}</p>}</TableCell>
                    <TableCell>{task.isCompleted? <del className="text-gray-500">{task.description}</del>: <p>{task.description}</p>}</TableCell>
                    <TableCell className="flex justify-end">
                        {
                            task.isCompleted ?
                            <Button onClick={()=>toggleTask(task.id)} className="space-x-1.5  mr-1.5 bg-amber-400 hover:bg-amber-500">
                                <span>Not Done</span>
                            </Button>
                                :
                            <Button onClick={()=>toggleTask(task.id)} className="space-x-1.5  mr-1.5 bg-green-400 hover:bg-green-500">
                                <span>Done</span>
                            </Button>
                        }
                        <Button onClick={()=>deleteTask(task.id)} className="space-x-1.5 ml-1.5 bg-red-500 hover:bg-red-400">
                            <span>Delete</span>
                        </Button>
                    </TableCell>
                </TableRow>
            ))
            : 
                <TableRow>
                    <TableCell colSpan={3} className="text-center">No Task Found</TableCell>
                </TableRow>
            }
            </TableBody>
        </Table>
    </>
  )
}
