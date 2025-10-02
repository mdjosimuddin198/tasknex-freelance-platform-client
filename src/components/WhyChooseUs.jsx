import { FaBriefcase, FaShieldAlt, FaUserGraduate } from "react-icons/fa";

const whyData = [
  {
    id: 1,
    title: "Smart Job Recommendations",
    desc: "Get personalized job suggestions based on your skills and experience. Save time and boost opportunities.",
    icon: <FaBriefcase className="w-8 h-8 text-indigo-600" />,
  },
  {
    id: 2,
    title: "Secure & Transparent Process",
    desc: "All companies are verified with clear salary and benefits data. No fraud, only real opportunities.",
    icon: <FaShieldAlt className="w-8 h-8 text-indigo-600" />,
  },
  {
    id: 3,
    title: "Career Support Center",
    desc: "Access resume tips, interview guides, and job alerts — like having a personal career coach with you.",
    icon: <FaUserGraduate className="w-8 h-8 text-indigo-600" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2
          id="why-us-title"
          className="text-3xl sm:text-4xl font-extrabold text-gray-900"
        >
          The Most Trusted Platform for Your Career Growth
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Tailored job matching, direct connections with employers, and real
          success stories — all in one place.
        </p>

        {/* Value Cards */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-transform transform hover:-translate-y-1 p-8 text-left"
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-50 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WhyChooseUs;
