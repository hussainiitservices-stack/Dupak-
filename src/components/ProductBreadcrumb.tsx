import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export default function ProductBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span aria-hidden className="text-border">
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={isLast ? "font-medium text-secondary" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
