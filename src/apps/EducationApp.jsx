import React from 'react';

export default function EducationApp() {
  const educationTimeline = [
    {
      period: "2023 - 2027",
      degree: "Bachelor of Technology in Computer Science",
      institution: "KIIT University, Bhubaneswar",
      details: "CGPA: 7.25/10 | Relevant Coursework: Data Structures, Algorithms, Operating System, DBMS, OOPs"
    },
    {
      period: "2020 - 2022",
      degree: "Senior Secondary (12th Grade)",
      institution: "B.N.S ENGLISH SCHOOL",
      details: "Subjects: Physics, Chemistry, Mathematics | Percentage: 74%"
    },
    {
      period: "2019 - 2020",
      degree: "Secondary School (10th Grade)",
      institution: "B.N.S ENGLISH SCHOOL",
      details: "Percentage: 76%"
    }
  ];

  return (
    <div className="h-full w-full bg-white text-black p-4 overflow-y-auto font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="text-2xl font-bold mb-4 text-center border-b-2 border-black pb-2">Education Timeline</h1>
      
      <div className="relative border-l-2 border-gray-400 ml-3 pl-4">
        {educationTimeline.map((edu, index) => (
          <div key={index} className="mb-6 relative">
            {/* Timeline dot */}
            <div className="absolute w-3 h-3 bg-black rounded-full -left-[23px] top-1"></div>
            
            <div className="font-bold text-lg mb-1">{edu.degree}</div>
            <div className="flex justify-between items-center text-sm font-bold text-gray-800 mb-1">
              <span>{edu.institution}</span>
              <span className="bg-gray-200 px-2 py-1 rounded text-xs">{edu.period}</span>
            </div>
            <div className="text-sm text-gray-700 italic">
              {edu.details}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
