import React, { useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SideNav from "../Components/SideNav"

const DeveloperHub = () => {
  const [activeContent, setActiveContent] = useState("Main Content Area")

  const handleContentChange = (content: string) => {
    setActiveContent(content)
  }

  return (
    <div className="h-screen w-screen overflow-hidden">
      <ResizablePanelGroup direction="vertical" className="h-full w-full">
        {/* Header */}
        <ResizablePanel defaultSize={10} minSize={8} maxSize={15}>
          <div className="h-full w-full flex items-center justify-center border-b bg-gray-100 p-4">
            <span className="font-semibold text-lg">Header</span>
          </div>
        </ResizablePanel>

        <ResizableHandle />

        {/* Middle section with SideNav and Content */}
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="horizontal" className="h-full w-full">
            {/* SideNav */}
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <div className="h-full w-full border-r bg-gray-50 p-4 overflow-auto">
                <SideNav onContentChange={handleContentChange} />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Content */}
            <ResizablePanel defaultSize={80}>
              <div className="h-full w-full p-6 overflow-auto">
                <h2 className="text-xl font-bold mb-4">Content Area</h2>
                <p className="text-gray-700">{activeContent}</p>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle />

        {/* Footer */}
        <ResizablePanel defaultSize={10} minSize={8} maxSize={15}>
          <div className="h-full w-full flex items-center justify-center border-t bg-gray-100 p-4">
            <span className="font-semibold text-lg">Footer</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}

export default DeveloperHub
