import { useActiveSectionContext } from "@/Context/ContextActiveProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./type";

type useSectionInViewProps = {
  sectionName: SectionName;
}

export default function useSectionInView({
  sectionName,
}: useSectionInViewProps) {
  const [ref, inView] = useInView({
    threshold: 0.75,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return {
    ref
  };
}
