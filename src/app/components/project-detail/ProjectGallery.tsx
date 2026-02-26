"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { GalleryImage } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function GalleryItem({
  image,
  accentColor,
}: {
  image: GalleryImage;
  accentColor: string;
}) {
  return (
    <div
      className="relative w-full h-full overflow-hidden group"
      style={{ background: image.gradient }}
    >
      {image.imageSrc ? (
        <>
          <img
            src={image.imageSrc}
            alt={image.label}
            className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-[rgba(8,8,8,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center px-8">
              <h4
                className="text-[clamp(1.2rem,2vw,1.8rem)] mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {image.label}
              </h4>
              <p
                className="text-[13px] text-[var(--nx-ivory-dim)] max-w-[400px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {image.description}
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#ff5f57] opacity-50" />
                <div className="w-2 h-2 rounded-full bg-[#ffbd2e] opacity-50" />
                <div className="w-2 h-2 rounded-full bg-[#28c840] opacity-50" />
              </div>
              <div
                className="text-[9px] tracking-[0.2em] uppercase opacity-30"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {image.label}
              </div>
            </div>
            <div className="flex-1 flex items-center justify-center py-8">
              <div className="flex flex-wrap gap-3 justify-center">
                {(image.uiElements || []).map((el, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)]"
                  >
                    <span
                      className="text-[clamp(0.8rem,1.5vw,1.1rem)]"
                      style={{
                        fontFamily:
                          i === 0 ? "var(--font-display)" : "var(--font-mono)",
                        color: i === 0 ? accentColor : "var(--nx-ivory-dim)",
                        fontSize: i === 0 ? "1.4rem" : undefined,
                      }}
                    >
                      {el}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm"
                  style={{
                    height: `${20 + Math.sin(i * 0.8) * 30 + Math.random() * 30}%`,
                    background:
                      i > 8
                        ? accentColor
                        : `rgba(255,255,255,${0.03 + i * 0.008})`,
                    opacity: 0.6,
                  }}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-[rgba(8,8,8,0.75)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <div className="text-center px-8">
              <h4
                className="text-[clamp(1.2rem,2vw,1.8rem)] mb-2 tracking-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {image.label}
              </h4>
              <p
                className="text-[13px] text-[var(--nx-ivory-dim)] max-w-[400px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {image.description}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function ProjectGallery({
  images,
  accentColor,
}: {
  images: GalleryImage[];
  accentColor: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const fullImages = images.filter((img) => img.type === "full");
  const splitLeft = images.find((img) => img.type === "split-left");
  const splitRight = images.find((img) => img.type === "split-right");
  const offsetRight = images.find((img) => img.type === "offset-right");

  return (
    <section ref={ref} className="relative py-28 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease }}
          className="mb-20"
        >
          <span className="section-label block mb-4">03 &mdash; APERÇU</span>
          <h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-[0.95] tracking-tight max-w-[500px]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GALERIE
            <br />
            <span className="text-[var(--nx-gold)]">VISUELLE</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {/* 1. Full-width image */}
          {fullImages[0] && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.8, ease }}
              className="aspect-[16/9] border border-[var(--nx-border)] overflow-hidden hover:border-[var(--nx-gold-dim)] transition-all duration-500 hover:scale-[1.01]"
            >
              <GalleryItem image={fullImages[0]} accentColor={accentColor} />
            </motion.div>
          )}

          {/* 2. Two images side by side — asymmetric */}
          {splitLeft && splitRight && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8, ease }}
                className="md:col-span-5 aspect-[4/5] md:aspect-auto md:h-[480px] border border-[var(--nx-border)] overflow-hidden hover:border-[var(--nx-gold-dim)] transition-all duration-500 hover:scale-[1.02]"
              >
                <GalleryItem image={splitLeft} accentColor={accentColor} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.8, ease }}
                className="md:col-span-7 aspect-[16/10] md:aspect-auto md:h-[480px] border border-[var(--nx-border)] overflow-hidden hover:border-[var(--nx-gold-dim)] transition-all duration-500 hover:scale-[1.02]"
              >
                <GalleryItem image={splitRight} accentColor={accentColor} />
              </motion.div>
            </div>
          )}

          {/* 3. Offset right */}
          {offsetRight && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="hidden md:block md:col-span-4" />
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8, ease }}
                className="md:col-span-8 aspect-[16/10] border border-[var(--nx-border)] overflow-hidden hover:border-[var(--nx-gold-dim)] transition-all duration-500 hover:scale-[1.02]"
              >
                <GalleryItem image={offsetRight} accentColor={accentColor} />
              </motion.div>
            </div>
          )}

          {/* 4. Final full-width image */}
          {fullImages[1] && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.75, duration: 0.8, ease }}
              className="aspect-[16/9] border border-[var(--nx-border)] overflow-hidden hover:border-[var(--nx-gold-dim)] transition-all duration-500 hover:scale-[1.01]"
            >
              <GalleryItem image={fullImages[1]} accentColor={accentColor} />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
