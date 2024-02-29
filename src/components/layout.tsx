import type { ReactNode } from "react";
import { default as DocusaurusLayout } from "@theme/Layout";

// Copied from theme-classic.d.ts
interface Props {
  readonly children?: ReactNode;
  readonly noFooter?: boolean;
  readonly wrapperClassName?: string;

  // Not really layout-related, but kept for convenience/retro-compatibility
  readonly title?: string;
  readonly description?: string;
}

export default function Layout({ children, ...props }: Props) {
  return (
    <DocusaurusLayout {...props}>
      <main className="container py-4">{children}</main>
    </DocusaurusLayout>
  );
}
