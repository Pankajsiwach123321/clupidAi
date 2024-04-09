import { useEffect, useState } from "react";

export const useOverflowHidden = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("max-lg:overflow-hidden");
    } else {
      document.body.classList.remove("max-lg:overflow-hidden");
    }
  }, [isOpen]);

  return [isOpen, setOpen];
};
