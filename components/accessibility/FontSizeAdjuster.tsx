"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Type, Minus, Plus } from "lucide-react";

const fontSizes = [
  { name: "Small", value: "font-size-small", scale: "100%" },
  { name: "Medium", value: "font-size-medium", scale: "112.5%" },
  { name: "Large", value: "font-size-large", scale: "125%" },
  { name: "Extra Large", value: "font-size-xlarge", scale: "137.5%" },
];

export function FontSizeAdjuster() {
  const [currentSizeIndex, setCurrentSizeIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved preference
    const saved = localStorage.getItem("font-size");
    if (saved) {
      const index = fontSizes.findIndex((s) => s.value === saved);
      if (index !== -1) {
        setCurrentSizeIndex(index);
        applyFontSize(fontSizes[index].value);
      }
    }
  }, []);

  const applyFontSize = (sizeClass: string) => {
    // Remove all font size classes
    fontSizes.forEach((size) => {
      document.documentElement.classList.remove(size.value);
    });
    // Add selected size class
    document.documentElement.classList.add(sizeClass);
  };

  const increaseSize = () => {
    const newIndex = Math.min(currentSizeIndex + 1, fontSizes.length - 1);
    setCurrentSizeIndex(newIndex);
    applyFontSize(fontSizes[newIndex].value);
    localStorage.setItem("font-size", fontSizes[newIndex].value);
  };

  const decreaseSize = () => {
    const newIndex = Math.max(currentSizeIndex - 1, 0);
    setCurrentSizeIndex(newIndex);
    applyFontSize(fontSizes[newIndex].value);
    localStorage.setItem("font-size", fontSizes[newIndex].value);
  };

  const currentSize = fontSizes[currentSizeIndex];

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" disabled className="h-8 w-8"><Minus className="h-4 w-4" /></Button>
        <div className="flex items-center gap-1 px-2"><Type className="h-4 w-4 text-muted-foreground" /><span className="text-xs text-muted-foreground hidden sm:inline">Size</span></div>
        <Button variant="ghost" size="icon" disabled className="h-8 w-8"><Plus className="h-4 w-4" /></Button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1">
      <span className="sr-only">Adjust font size</span>
      <Button variant="ghost" size="icon" onClick={decreaseSize} disabled={currentSizeIndex === 0} aria-label="Decrease font size" className="h-8 w-8"><Minus className="h-4 w-4" /></Button>
      <div className="flex items-center gap-1 px-2"><Type className="h-4 w-4 text-muted-foreground" /><span className="text-xs text-muted-foreground hidden sm:inline min-w-[3rem] text-center">{currentSize.name}</span></div>
      <Button variant="ghost" size="icon" onClick={increaseSize} disabled={currentSizeIndex === fontSizes.length - 1} aria-label="Increase font size" className="h-8 w-8"><Plus className="h-4 w-4" /></Button>
    </div>
  );
}
