import React, { useEffect } from "react";
import { debounce } from "lodash";
import { Icon } from "@/components/ui/icon";
import { Image } from "@/components/ui/image";

export default function App() {
  useEffect(() => {
    const emitMarkerData = (event: MouseEvent, type: "WEB_HOVER" | "WEB_SELECT") => {
      // If user clicks a <path> or <g>, climb up to nearest <svg> that has data-marker
      let target = (event.target as HTMLElement).closest("[data-marker]");

      // Special case: if it's an SVG child (like <path>, <circle>), bubble up
      if (!target && (event.target as HTMLElement).closest("svg")) {
        target = (event.target as HTMLElement).closest("svg[data-marker]");
      }

      if (target) {
        const elementInfo: any = {
          tagName: target.tagName,
          // Fix: Handle both SVG and HTML className properly
          className: target instanceof SVGElement 
            ? (target.className as any).baseVal || ""
            : target.className || "",
          textContent: target.textContent?.trim(),
        };

        if (target.tagName === "IMG" || target.tagName === "IMAGE") {
          elementInfo.src = (target as HTMLImageElement).src;
          elementInfo.alt = (target as HTMLImageElement).alt;
        }

        if (target.tagName === "svg" || target.tagName === "SVG") {
          elementInfo.isIcon = true;
          // Add additional SVG info
          const svgElement = target as SVGSVGElement;
          elementInfo.viewBox = svgElement.getAttribute("viewBox") || "";
          elementInfo.width = svgElement.getAttribute("width") || svgElement.clientWidth;
          elementInfo.height = svgElement.getAttribute("height") || svgElement.clientHeight;
        }

        // Highlight behavior
        if (type === "WEB_HOVER") {
          target.classList.add("ring-2", "ring-blue-500");
          setTimeout(() => {
            target.classList.remove("ring-2", "ring-blue-500");
          }, 200);
        }
        if (type === "WEB_SELECT") {
          document.querySelectorAll(".selected-marker").forEach((el) =>
            el.classList.remove("selected-marker", "ring-2", "ring-red-500")
          );
          target.classList.add("selected-marker", "ring-2", "ring-red-500");
        }

        window.parent.postMessage(
          {
            type,
            elementId: target.getAttribute("data-marker"),
            elementInfo,
          },
          "*"
        );
      }
    };

    const handleHover = debounce((event: MouseEvent) => {
      emitMarkerData(event, "WEB_HOVER");
    }, 100);

    const handleClick = (event: MouseEvent) => {
      emitMarkerData(event, "WEB_SELECT");
    };

    document.addEventListener("mouseover", handleHover);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mouseover", handleHover);
      document.removeEventListener("click", handleClick);
      handleHover.cancel();
    };
  }, []);

  return (
    <section className="p-5 border border-gray-300">
      <h1>Hello from Web</h1>
      <svg viewBox="0 0 24 24" className="w-20 h-20">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <p>This is a sample paragraph for inspection.</p>
      <Image
        src="https://www.google.com/imgres?q=randomimage&imgurl=https%3A%2F%2Fhatrabbits.com%2Fwp-content%2Fuploads%2F2017%2F01%2Frandom.jpg&imgrefurl=https%3A%2F%2Fhatrabbits.com%2Fen%2Frandom-image%2F&docid=eLpSyvMoM8brnM&tbnid=jsbCYSW7o-fL-M&vet=12ahUKEwjs7Nyd64KQAxX0ZEEAHRVEK4IQM3oECBsQAA..i&w=787&h=444&hcb=2&ved=2ahUKEwjs7Nyd64KQAxX0ZEEAHRVEK4IQM3oECBsQAA"
        alt="Placeholder"
        width={150}
        height={150}
      />
      <span>
        <Icon name="Star" className="text-yellow-500" /> Icon example
      </span>
      <section>
        <h2>Nested Section</h2>
        <p>More text here</p>
      </section>
    </section>
  );
}