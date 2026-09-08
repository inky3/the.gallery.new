import Reveal from "@/components/Reveal";
import ArchiveClient from "./ArchiveClient";

export const metadata = { title: "Archive — The.gallery" };

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 pb-24">
      <Reveal>
        <p className="wall-label">The archive</p>
        <h1 className="font-display text-5xl md:text-6xl mt-2">Everything, filed together.</h1>
        <p className="text-muted mt-4 max-w-xl">
          Case studies, visual studies, and physical work sit on the same wall here — finished
          and unfinished, client and personal. Filter by discipline to narrow the view.
        </p>
      </Reveal>

      <div className="mt-12">
        <ArchiveClient />
      </div>

      <Reveal className="mt-16 pt-8 border-t border-line">
        <p className="text-sm text-muted max-w-lg">
          <span className="text-accent">Why this is here — </span>
          some of this is finished client work; some is a concept study or a prototype that never
          shipped. It's kept on the wall because the process behind it is real, even when the
          outcome wasn't polished.
        </p>
      </Reveal>
    </div>
  );
}
