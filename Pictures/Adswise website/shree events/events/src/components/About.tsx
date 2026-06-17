import { CheckCircle, Award, Users, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award />,
      title: "Manufacturing Excellence",
      desc: "Decade+ of experience with state-of-the-art facilities employing traditional craftsmanship and advanced technology."
    },
    {
      icon: <Globe />,
      title: "Pan-India Coverage",
      desc: "Trusted wedding stage manufacturers across Mumbai, Bangalore, Pune, Delhi NCR, Hyderabad, Chennai, Kolkata, and Ahmedabad."
    },
    {
      icon: <CheckCircle />,
      title: "Quality Assurance",
      desc: "Export quality standards with integrated quality control throughout production workflow and 95%+ on-time delivery."
    },
    {
      icon: <Users />,
      title: "Expert Team",
      desc: "Skilled craftsmen, designers, and project managers with collaborative approach to every project."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-[#e7e8e2]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold uppercase mb-6 border-l-8 border-[#940242] pl-6">
            About Shree Events
          </h2>
          <p className="text-[#958f89] max-w-3xl text-base leading-relaxed">
            Welcome to India's most trusted name in event staging and decoration manufacturing. We are specialists in wedding stage manufacturing and event decoration manufacturing with comprehensive expertise in creating magnificent stages, mandaps, and decoration concepts for weddings, corporate events, film productions, and exhibitions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-sm hover:shadow-lg transition-shadow">
              <div className="text-[#940242] mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold uppercase text-sm tracking-wider mb-3">{item.title}</h3>
              <p className="text-[#958f89] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white p-12 rounded-sm">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 border-b-2 border-[#940242] pb-4">Our Core Strengths</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Custom Design Capability with 3D visualizations before manufacturing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Scalable Production from single pieces to nationwide campaigns</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Flexible Service Models: Purchase, Rental, or Hybrid arrangements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Complete Project Management from consultation to post-event dismantling</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase mb-6 border-b-2 border-[#940242] pb-4">Why Choose Us</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Export Quality Standards meeting international benchmarks</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Proven Track Record across thousands of successful projects</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Timeline Reliability with 95%+ on-time delivery rate</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#940242] font-bold">✓</span>
                <span className="text-[#958f89]">Sustainability Commitment with eco-friendly manufacturing practices</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-[#010101] text-white p-12 rounded-sm">
          <h3 className="text-2xl font-bold uppercase mb-8 border-b-2 border-[#f15483] pb-4">Our Material Expertise</h3>
          <p className="text-[#958f89] mb-6">Our manufacturing facility represents a significant investment in equipment, technology, and skilled craftsmanship, maintaining capabilities spanning:</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-[#f15483] mb-3 uppercase text-sm">Traditional Crafts</h4>
              <p className="text-[#958f89] text-sm">Premium hardwoods, hand-carved pillars, and traditional woodworking with cultural authenticity.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#f15483] mb-3 uppercase text-sm">Advanced Technology</h4>
              <p className="text-[#958f89] text-sm">CNC machining, 3D printing for prototypes, powder-coated metals, and specialized finishing techniques.</p>
            </div>
            <div>
              <h4 className="font-bold text-[#f15483] mb-3 uppercase text-sm">Premium Materials</h4>
              <p className="text-[#958f89] text-sm">Architectural-grade acrylics, weather-resistant fabrics, and specialty finishes for visual effects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
