'use client'

import AddingForm from "@/components/adding-form";
import { ToDoList } from "@/components/to-do-list";
import { RecoilRoot } from "recoil";


export default function Home() {
  return (
    <>
    <RecoilRoot>

      <div className="container">
        <AddingForm className='w-[400px] p-3 space-y-3' />
        <ToDoList />
      </div>
    </RecoilRoot>
    </>
  );
}
