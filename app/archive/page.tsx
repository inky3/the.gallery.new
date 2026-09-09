import { ArchiveIntro, ArchiveWhy } from "./ArchiveIntro";
import ArchiveClient from "./ArchiveClient";

export const metadata = { title: "Archive — The.gallery" };

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-4 md:px-16 pt-16 pb-24">
      <ArchiveIntro />

      <div className="mt-12">
        <ArchiveClient />
      </div>

      <ArchiveWhy />
    </div>
  );
}
