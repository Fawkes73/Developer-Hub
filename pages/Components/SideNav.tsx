import React, { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

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
                    <Button
                      variant="ghost"
                      className="w-full justify-start px-2 py-1 text-left text-sm font-semibold hover:shadow-md hover:shadow-gray-500/30"
                    >
                      {title}
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="ml-4 mt-1 space-y-1">
                  {sublinks.map((sub: string) => (
                    <a
                      key={sub}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault()
                        handleSublinkClick(title, sub)
                      }}
                      className="block text-sm hover:shadow-md hover:shadow-gray-500/30 px-1 py-0.5 rounded"
                    >
                      {sub}
                    </a>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <Button
                variant="ghost"
                className="w-full text-left px-2 py-1 text-sm font-semibold hover:shadow-md hover:shadow-gray-500/30"
                onClick={() => handleButtonClick(title)}
              >
                {title}
              </Button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
