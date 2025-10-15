import React from "react";

const JobDescriptionLeft = ({ job }) => {
  return (
    <div className="col-span-2 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold mb-3">Job Description</h2>
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Key Responsibilities</h2>
        <ul className="list-disc px-6 list-outside space-y-2 text-gray-700">
          <li>
            Develop, test, and maintain responsive user interfaces for web and
            mobile applications.
          </li>
          <li>
            Optimize applications for maximum speed, performance, and
            scalability.
          </li>
          <li>Ensure cross-browser compatibility and mobile responsiveness.</li>
          <li>
            Collaborate with back-end developers and designers to improve
            usability.
          </li>
          <li>
            Contribute to sketching sessions involving non-designersCreate,
            iterate and maintain UI deliverables including sketch files, style
            guides, high fidelity prototypes, micro interaction specifications
            and pattern libraries.
          </li>
          <li>Maintain code integrity, organization, and best practices</li>
          <li>
            Stay up to date with emerging technologies, frameworks, and industry
            trends.
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-3">Requirements</h2>
        <ul className="list-disc px-6 list-outside space-y-2 text-gray-700">
          <li>Proven experience as a Front-End Developer or similar role.</li>
          <li>Strong proficiency in HTML5, CSS3, and JavaScript (ES6+).</li>
          <li>
            Hands-on experience with frameworks/libraries such as React,
            Next.Js, or Vue.js.
          </li>
          <li>
            Familiarity with RESTful APIs and integration with back-end
            services.
          </li>
          <li>
            Knowledge of version control systems (e.g., Git, GitHub, GitLab).
          </li>
          <li>Experience with responsive and mobile-first design.</li>
          <li>
            Understanding of cross-browser compatibility and web accessibility
            standards (WCAG/ARIA).
          </li>
          <li>
            Basic knowledge of SEO principles and web performance optimization.
          </li>
          <li>Strong problem-solving skills and attention to detail.</li>
          <li>Excellent communication and teamwork abilities.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-3">
          Preferred Skills (Nice to Have)
        </h2>
        <ul className="list-disc px-6 list-outside space-y-2 text-gray-700">
          <li>Experience with Next.Js</li>
          <li>Familiarity with CSS preprocessors (Sass, Less).</li>
          <li>Knowledge of build tools (Webpack, Vite, Gulp, etc.).</li>
          <li>
            Exposure to UI libraries and frameworks (Bootstrap, Tailwind CSS,
            Material UI).
          </li>
          <li>Understanding of testing frameworks (Jest, Cypress, Mocha).</li>
          <li>Experience with agile/scrum methodologies.</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-3">Why Join Us</h2>
        <ul className="list-disc px-6 list-outside space-y-2 text-gray-700">
          <li>
            {" "}
            Opportunity to work directly with experienced European engineers
          </li>
          <li>
            Exposure to international best practices and modern tech stacks.
          </li>
          <li>Opportunity to work on exciting, impactful projects</li>
          <li>Collaborative and growth-oriented environment</li>
          <li>Flexible working arrangements</li>
          <li> Competitive compensation</li>
        </ul>
        <p className="font-semibold">
          P. S : Since you’ll be working with international teams, clear English
          communication is very important. If you’re not comfortable
          communicating in English, we kindly ask that you do not apply.
        </p>
      </div>
    </div>
  );
};

export default JobDescriptionLeft;
