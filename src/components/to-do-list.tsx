import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import TableList from "./table-list"


export function ToDoList() {
    return (
        <Tabs defaultValue="all" className="min-w-[390px] max-w-[800px]">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="all">All</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
        <TabsTrigger value="not-completed">Not Completed</TabsTrigger>
      </TabsList>
      <TabsContent value="all">
        <TableList filter="all" />
      </TabsContent>
      <TabsContent value="completed">
        <TableList filter="completed" />
      </TabsContent>
      <TabsContent value="not-completed">
        <TableList filter="not-completed" />
      </TabsContent>
        </Tabs>

    )
}
