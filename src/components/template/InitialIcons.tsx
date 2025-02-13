import React from "react";
import { ElectronIcon, ReactIcon, ShadCNIcon } from '@/components/ui/IconLibrary';

export default function InitalIcons() {
  const iconSize = 48;

  return (
    <div className="inline-flex gap-2">
      <ElectronIcon size={iconSize} />
      <ReactIcon size={iconSize} />
      <ShadCNIcon size={iconSize} />
    </div>
  );
}
