import React, { useState } from "react"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import SideNav from "../Components/SideNav"
import { Header } from "../Components/Header"
import Footer from "../Components/Footer"

const DeveloperHub = () => {
  const [activeContent, setActiveContent] = useState("Main Content Area")

  const handleContentChange = (content: string) => {
    setActiveContent(content)
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden">
      {/* Header at the top */}
      <Header />

      {/* Main Resizable Body */}
      <ResizablePanelGroup direction="vertical" className="flex-grow">
        {/* Middle section with SideNav and Content */}
        <ResizablePanel defaultSize={90}>
          <ResizablePanelGroup direction="horizontal" className="h-full w-full">
            {/* SideNav */}
            <ResizablePanel defaultSize={20} minSize={15} maxSize={30}>
              <div className="h-full w-full border-r p-4 overflow-auto">
                <SideNav onContentChange={handleContentChange} />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Main Content Area */}
            <ResizablePanel defaultSize={80}>
              <div className="h-full w-full p-6 overflow-auto">
                <h2 className="text-xl font-bold mb-4">Content Area</h2>
                <p className="text-muted-foreground">{activeContent}</p>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>

        <ResizableHandle />



      </ResizablePanelGroup>
      {/* Footer */}
      <Footer />

    </div>
  )
}

export default DeveloperHub
