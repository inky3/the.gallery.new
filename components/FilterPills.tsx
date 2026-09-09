"use client";

export default function FilterPills({
  tags,
  active,
  onChange,
}: {
  tags: string[];
  active: string;
  onChange: (tag: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
      {tags.map((tag) => {
        const isActive = tag === active;
        return (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            aria-pressed={isActive}
            className={`rounded-full px-4 py-1.5 text-sm border transition-colors ${
              isActive
                ? "bg-accent border-accent text-white"
                : "bg-transparent border-white/40 text-white hover:bg-accent/20 hover:border-accent-glow"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
