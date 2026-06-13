export default function SectionFallback({ height = "h-96" }: { height?: string }) {
  return (
    <div
      aria-hidden
      className={`${height} animate-pulse rounded-3xl bg-stone-100/80`}
    />
  );
}
