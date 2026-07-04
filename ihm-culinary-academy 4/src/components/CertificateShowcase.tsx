import React, { useState } from "react";
import { ChefCertificate } from "../types";
import { mockCertificates } from "../data/generalData";
import { Trophy, Award, Flame, Star, ShieldCheck, Printer, Check } from "lucide-react";

export default function CertificateShowcase() {
  const [studentName, setStudentName] = useState("Kalyan Singh");
  const [selectedCert, setSelectedCert] = useState<ChefCertificate>(mockCertificates[0]);
  const [printing, setPrinting] = useState(false);

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      setPrinting(false);
      window.print();
    }, 1500);
  };

  return (
    <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-b from-neutral-900 to-neutral-950 border border-neutral-800">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <span className="text-amber-500 text-xs font-mono tracking-widest uppercase block mb-1">
          Interactive Honor Board
        </span>
        <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          Hospitality Certificate Showcase
        </h3>
        <p className="text-xs text-neutral-400 mt-1 max-w-lg mx-auto">
          Prove your academic readiness. Select a certification board below, type your name, and generate a gold-embossed graduation award.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column configuration tools */}
        <div className="lg:col-span-5 space-y-5">
          {/* Typable Name box */}
          <div className="p-4 bg-neutral-900/60 border border-neutral-805 rounded-xl">
            <label className="block text-[10px] uppercase font-mono text-neutral-400 pb-2 font-bold">
              Type Recipient Name
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-lg bg-neutral-950 border border-neutral-800 text-sm font-semibold text-white focus:outline-none focus:border-amber-500/40"
              placeholder="e.g. Chef Kalyan Singh"
              maxLength={36}
            />
          </div>

          {/* Certificate options list */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 font-bold block pl-1">
              Select Certifying Board
            </span>
            {mockCertificates.map((cert) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className={`p-4 rounded-xl border transition-all cursor-pointer flex gap-3 ${
                  selectedCert.id === cert.id
                    ? "bg-amber-505 bg-amber-500/10 border-amber-500 text-white shadow-lg"
                    : "bg-neutral-900 border-neutral-800 text-stone-400 hover:border-neutral-700"
                }`}
              >
                <div className="p-2 rounded bg-neutral-950 text-amber-500 self-start">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-snug">{cert.title}</h4>
                  <p className="text-[10px] text-neutral-400 mt-0.5">{cert.issuedBy}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Print simulator */}
          <button
            onClick={handlePrint}
            className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs tracking-widest uppercase transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {printing ? (
              <>
                <Check className="w-4 h-4 animate-bounce text-emerald-950" />
                <span>Preparing High-Res PDF...</span>
              </>
            ) : (
              <>
                <Printer className="w-4 h-4" />
                <span>Print Diploma Frame</span>
              </>
            )}
          </button>
        </div>

        {/* Right column: Interactive Visual Frame */}
        <div className="lg:col-span-7 flex justify-center">
          <div className="relative w-full max-w-[500px] aspect-[1.41/1] bg-stone-900 rounded-xl overflow-hidden shadow-2xl p-4 md:p-6 text-stone-200 border-4 border-double border-amber-500/40 select-none bg-radial-gradient">
            {/* Elegant Luxury Background Watermark Stamp */}
            <div className="absolute inset-2 border border-amber-500/10 rounded-lg pointer-events-none" />
            <div className="absolute inset-4 border border-amber-500/5 rounded-lg pointer-events-none" />

            {/* Inner certificate details */}
            <div className="h-full flex flex-col justify-between items-center text-center p-2 relative bg-neutral-900/30">
              {/* Gold Header Emblem */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border border-amber-500/40 flex items-center justify-center bg-stone-950 text-amber-500 mb-1 shadow-md">
                  <Award className="w-5 h-5 animate-spin-slow" />
                </div>
                <span className="text-[7px] uppercase font-mono tracking-[0.3em] text-amber-400 font-bold mb-1">
                  OFFICIAL CAMPUS CREDENTIAL
                </span>
                <span className="text-[10px] text-neutral-400 italic">This document confirms that</span>
              </div>

              {/* Recipient Student Name in script display */}
              <div className="my-1.5">
                <h4 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 tracking-tight capitalize font-sans leading-none min-h-[30px]">
                  {studentName || "YOUR NAME HERE"}
                </h4>
                <div className="w-24 h-[1px] bg-amber-500/20 mx-auto mt-2" />
              </div>

              {/* Certification Statement */}
              <div>
                <p className="text-[8px] md:text-[10px] text-zinc-400 max-w-sm leading-relaxed">
                  Has successfully attended masterclass segments and demonstrated continuous technical excellence in
                  the curriculum of <span className="text-white font-bold">{selectedCert.title}</span>.
                </p>
              </div>

              {/* Certified Skills list */}
              <div className="flex flex-wrap justify-center gap-1.5 max-w-md my-2">
                {selectedCert.skillsCertified.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[6.5px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-full bg-neutral-950/80 border border-amber-500/15 text-stone-300"
                  >
                    &bull; {skill}
                  </span>
                ))}
              </div>

              {/* Signatures & Stamp block */}
              <div className="w-full flex justify-between items-end px-4 mt-1 font-mono">
                {/* Director */}
                <div className="text-left">
                  <div className="text-[10px] italic text-amber-500/80 font-serif leading-none min-h-[12px] mb-1">
                     Kalyan Singh
                  </div>
                  <div className="w-14 h-[1px] bg-neutral-600 mb-0.5" />
                  <span className="text-[6px] text-neutral-500 uppercase block tracking-wider">
                    Academy Dean
                  </span>
                </div>

                {/* Gold Embossed Foil Stamp */}
                <div className="relative flex justify-center items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 border-2 border-dashed border-amber-500 bg-gradient-to-tr from-amber-500 to-yellow-300 animate-pulse flex items-center justify-center text-stone-900 shadow-lg">
                    <ShieldCheck className="w-4 h-4 text-neutral-950" />
                  </div>
                </div>

                {/* Registrar */}
                <div className="text-right">
                  <div className="text-[10px] italic text-neutral-450 leading-none min-h-[12px] mb-1">
                    IHM_C.A_Sec2026
                  </div>
                  <div className="w-14 h-[1px] bg-neutral-600 mb-0.5" />
                  <span className="text-[6px] text-neutral-500 uppercase block tracking-wider">
                    IHM Registrar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
