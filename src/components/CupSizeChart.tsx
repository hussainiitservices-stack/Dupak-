import type { CupSize } from "@/lib/product-lines";

function CupIllustration({
  size,
  maxHeight,
}: {
  size: CupSize;
  maxHeight: number;
}) {
  const scale = 120 / maxHeight;
  const h = size.height * scale;
  const topW = size.topDiameter * scale * 0.55;
  const bottomW = size.bottomDiameter * scale * 0.55;

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-1 flex h-28 items-end justify-center">
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] whitespace-nowrap text-muted">
          {size.topDiameter} mm
        </div>
        <div className="relative" style={{ width: topW, height: h }}>
          <div
            className="absolute inset-0 rounded-b-md bg-gradient-to-r from-stone-200 via-white to-stone-300 shadow-sm"
            style={{
              clipPath: `polygon(${(1 - bottomW / topW) * 50}% 100%, ${50 + (bottomW / topW) * 50}% 100%, 100% 0, 0 0)`,
            }}
          />
          <div className="absolute top-1/2 -right-8 -translate-y-1/2 text-[10px] text-muted">
            {size.height} mm
          </div>
        </div>
      </div>
      <div className="text-[10px] text-muted">{size.bottomDiameter} mm</div>
      <div className="mt-2 rounded bg-primary px-2 py-1 text-xs font-bold text-white">
        {size.label}
      </div>
    </div>
  );
}

export default function CupSizeChart({ sizes, title }: { sizes: CupSize[]; title: string }) {
  const maxHeight = Math.max(...sizes.map((s) => s.height));

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-stone-50 p-6 sm:p-8">
      <h3 className="text-center text-lg font-extrabold tracking-wide text-secondary uppercase">
        {title}
      </h3>
      <div className="mt-8 overflow-x-auto pb-2">
        <div className="flex min-w-max justify-center gap-4 sm:gap-6">
          {sizes.map((size) => (
            <CupIllustration key={size.label} size={size} maxHeight={maxHeight} />
          ))}
        </div>
      </div>
    </div>
  );
}
