import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
import Folder from "./Folder";
import naypyitaw1 from "../images/Achievement/Naypyitaw1.jpg";
import naypyitaw2 from "../images/Achievement/Naypyitaw2.jpg";
import naypyitaw3 from "../images/Achievement/Naypyitaw3.jpg";
import naypyitaw4 from "../images/Achievement/Naypyitaw4.jpg";
import naypyitaw5 from "../images/Achievement/Naypyitaw5.jpg";
import naypyitaw6 from "../images/Achievement/Naypyitaw6.jpg";
import me from "../images/Me/me6.jpg";

import technortal4 from "../images/Achievement/Technortal4.jpg";
import technortal5 from "../images/Achievement/Technortal5.jpg";
import technortal6 from "../images/Achievement/Technortal6.jpg";
import technortal7 from "../images/Achievement/Technortal7.jpg";
import technortal8 from "../images/Achievement/Technortal8.jpg";
import technortal9 from "../images/Achievement/Technortal9.jpg";
import technortal10 from "../images/Achievement/Technortal10.jpg";

import letstech from "../images/Achievement/Let'stech.jpg";
import letstech1 from "../images/Achievement/Let'stech1.jpg";
import letstech2 from "../images/Achievement/Let'stech2.jpg";
import letstech3 from "../images/Achievement/Let'stech3.jpg";
import letstech4 from "../images/Achievement/Let'stech4.jpg";
import letstech5 from "../images/Achievement/Let'stech5.jpg";
import letstech6 from "../images/Achievement/Let'stech6.jpg";
import HHA from "../images/me/me.png";
import hha from "../images/me/me1.jpg";

import iot1 from "../images/Achievement/Iot1.jpg";
import iot2 from "../images/Achievement/Iot2.jpg";
import iot3 from "../images/Achievement/Iot3.jpg";
import iot4 from "../images/Achievement/Iot4.jpg";
import iot5 from "../images/Achievement/Iot5.jpg";
import iot6 from "../images/Achievement/Iot6.jpg";
import iot7 from "../images/Achievement/Iot7.jpg";
import iot8 from "../images/Achievement/Iot8.jpg";

type GalleryItem = {
  id: number;
  title: string;
  folderLabel: string;
  shortDesc: string;
  type: "award" | "project";
  coverImage: string;
  fullDescription: string;
  galleryImages: string[];
  folderImages?: string[];
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Science Festival",
    folderLabel: "Science Festival",
    shortDesc: "100th Anniversary Science Festival at NSPU",
    type: "award",
    coverImage: me,
    fullDescription:
      "ဒီပြိုင်ပွဲမှာ ကျောင်းကိုယ်စားပြု ဝင်ပြိုင်ခဲ့ပြီး State ကျောင်းသားများအတွက် IT ဆိုတာကိုဘာလဲဆိုတာကို ရှင်းပြရင်း နဲ့ Voting စနစ် နဲ့ ပထမဆုကို ရရှိခဲ့ပါတယ်။",
    galleryImages: [
      naypyitaw1,
      naypyitaw2,
      naypyitaw3,
      naypyitaw4,
      naypyitaw5,
      naypyitaw6,
    ],
  },
  {
    id: 2,
    title: "Technortal One Project One Week Hackathon",
    folderLabel: "One Project One Week",
    shortDesc: "1st Runner-Up at One Project One Week Hackathon",
    type: "project",
    coverImage: technortal8,
    fullDescription:
      "Technortal က ကျင်းပတယ့် One Project One Week ဆိုတယ့် Hackathon မှာ Taxi-Meik-Swe ဆိုသော SME Product နဲ့ First-Runner Up ဆုကို ရရှိခဲ့ပါတယ်။",
    galleryImages: [
      technortal4,
      technortal5,
      technortal6,
      technortal7,
      technortal9,

      technortal10,
    ],
  },
  {
    id: 3,
    title: "Let's Tech Hub's AI Edition Hackathon",
    folderLabel: "AI Edition",
    shortDesc: "Hackathon Competitor & Build at Let's Tech Hub",
    type: "project",
    coverImage: HHA,
    fullDescription:
      "Let's Tech Hub မှာ ကျင်းပတယ့် AI Edition ဆိုတယ့် Hackathon မှာ AURA AI ဆိုသော Project နဲ့ ဝင်ပြိုင်ခဲ့ပြီး အောင်မြင်စွာ ပြီးဆုံးခဲ့ပါတယ်။",
    galleryImages: [
      hha,
      letstech,
      letstech1,
      letstech2,
      letstech3,
      letstech4,
      letstech5,
      letstech6,
    ],
  },
  {
    id: 4,
    title: "IoT Based Smart Surveillance System",
    folderLabel: "Smart Surveillance",
    shortDesc: "IoT Based Smart Surveillance System Project",
    type: "project",
    coverImage: iot4,
    fullDescription:
      "Iot ကိုအခြေပြုထားပြီး သွားလာရခက်ခဲသော နေရာများကို တိုက်ရိုက် စောင့်ကြည့်နိုင်ပြီး Video ကို record ရရှိနိုင်အောင် Database ပါသော Smart Surveillance System ကို ပြုလုပ်ခဲ့ပြီး Fourth Year Project အနေနဲ့ တင်ပြခဲ့ပါတယ်။",
    galleryImages: [iot1, iot2, iot3, iot4, iot5, iot6, iot7, iot8],
    folderImages: [iot1, iot2, iot3, iot4, iot6, iot8],
  },
];

export default function Achievements() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedPhotoAlt, setSelectedPhotoAlt] = useState("");
  const [openFolderIndex, setOpenFolderIndex] = useState<number | null>(null);
  const closePhotoButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!selectedPhoto) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closePhotoButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPhoto(null);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previouslyFocusedRef.current?.focus();
    };
  }, [selectedPhoto]);

  const openPhoto = (item: GalleryItem, photoIndex: number) => {
    const photos = item.folderImages ?? item.galleryImages.slice(0, 6);
    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    setSelectedPhoto(photos[photoIndex]);
    setSelectedPhotoAlt(`${item.title} photo ${photoIndex + 1}`);
  };

  return (
    <section
      id="achievements"
      data-theme="cmyk"
      className="relative overflow-hidden bg-white px-6 py-12 text-slate-900 md:px-12 md:py-16"
    >
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-4">
            <span className="font-mono text-lg font-semibold text-primary">
              04.
            </span>
            <h2 className="text-2xl font-bold text-base-content md:text-3xl">
              Milestones &amp; Highlights
            </h2>
            <span className="h-px w-full max-w-sm bg-base-300" />
          </div>
          <p className="max-w-2xl text-sm leading-6 text-base-content/70">
            A few milestones, competitions, and projects from my journey.
          </p>
        </div>

        <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item, index) => {
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="flex min-w-0 flex-col items-center text-center"
                style={{
                  position: "relative",
                  zIndex: openFolderIndex === index ? 10 : 0,
                }}
              >
                <div className="flex h-[310px] w-full items-center justify-center">
                  <Folder
                    items={(item.folderImages ?? item.galleryImages.slice(0, 6)).map((image, photoIndex) => ({
                      image,
                      alt: `${item.title} photo ${photoIndex + 1}`,
                      title: `Photo ${photoIndex + 1}`,
                    }))}
                    label={item.folderLabel}
                    className="mx-auto"
                    size={1.1}
                    color={
                      item.id === 1
                        ? "#d29b35"
                        : item.id === 2
                          ? "#d9f34f"
                          : item.id === 3
                            ? "#7c2ce8"
                          : "#0f8b8d"
                    }
                    paperColor="#fffdf8"
                    tabPosition="center"
                    mode="book"
                    layout="spread"
                    openOn="click"
                    draggable={false}
                    zoomOnClick={false}
                    peek={false}
                    intro={false}
                    closeOnOutsideClick={false}
                    theme="light"
                    open={openFolderIndex === index}
                    onOpenChange={(isOpen) =>
                      setOpenFolderIndex(isOpen ? index : null)
                    }
                    onItemClick={(_, photoIndex) =>
                      openPhoto(item, photoIndex)
                    }
                  />
                </div>
                <h3 className="mt-2 max-w-xs text-base font-bold text-base-content">
                  {item.title}
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-base-content/70">
                  {item.shortDesc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedPhoto &&
        createPortal(
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-neutral/90 p-4 backdrop-blur-sm sm:p-8"
          role="presentation"
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhotoAlt}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative flex max-h-[90vh] w-full max-w-5xl items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closePhotoButtonRef}
              type="button"
              onClick={() => setSelectedPhoto(null)}
              aria-label="Close enlarged photo"
              className="absolute -right-2 -top-2 z-10 grid h-9 w-9 place-items-center rounded-full bg-white text-neutral-900 shadow-lg transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:-right-4 sm:-top-4"
            >
              <FaTimes aria-hidden="true" size={14} />
            </button>
            <img
              src={selectedPhoto}
              alt={selectedPhotoAlt}
              className="max-h-[85vh] max-w-full rounded-xl object-contain shadow-2xl"
            />
          </motion.div>
        </div>,
        document.body,
      )}
    </section>
  );
}
