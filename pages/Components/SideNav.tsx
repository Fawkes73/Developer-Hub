import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";
import { ModeToggle } from "@/pages/Components/ModeToggle"; // Import ModeToggle component

// Define the type for the props in the component
interface SideNavProps {
  onContentChange: (content: string) => void; // Type for the onContentChange function
}

const items = [
  { title: "First line" },
  { title: "Second line" },
  { title: "Third line" },
  { title: "Fourth line", sublinks: ["a", "b", "c"] },
  { title: "Fifth line", sublinks: ["a", "b", "c"] },
  { title: "Sixth line", sublinks: ["a", "b", "c"] },
  { title: "Seventh line", sublinks: ["a", "b", "c"] },
  { title: "Eighth line", sublinks: ["a", "b", "c"] }
];

const SideNav: React.FC<SideNavProps> = ({ onContentChange }) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  // Toggle the collapsible sections
  const handleToggle = (title: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  // Handle sublink click and update content
  const handleSublinkClick = (title: string, sublink: string) => {
    onContentChange(`${title} - ${sublink}`);
  };

  // Handle main item click and update content
  const handleButtonClick = (title: string) => {
    onContentChange(title);
  };

  return (
    <div>
      <ul className="space-y-2">
        {items.map(({ title, sublinks }) => (
          <li key={title} className="mb-2">
            {sublinks ? (
              <Collapsible open={!!openItems[title]} onOpenChange={() => handleToggle(title)}>
                <div className="flex items-center justify-between">
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-between px-2 py-1 text-left text-sm font-semibold">
                      {title}
                      <ChevronsUpDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="ml-4 mt-1 space-y-1">
                  {sublinks.map((sub) => (
                    <a
                      key={sub}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        handleSublinkClick(title, sub);
                      }}
                      className="block text-sm text-blue-600 hover:underline"
                    >
                      {sub}
                    </a>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                variant="ghost"
                className="w-full text-left px-2 py-1 text-sm font-semibold"
                onClick={() => handleButtonClick(title)} // Update content on button click
              >
                {title}
              </Button>
            )}
          </li>
        ))}
      </ul>

      {/* Add the ModeToggle button */}
      <div className="mt-4">
        <ModeToggle />
      </div>
    </div>
  );
};

export default SideNav;
