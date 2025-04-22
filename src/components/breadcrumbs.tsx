"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-foreground"
          >
            Dashboard
          </Link>
        </li>
        {paths.map((path, index) => {
          const href = `/${paths.slice(0, index + 1).join("/")}`;
          const isLast = index === paths.length - 1;
          const label = path.charAt(0).toUpperCase() + path.slice(1);

          return (
            <li key={href} className="flex items-center">
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
              {isLast ? (
                <span className="ml-2 text-foreground">{label}</span>
              ) : (
                <Link
                  href={href}
                  className="ml-2 text-muted-foreground hover:text-foreground"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
