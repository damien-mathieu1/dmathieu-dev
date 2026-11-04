import type { ReactElement, ReactNode } from "react";
import Mermaid from "./Mermaid";

function getText(node: ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(getText).join("");
  if (node && typeof node === "object" && "props" in node) {
    return getText((node as ReactElement<{ children?: ReactNode }>).props.children);
  }
  return "";
}

export const mdxComponents = {
  pre(props: { children?: ReactElement<{ className?: string; children?: ReactNode }> }) {
    const code = props.children;
    const className = code?.props?.className ?? "";
    if (className.includes("language-mermaid")) {
      return <Mermaid chart={getText(code?.props?.children).trim()} />;
    }
    return <pre {...props} />;
  },
};
