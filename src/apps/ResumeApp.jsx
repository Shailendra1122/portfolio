import React from 'react';

export default function ResumeApp() {
  return (
    <div className="h-full w-full bg-white text-black p-4 overflow-y-auto font-serif" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="text-2xl font-bold mb-2 text-center border-b-2 border-black pb-2">Shailendra Pratap Singh</h1>
      <div className="text-center text-sm mb-4">
        shailendraprbns@gmail.com | github.com/Shailendra1122 | linkedin.com/in/shailendra-pratap-singh-067281362/
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-lg mb-1 uppercase tracking-wider border-b border-gray-400">Education</h2>
        <div className="flex justify-between font-bold">
          <span>Bachelor of Technology in Computer Science</span>
          <span>2023 - 2027</span>
        </div>
        <div className="italic text-gray-700 mb-1">KIIT University, Bhubaneswar</div>
        <ul className="list-disc list-inside text-sm">
          <li>CGPA: 7.25/10</li>
          <li>Relevant Coursework: Data Structures, Algorithms, Operating System, DBMS, OOPs</li>
        </ul>
      </div>


      <div>
        <h2 className="font-bold text-lg mb-1 uppercase tracking-wider border-b border-gray-400">Projects</h2>
        
        <div className="font-bold">JPMorganChase Software Engineering Job Simulation (Forage) [GitHub]</div>
        <ul className="list-disc list-inside text-sm mb-2">
          <li>Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using configurable topics and embedded Kafka testing.</li>
          <li>Implemented transaction validation and persistence using Spring Data JPA with an H2 SQL database, including balance updates across relational User entities.</li>
          <li>Connected the service to an external REST Incentive API using RestTemplate and incorporated incentive responses into transactional workflows.</li>
          <li>Developed REST endpoints for querying user balances, returning JSON responses via Spring controllers with clean architectural separation.</li>
          <li>Verified system behavior using Maven test suites and debugger-driven inspection across messaging, database, and API layers.</li>
        </ul>

        <div className="font-bold">CoLab Connect – Open Innovation &amp; Collaboration Platform [GitHub]</div>
        <ul className="list-disc list-inside text-sm mb-2">
          <li>Architected a merit-based collaboration platform enabling users to publish projects and recruit team members independent of technical background.</li>
          <li>Built RESTful APIs using Node.js and Express for authentication, project CRUD operations, and premium boosting features.</li>
          <li>Designed a scalable MongoDB schema to manage user relationships, project versioning, and status tracking.</li>
          <li>Developed a minimalist, accessible UI using Tailwind CSS as a simplified alternative to GitHub for idea sharing.</li>
        </ul>

        <div className="font-bold">Back-End Web Development – Booking Management System (1Stop)</div>
        <ul className="list-disc list-inside text-sm">
          <li>Built a ticket booking and blogging web application using Laravel and PHP.</li>
          <li>Developed user and admin panels for booking management, event control, and blog publishing.</li>
          <li>Implemented responsive UI using Bootstrap and optimized database queries to improve performance.</li>
        </ul>
      </div>
    </div>
  );
}
