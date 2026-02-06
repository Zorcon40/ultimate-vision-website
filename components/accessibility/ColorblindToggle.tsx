"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Eye } from "lucide-react";

const colorblindModes = [
  { name: "Normal Vision", value: "normal", description: "Standard color vision" },
  { name: "Protanopia (Red-Blind)", value: "colorblind-protanopia", description: "No red perception" },
  { name: "Deuteranopia (Green-Blind)", value: "colorblind-deuteranopia", description: "No green perception" },
  { name: "Tritanopia (Blue-Blind)", value: "colorblind-tritanopia", description: "No blue perception" },
  { name: "High Contrast", value: "high-contrast", description: "Maximum contrast mode" },
];

export function ColorblindToggle() {
  const [currentMode, setCurrentMode] = useState("normal");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved preference
    const saved = localStorage.getItem("colorblind-mode");
    if (saved && saved !== "normal") {
      setCurrentMode(saved);
      document.documentElement.classList.add(saved);
    }
  }, []);

  const handleModeChange = (value: string) => {
    setCurrentMode(value);
    
    // Remove all colorblind classes
    colorblindModes.forEach((mode) => {
      if (mode.value !== "normal") {
        document.documentElement.classList.remove(mode.value);
      }
    });
    
    // Add selected mode class
    if (value !== "normal") {
      document.documentElement.classList.add(value);
    }
    
    localStorage.setItem("colorblind-mode", value);
  };

  const currentModeName = colorblindModes.find((m) => m.value === currentMode)?.name || "Normal Vision";

  if (!mounted) {
    return (
      <Button variant="ghost" size="sm" className="flex items-center gap-2" aria-label="Change color vision mode">
        <Eye className="h-4 w-4" />
        <span className="hidden sm:inline">Vision</span>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2" aria-label="Change color vision mode">
          <Eye className="h-4 w-4" />
          <span className="hidden sm:inline">{currentModeName}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        {colorblindModes.map((mode) => (
          <DropdownMenuItem key={mode.value} onClick={() => handleModeChange(mode.value)} className={currentMode === mode.value ? "bg-accent" : ""}>
            <div className="flex flex-col">
              <span className="font-medium">{mode.name}</span>
              <span className="text-xs text-muted-foreground">{mode.description}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
