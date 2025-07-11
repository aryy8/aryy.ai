
import React from 'react';

const SkillsGrid: React.FC = () => {
  const skills = [
    {
      category: "Programming",
      items: "Python, C, C++, JavaScript"
    },
    {
      category: "Web Development",
      items: "React.js, Vite, Next.js, HTML5, CSS3, Tailwind CSS, Supabase, APIs"
    },
    {
      category: "Machine Learning & AI",
      items: "TensorFlow, PyTorch, Scikit-learn, Hugging Face Transformers, OpenCV, YOLO Pandas, NumPy, Matplotlib, Seaborn, Jupyter Notebooks, Google Colab, Kaggle"
    },
    {
      category: "Tools & Platforms",
      items: "Git, GitHub, Postman, Firebase, n8n, Figma"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {skills.map((skill, index) => (
        <div key={index} className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-5 border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-1 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <h4 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{skill.category}:</h4>
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">{skill.items}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsGrid;
