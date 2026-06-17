import React from 'react';

const steps = [
  {
    title: "Consultation & Conceptualization",
    desc: "In-depth discussions to understand your event objectives, aesthetic preferences, venue characteristics, budget, and timeline. Initial concepts and mood boards presented for your review."
  },
  {
    title: "Design Development",
    desc: "Selected concepts developed into detailed 3D renderings with accurate dimensions, material specifications, and color palettes. Preview exactly how the final installation will appear in your venue."
  },
  {
    title: "Manufacturing & Quality Control",
    desc: "Approved designs move into production with skilled craftsmen bringing them to life. Progress updates and quality checkpoints ensure alignment with specifications."
  },
  {
    title: "Logistics & Installation",
    desc: "Our logistics team coordinates delivery and installation crew assembles everything on-site. Efficient, minimally disruptive execution ensuring flawless results."
  },
  {
    title: "Support & Follow-up",
    desc: "Available throughout your event for any adjustments. Coordinate dismantling and removal at conclusion with full post-event support."
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#010101] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold uppercase tracking-tighter mb-4">
            Our <span className="text-[#f15483]">Collaborative</span> Process
          </h2>
          <p className="text-[#958f89] max-w-2xl text-base">From initial consultation through design, manufacturing, logistics, installation, and post-event support, we provide end-to-end project coordination that eliminates the stress of managing multiple vendors.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <span className="text-5xl font-black text-white/10 mb-4 block">0{i + 1}</span>
              <div className="relative z-10">
                <div className="h-1 w-8 bg-[#940242] mb-4"></div>
                <h4 className="font-bold uppercase tracking-widest text-sm mb-3">{step.title}</h4>
                <p className="text-[#958f89] text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;