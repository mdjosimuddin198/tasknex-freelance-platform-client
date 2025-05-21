import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { FaCrown, FaHeadset, FaLock } from "react-icons/fa6";

const WhyChooseUs = () => {
  const [visible, setVisible] = useState(false);

  const handleVisibility = (inView) => {
    setVisible(inView);
  };

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12">
      <Fade
        direction="up"
        cascade
        damping={0.2}
        triggerOnce={false}
        onVisibilityChange={handleVisibility}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold  mb-4">Why Choose Tasknex?</h2>
          <p className="text-base-200 text-lg mb-8">
            We connect you with the right freelancers, fast and securely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl flex items-center justify-center gap-3 font-semibold text-accent">
                {" "}
                <FaCrown />
                <p>Top Talent</p>
              </h3>
              <p className="text-base-200">
                Only the best freelancers, verified by reviews.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl flex items-center justify-center gap-3 font-semibold text-accent">
                <FaLock />
                <p> Secure Payments</p>
              </h3>
              <p className="text-base-200">
                Funds held in escrow until you're satisfied.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl flex items-center justify-center gap-3 font-semibold text-accent">
                <FaHeadset />
                <p> 24/7 Support</p>
              </h3>
              <p className="text-base-200">
                Our team is here whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default WhyChooseUs;
