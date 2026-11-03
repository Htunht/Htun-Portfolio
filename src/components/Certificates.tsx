import { useEffect, useRef, useState } from "react";
import ChromaGrid, { type ChromaItem } from "./ChromaGrid";
import firstPrize from "../images/Certificate/First Prize Upright.jpg";
import hackathon from "../images/Certificate/Hackathon Upright.jpg";
import letsTechHub from "../images/Certificate/Let'sTech Hub.jpg";
import matriculation from "../images/Certificate/Matriculation.jpg";
import scbi from "../images/Certificate/SCBI.jpg";
import technortal from "../images/Certificate/Technortal.jpg";

const certificates: Omit<ChromaItem, "onClick">[] = [
  {
    image: firstPrize,
    alt: "Engineering Festival certificate",
    title: "Engineering Festival",
    subtitle: "First Prize",
    accent: "#166534",
  },
  {
    image: hackathon,
    alt: "Science Festival Myanmar 2025 certificate",
    title: "Science Festival Myanmar 2025",
    subtitle: "Hackathon",
    accent: "#3fb8ff",
  },
  {
    image: letsTechHub,
    alt: "Let's Tech Hackathon certificate",
    title: "Let's Tech Hackathon",
    subtitle: "Certificate of Participation",
    accent: "#8b5cf6",
  },
  {
    image: matriculation,
    alt: "Matriculation certificate",
    title: "Matriculation",
    subtitle: "Academic Qualification",
    accent: "#d4a84f",
  },
  {
    image: scbi,
    alt: "SCBI Communicative English course certificate",
    title: "Communicative English",
    subtitle: "Intermediate · SCBI",
    accent: "#9b6b58",
  },
  {
    image: technortal,
    alt: "Technortal One Project One Week certificate of achievement",
    title: "One Project One Week",
    subtitle: "First Runner-up · Technortal",
    accent: "#c5d93a",
  },
];

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    Omit<ChromaItem, "onClick"> | null
  >(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedCertificate) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCertificate(null);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [selectedCertificate]);

  const items: ChromaItem[] = certificates.map((certificate) => ({
    ...certificate,
    onClick: () => {
      previouslyFocusedRef.current =
        document.activeElement instanceof HTMLElement
          ? document.activeElement
          : null;
      setSelectedCertificate(certificate);
    },
  }));

  return (
    <section
      id="certificates"
      data-theme="cmyk"
      aria-labelledby="certificates-heading"
      className="bg-white px-6 py-12 text-slate-900 md:px-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">
              07.
            </span>
            <h2
              id="certificates-heading"
              className="text-2xl font-bold md:text-3xl"
            >
              Certificates &amp; Credentials
            </h2>
            <span className="h-px w-full max-w-sm bg-base-300" />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70">
            A selection of certificates recognizing my academic work,
            achievements, and continued learning.
          </p>
        </div>

        <ChromaGrid
          items={items}
          columns={3}
          minCardWidth={180}
          gap={20}
          radius={260}
          reveal="spotlight"
          aspectRatio="3 / 2"
          cardRadius={20}
          showInfo
          frame={false}
          softness={0.6}
          damping={0.45}
          fadeOut={0.6}
          grayscale={0}
          dim={0}
          glow={0.5}
          borderGlow={1}
          theme="light"
        />
        <p className="mt-5 text-center text-xs text-base-content/60">
          Select a certificate to view the full image.
        </p>
      </div>

      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title ?? "Certificate"}
            className="relative flex max-h-[92vh] w-full max-w-5xl flex-col items-center gap-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close certificate"
              className="absolute -right-2 -top-2 z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-2xl leading-none text-slate-900 shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-right-4 sm:-top-4"
            >
              ×
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.alt ?? selectedCertificate.title ?? ""}
              className="max-h-[82vh] max-w-full rounded-xl bg-white object-contain shadow-2xl"
            />
            {selectedCertificate.title && (
              <p className="text-center text-sm font-semibold text-white">
                {selectedCertificate.title}
                {selectedCertificate.subtitle &&
                  ` · ${selectedCertificate.subtitle}`}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
