'use client'
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRecoilState } from "recoil"
import { tasksState } from "@/recoil/atom"

export default function AddingForm(props:{className:string}) {
    const [task, setTask] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [todoList, setTodoList] = useRecoilState(tasksState)

    const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value)
    }

    const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(e.target.value)
    }

    const addTask = () => {
        setTodoList((oldTasks) => [
            ...oldTasks,
            {
                id: oldTasks.length + 1,
                task: task,
                description: description,
                isCompleted: false
            }
        ])
    
        setTask('')
        setDescription('')
    }
    

  return (
    <Card className={props.className} style={{marginBottom:'50px'}}>
      <CardHeader>
        <CardTitle className="text-center text-3xl font-black">To Do App</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Task</Label>
              <Input value={task} onChange={handleTaskChange} id="name" placeholder="Enter your Task" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Input value={description} onChange={handleDescriptionChange} id="description" placeholder="Enter Description Here" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="button" onClick={addTask}>Add Task</Button>
      </CardFooter>
    </Card>
  )
}
