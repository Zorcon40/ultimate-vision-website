"use client";

import { ColorblindToggle } from "./ColorblindToggle";
import { FontSizeAdjuster } from "./FontSizeAdjuster";

export function AccessibilityToolbar() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-lg border bg-background p-2 shadow-lg">
      <ColorblindToggle />
      <div className="h-6 w-px bg-border" />
      <FontSizeAdjuster />
    </div>
  );
}
