import * as React from "react";
import { cn } from "@/lib/utils";
import { useRef, useEffect } from "react";
// import { setGradPos } from "./helpers";

// Custom hook to merge refs
const useMergeRefs = <T,>(...refs: Array<React.MutableRefObject<T> | React.LegacyRef<T>>): React.RefCallback<T> => {
  return React.useCallback(
    (element: T) => {
      refs.forEach((ref) => {
        if (typeof ref === "function") {
          ref(element);
        } else if (ref != null) {
          (ref as React.MutableRefObject<T | null>).current = element;
        }
      });
    },
    [refs]
  );
};

const GlowCard = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, forwardedRef) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRefs(cardRef, forwardedRef);

    useEffect(() => {
      const element = cardRef.current;
      if (!element) return;

      // Disable temporarily
      return;

      // type Point = { x: number; y: number };

      // const distFromRectEdge = (rect: DOMRect, p: MouseEvent): { distance: number; nearestPoint: Point } => {
      //   const px = p.clientX;
      //   const py = p.clientY;

      //   // For points inside the rectangle
      //   if (px >= rect.left && px <= rect.right && py >= rect.top && py <= rect.bottom) {
      //     const distToLeft = px - rect.left;
      //     const distToRight = rect.right - px;
      //     const distToTop = py - rect.top;
      //     const distToBottom = rect.bottom - py;

      //     // Find the minimum distance and corresponding point
      //     const minDist = Math.min(distToLeft, distToRight, distToTop, distToBottom);

      //     let nearestPoint: Point;
      //     if (minDist === distToLeft) {
      //       nearestPoint = { x: rect.left, y: py };
      //     } else if (minDist === distToRight) {
      //       nearestPoint = { x: rect.right, y: py };
      //     } else if (minDist === distToTop) {
      //       nearestPoint = { x: px, y: rect.top };
      //     } else {
      //       nearestPoint = { x: px, y: rect.bottom };
      //     }

      //     return { distance: minDist, nearestPoint };
      //   }

      //   // For points outside the rectangle
      //   // Clamp x and y to the nearest point on the rectangle
      //   const nearestX = Math.min(Math.max(px, rect.left), rect.right);
      //   const nearestY = Math.min(Math.max(py, rect.top), rect.bottom);

      //   // Calculate the distance
      //   const dx = px - nearestX;
      //   const dy = py - nearestY;
      //   const distance = Math.sqrt(dx * dx + dy * dy);

      //   return {
      //     distance,
      //     nearestPoint: { x: nearestX, y: nearestY },
      //   };
      // };

      // const handleMouseMove = (e: MouseEvent) => {
      //   const rect = element.getBoundingClientRect();
      //   const { distance: dist, nearestPoint } = distFromRectEdge(rect, e);
      //   const intensity = 600 / (1 + Math.exp(0.5 * (dist - 150)));
      //   const nearestPointLocalized = {
      //     x: nearestPoint.x - rect.left,
      //     y: nearestPoint.y - rect.top,
      //   };

      //   element.style.setProperty("--gradient-intensity", `${intensity}px`);
      //   element.style.setProperty("--gradient-x", `${setGradPos(nearestPointLocalized.x, rect.width)}`);
      //   element.style.setProperty("--gradient-y", `${setGradPos(nearestPointLocalized.y, rect.height)}`);
      // };

      // window.addEventListener("mousemove", handleMouseMove);
      // return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
      <div
        ref={mergedRef}
        className={cn("rounded-xl border bg-card text-card-foreground shadow border-radiant border-none", className)}
        {...props}
      />
    );
  }
);
GlowCard.displayName = "GlowCard";

export { GlowCard };
