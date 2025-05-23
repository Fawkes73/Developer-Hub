import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] max-w-md rounded-lg border md:min-w-[450px] bg-foreground text-background"
    >
      <ResizablePanel defaultSize={100}>
        <ResizablePanelGroup direction="vertical" className="h-full w-full">
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Header</span>
          </div>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6 ">
          <span className="font-semibold">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Footer</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
