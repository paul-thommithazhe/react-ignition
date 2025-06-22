const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-green-100 flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-3xl p-10 text-center">
        <h1 className="text-4xl font-bold text-green-600 mb-4">About Me</h1>
        <p className="text-lg text-gray-700 mb-6">
          👋 Hello! I'm a passionate developer who loves building beautiful user
          experiences and solving real-world problems using React, Flutter, and
          full-stack technologies.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              👨‍💻 Tech Stack
            </h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>React / React Native</li>
              <li>Flutter / Dart</li>
              <li>Node.js / Express</li>
              <li>MongoDB / Firebase</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-800">🚀 Goals</h2>
            <ul className="list-disc list-inside text-gray-600 mt-2">
              <li>Work in Europe or Australia</li>
              <li>Master native mobile integrations</li>
              <li>Build niche apps & plugins</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
