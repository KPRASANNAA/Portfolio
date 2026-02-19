import CertificationFlipCard from "./components/CertificationFlipCard";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">Portfolio</h1>

        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#certifications" className="hover:text-white">
  Certifications
</a>
          <a href="#resume" className="hover:text-white">
  Resume
</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          

        </div>
      </nav>

<div className="flex justify-center w-full mb-8">
  <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-full h-full object-cover 
                 transition duration-500 hover:scale-110"
    />
  </div>
</div>







      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 px-6
                    animate-[fadeIn_1.5s_ease-in-out]">

        <h2 className="text-5xl font-extrabold">
          Hi, I'm <span className="text-blue-400">Shital Singh</span> 👋
        </h2>

        <p className="mt-4 text-lg text-gray-400 max-w-xl">
            IOT engineer & Embedded System 
        </p>

          {/* Welcome Sentence (Put Before Tech Pills) */}
  <p className="mt-6 text-gray-300 text-lg max-w-2xl leading-relaxed">
    Welcome to my portfolio. I create IoT-driven Embedded systems for automation,
    safety, and connected environments.
  </p>
        
          {/* Tech Stack Pills */}
  <div className="flex justify-center gap-4 mt-8 flex-wrap">

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Raspberry Pi
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Arduino
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      ESP32
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Sensors
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      Embedded C
    </span>

    <span className="px-6 py-2 rounded-full bg-[#151a3a] border border-indigo-500 text-indigo-200 font-medium">
      IoT Platforms
    </span>

  </div>


      </section>

      
      
      <section id="about" className="mt-32 px-10">

  {/* Section Heading */}
  <h2 className="text-4xl font-bold mb-10">
    About Me
  </h2>

  {/* Two Box Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* ABOUT BOX */}
    <div className="p-10 rounded-2xl border border-gray-700 
    bg-gradient-to-b from-gray-900 to-black shadow-xl">

      <h3 className="text-2xl font-bold text-blue-400 mb-5">
        Who I Am 👨‍🎓
      </h3>

      <p className="text-gray-300 leading-relaxed text-lg">
        I am an IoT and Embedded Systems Developer with a strong passion for
        designing and building smart, innovative solutions using technologies
        like Arduino, Raspberry Pi, sensors, and microcontrollers. I enjoy
        working on projects that combine automation, safety, and real-time
        monitoring to solve practical real-world problems.
      </p>
    </div>

    {/* MY APPROACH BOX */}
    <div className="p-10 rounded-2xl border border-gray-700 
    bg-gradient-to-b from-gray-900 to-black shadow-xl">

      <h3 className="text-2xl font-bold text-blue-400 mb-5">
        My Approach 🧠
      </h3>

      <p className="text-gray-300 leading-relaxed text-lg">
        I believe in creating technology that is not only functional but also
        meaningful. My focus is on clean embedded design, IoT innovation, and
        real-time solutions that improve safety, efficiency, and everyday life.
      </p>
    </div>


 {/* Career Objective Box */}
    <div className="p-8 rounded-2xl bg-[#0b1220] border border-gray-700">
      <h3 className="text-2xl font-bold text-green-400">
        Career Objective 🎯
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        My goal is to build a career in Industrial IoT and Embedded Systems,
        focusing on real-time monitoring, automation, and worker safety
        solutions.
      </p>
    </div>

    {/* Internship Interest Box */}
    <div className="p-8 rounded-2xl bg-[#0b1220] border border-gray-700">
      <h3 className="text-2xl font-bold text-yellow-400">
        Looking for Opportunities 🔍
      </h3>
      <p className="text-gray-300 mt-4 leading-relaxed">
        I am actively seeking internship opportunities in IoT, Embedded Systems,
        and Smart Industrial Automation where I can apply my skills in sensor
        integration, Raspberry Pi, and real-time safety monitoring.
      </p>
    </div>

    </div>
  </section>



      
      {/* Skills Section */}
        <section id="skills" className="mt-32 px-10">

  {/* Small Title */}
  <p className="text-lg text-teal-400 tracking-widest uppercase">
  Skills
</p>


  {/* Main Title */}
  <h1 className="text-2xl font-extrabold mt-2">
    Hard & Soft Skills 
  </h1>

  {/* Skills Grid */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Card 1 */}
    <SkillBox
      title="Programming 💻"
      skills={["C++", "Python", "Embedded C" , "MicroPython" , "JavaScript" , "HTML" , "CSS" , "Crystal programming language"]}
    />

    {/* Card 2 */}
    <SkillBox
      title="Tools 🛠️"
      skills={["Arduino IDE", "Raspberry Pi os", "Wokwi", "Blynk io platform", "Proteus 8 Professional","Thinkspeak IoT platform"]}
    />

 
    {/* Card 3 */}
    <SkillBox
      title="Core Competencies ⭐"
      skills={["Effective Communication", "Team Collaboration", "Problem Solving", "Time Management", "Adaptability", "Critical Thinking", "Leadership", "Creativity"]}
    />
  
    {/* Learning Journey Box */}
<div className="p-8 rounded-2xl border border-gray-700 
bg-gradient-to-b from-gray-900 to-black shadow-lg">

  {/* Title */}
  <h3 className="text-xl font-bold text-purple-400 mb-4">
    Learning Journey 🚀
  </h3>

  {/* Description */}
  <p className="text-gray-300 leading-relaxed mb-5">
    My skill set is constantly evolving. Currently exploring:
  </p>

  {/* Learning Chips */}
  <div className="flex flex-wrap gap-3">
    {["Docker", "IoT Device Security", "Firebase", "TensorFlow Lite", "HTTP/REST APIs"].map(
      (tech, index) => (
        <span
          key={index}
          className="px-4 py-1 rounded-full bg-gray-800 
          text-gray-200 text-sm hover:bg-gray-700 transition"
        >
          {tech}
        </span>
      )
    )}
  </div>
</div>

  </div>
</section>

      {/* Projects */}
      <section id="projects" className="mt-24 px-10">
  <h2 className="text-4xl font-bold mb-10">
    Projects
  </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard
            title="Smart Vacuum Cleaner Robot"
            desc=" An automatic cleaning robot built using Arduino to reduce manual cleaning effort.  
                  It is designed to detect obstacles and navigate smoothly around the environment.  
                  The robot performs efficient floor cleaning using motors and sensor integration.  
                  This project demonstrates embedded system design, automation, and IoT-based innovation.  "
            img="/projects/Pic1.png"
            githubLink="https://github.com/shital008-JH/Smart-Vacuum-Cleaner-Robot"
          />

          <ProjectCard
            title="Home Automation System using Raspberry Pi"
            desc=" A smart home automation system built using Raspberry Pi and sensors.  
                  It enables remote control of home appliances, monitoring of environmental conditions, and automated responses to events.  
                  This project showcases skills in embedded systems, IoT development, and practical automation solutions."
            img="/projects/Pic3.png"
            githubLink="https://github.com/shital008-JH/Home-Automation-System-using-Raspberry-Pi"
          />
          
          <ProjectCard
            title="Networked ESP32 AI Voice Assistant"
            desc=" This project is an ESP32-based networked voice assistant device powered by remote LLM inference.  
                  It captures voice input, sends it to a server for AI processing, and returns intelligent responses in real time.  
                  The system includes configurable role memory, allowing personalized and context-aware interactions.  
                  This project demonstrates skills in embedded systems, IoT networking, and AI integration with edge devices." 
            img="/projects/Pic4.jpeg"
            githubLink="https://github.com/shital008-JH/Networked-ESP32-AI-Voice-Assistant"
          />

          <ProjectCard
            title="Automatic fan control system using Arduino"
            desc="An automatic fan control system built using Arduino to regulate fan speed based on temperature and humidity.
                  The system uses sensors to monitor environmental conditions and adjusts fan speed accordingly.
                  This project demonstrates skills in embedded programming, sensor integration, and practical automation solutions."
            img="/projects/Pic5.jpeg"
            githubLink="https://github.com/shital008-JH/Automatic-fan-control-system-using-Arduino"
          />

        <ProjectCard
            title="NeuroShift-Embedded"
            desc=" NeuroShift-Embedded is an innovative project focused on intelligent embedded system development.  
                  It combines microcontroller-based hardware with smart decision-making capabilities.  
                  The system is designed to improve automation, efficiency, and real-time responsiveness.  
                  This project highlights skills in embedded programming, IoT integration, and modern technology solutions."
            img="/projects/Pic2.png"
            githubLink="https://github.com/shital008-JH/NeuroShift-Embedded"
            />

            <ProjectCard
            title="MindMirror"
            desc="MindMirror is a smart project designed to support mental wellness through self-reflection and mood tracking.  
                  It helps users record thoughts, monitor emotional patterns, and gain insights over time.  
                The system can integrate AI-based analysis to provide personalized suggestions and supportive feedback.  
                This project demonstrates skills in innovative problem-solving, human-centered design, and intelligent application development. "
            img="/projects/Pic6.jpeg"
            githubLink="https://github.com/shital008-JH/MindMirror"
            />

            <ProjectCard
            title=" Crypto-Pulse"
            desc=" Crypto-Pulse is a web-based application that provides real-time cryptocurrency price tracking.  
                  It fetches live market data and displays the latest values of popular coins like Bitcoin and Ethereum.  
                  The project includes an interactive and user-friendly interface for monitoring price changes and trends.  
                  This project demonstrates skills in API integration, web development, and real-time data handling. "
            img="/projects/Pic7.jpeg"
            githubLink="https://github.com/shital008-JH/CryptoPulse"
            />

            <ProjectCard
            title="Weather-App"
            desc=" A weather application that provides real-time weather updates and forecasts for any location.  
                  It integrates with a weather API to fetch current conditions, temperature, humidity, and other relevant data.  
                  The app features a clean and intuitive UI that allows users to easily access and interpret weather information.  
                  This project demonstrates skills in API integration, responsive UI design, and user experience optimization."
            img="/projects/Pic8.png"
            githubLink="https://github.com/shital008-JH/Weather-App"
            />

            <ProjectCard
            title="Timer-Alarm"
            desc=" A timer and alarm application that allows users to set custom timers and alarms.  
                  The app features a clean and intuitive interface for managing time-based events.  
                  It supports multiple alarms, countdown timers, and customizable sound settings.  
                  This project demonstrates skills in UI/UX design, event handling, and user interaction optimization."
            img="/projects/Pic9.png"
            githubLink="https://github.com/shital008-JH/Timer-Alarm"
            />
        </div>
      </section>


<section id="certifications" className="mt-20 px-10"> 

  {/* Section Heading */}
  <h2 className="text-4xl font-bold mb-10">
    Certifications
  </h2>

  {/* ✅ ONE GRID FOR ALL CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

    <CertificationFlipCard
      title="Full-Throttle Race"
      issuer="ADVITIYA (IIT Ropar)"
      date="February 2025"
      skills={[
        "Racecraft",
        "Hardware Communication",
        "Circuit Design",
      ]}
      img="/projects/IIT.png"
      link="https://drive.google.com/file/d/1N30eJ2CfvJo3HDInhzx-h063trQo2J98/view?usp=sharing"
    />

    <CertificationFlipCard
      title="LPU Hackathon (Hardware Based)"
      issuer="LPU (School of EEE)"
      date="March 2025"
      skills={[
        "Microcontroller Programming",
        "Hardware Coding",
        "Circuit Design",
      ]}
      img="/projects/LPU.png"
      link="https://drive.google.com/file/d/1CtSglRqPM2GmBr0wEAx7yQ1qZbt1g8Ig/view?usp=sharing"
    />

    <CertificationFlipCard
      title="Bootcamp on AI"
      issuer="Smarted"
      date="June 2025"
      skills={[
        "Data Preprocessing",
        "Model Deployment",
        "Deep Learning with TensorFlow",
      ]}
      img="/projects/AI.jpeg"
      link="https://drive.google.com/file/d/1W0mV7w868kQv2E_Ql_SFk8NtbEes8yT9/view?usp=sharing"
    />

    

    

    <CertificationFlipCard
      title="Event Organizer Recognition – Hack Node India"
      issuer="Hack Node India (Lovely Professional University)"
      date="August 2025"
      skills={[
        "Event Management",
        "Community Engagement",
        "Team Coordination",
      ]}
      img="/projects/HAIN.jpeg"
      link="https://drive.google.com/file/d/11NMM5DghwaTrtZJjJurgORuwLzXdu3tq/view?usp=sharing"
    />


    <CertificationFlipCard
      title=" Short-Term Course on IoT "
      issuer="LPU Human Resource Development Center "
      date="August 2024"
      skills={[
      "Microcontroller Programming",
      "IoT Fundamentals",
      "Hardware Integration",
      ]}
      img="/projects/IOT.png"
      link="https://drive.google.com/file/d/1kQu3aUjIHeQV0QWdotMwEKLGUyf4G-Eb/view?usp=sharing"
    />


    
    <CertificationFlipCard
      title="Computer Science 101"
      issuer="Udemy"
      date="October 2023"
      skills={[
        "Computational Thinking",
        "Algorithms",
        "Logical Thinking",
      ]}
      img="/projects/cse101.png"
      link="https://drive.google.com/file/d/1L_1dpPzLj_N-K8mp7t2Vg1O4XVEeBMtw/view?usp=sharing"
    />

  </div>

</section>




{/* ================= RESUME SECTION ================= */}
<section id="resume" className="mt-32 px-10">



  {/* Title */}
  <div className="text-center">
    <h2 className="text-5xl font-extrabold">
      My <span className="text-blue-400">Resume</span>
    </h2>

    <div className="w-28 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
  </div>

  {/* Contact Pills Row */}
<div className="flex justify-center flex-wrap gap-6 mt-10">

  {/* Email */}
<a
  href="mailto:shitalsingh044@gmail.com"
  className="flex items-center gap-2 px-5 py-2 rounded-full 
             bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md
             hover:border-blue-500 hover:text-white transition"
>
  📧
  <span className="text-sm">shitalsingh044@gmail.com</span>
</a>


  {/* Phone */}
  <div className="flex items-center gap-2 px-5 py-2 rounded-full 
                  bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md">
    📱
    <span className="text-sm">+91-8341152243</span>
  </div>

  {/* LinkedIn */}
  <a
    href="https://linkedin.com/in/shitalsingh2808"
    target="_blank"
    className="flex items-center gap-2 px-5 py-2 rounded-full 
               bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md 
               hover:border-blue-500 hover:text-white transition"
  >
    🔗 <span className="text-sm">LinkedIn</span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/shital008-JH"
    target="_blank"
    className="flex items-center gap-2 px-5 py-2 rounded-full 
               bg-[#0b1220] border border-gray-700 text-gray-200 shadow-md 
               hover:border-blue-500 hover:text-white transition"
  >
    💻 <span className="text-sm">GitHub</span>
  </a>

</div>


  {/* Tabs */}
  <div className="flex justify-center gap-8 mt-12 text-gray-400 font-semibold">
    <button className="px-6 py-2 rounded-xl bg-blue-600 text-white">
      Education
    </button>
    {/* <button className="hover:text-white">Skills</button>
    <button className="hover:text-white">Projects</button>
    <button className="hover:text-white">Certificates</button> */}
  </div>

  {/* Resume Cards */}
  <div className="mt-16 space-y-8 max-w-5xl mx-auto">

  

    {/* Card 1 */}
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Lovely Professional University
          </h3>
          <p className="text-gray-400 mt-1">Punjab, India</p>

          <p className="mt-4 text-gray-200">
            Bachelor of Technology - Electronics & Communication Engineering(IOT)
          </p>

          <p className="text-gray-400 mt-2">
            CGPA: 7.0+
          </p>
        </div>

        <span className="px-4 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
          Since Aug 2023
        </span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            Narayana College
          </h3>
          <p className="text-gray-400 mt-1">Andhra Pradesh, India</p>

          <p className="mt-4 text-gray-200">
            Intermediate (12th)
          </p>
          
          <p className="mt-4 text-gray-200">
            Percentage: 70%
          </p>
        </div>

        <span className="px-4 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
          2021 - 2022
        </span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">
      <div className="flex justify-between items-start">

        <div>
          <h3 className="text-2xl font-bold text-blue-400">
            D.A.V School
          </h3>
          <p className="text-gray-400 mt-1">Andhra Pradesh, India</p>

          <p className="mt-4 text-gray-200">
            Matriculation (10th)
          </p>
          
          <p className="mt-4 text-gray-200">
            Percentage: 80%
          </p>
        </div>

        <span className="px-4 py-1 bg-blue-900 text-blue-300 rounded-full text-sm">
          2020 - 2021
        </span>
      </div>
    </div>
  </div>

  {/* Download Button */}
  <div className="flex justify-center mt-16">
    <a
      href="/resume/Shital_Resume.pdf"
      download
      className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition"
    >
      📄 Download Resume
    </a>
  </div>
</section>


      {/* Contact */}
      {/* Contact Section */}
<section id="contact" className="mt-32 px-10 pb-20">



  <h2 className="text-5xl font-extrabold mt-2">
    Contact
  </h2>

  {/* Grid Layout */}
  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Left Form Box */}
    <div className="p-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

      <form className="space-y-6">

        {/* Name */}
        <div>
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            placeholder="your.email@example.com"
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            placeholder="Your message..."
            rows={5}
            className="w-full p-4 rounded-xl bg-gray-800 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 font-semibold text-lg hover:opacity-90 transition"
        >
          Send Message ↗️
        </button>
      </form>
    </div>

    {/* Right Contact Info Box */}
    <div className="p-10 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

      <h3 className="text-3xl font-bold text-blue-400">
        Contact Information
      </h3>

      <div className="mt-8 space-y-6">

        {/* Email */}
        <ContactItem
          title="✉️Email"
          value="shitalsingh044@gmail.com"
        />

        {/* Phone */}
        <ContactItem
          title="📞Phone"
          value="+91-8341152243"
        />

        {/* LinkedIn */}
        <ContactItem
          title="🔗LinkedIn"
          value="linkedin.com/in/shitalsingh2808"
        />

        {/* GitHub */}
        <ContactItem
          title="💻GitHub"
          value="github.com/shitalsingh044"
        />
      </div>

      {/* Follow Me */}
      <div className="mt-10 border-t border-gray-700 pt-7">
        <p className="text-gray-400 mb-4">Let's Connect & Collaborate 🙂</p>

      
      </div>
    </div>

  </div>
</section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © 2026 Shital. All rights reserved.
      </footer>
    </main>
  );
}

/* Skill Card */
function SkillCard({ name }: { name: string }) {
  return (
    <div className="p-4 border border-gray-700 rounded-2xl hover:border-white transition">
      <p className="text-lg font-semibold">{name}</p>
    </div>
  );
}

function SkillBox({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="p-8 rounded-2xl border border-gray-700 bg-gradient-to-b from-gray-900 to-black shadow-lg">

      {/* Title */}
      <h3 className="text-xl font-bold flex items-center gap-2">
        {title}
      </h3>

      {/* Chips */}
      <div className="mt-5 flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-1 rounded-full bg-gray-800 text-gray-200 text-sm hover:bg-gray-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ContactItem({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-gray-400 text-sm">{title}</p>
      <p className="text-lg text-gray-200">{value}</p>
    </div>
  );
}

function SocialCircle({ text }: { text: string }) {
  return (
    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 text-white font-bold hover:bg-gray-700 transition cursor-pointer">
      {text}
    </div>
  );
}


/* Certificate Card */
function CertificateCard({
  title,
  desc,
  platform,
  date,
  link,
}: {
  title: string;
  desc: string;
  platform: string;
  date: string;
  link: string;
}) {
  return (
    <div
      className="bg-[#0b1220] border border-gray-700 rounded-2xl overflow-hidden shadow-xl 
      transform hover:scale-105 hover:border-blue-500 transition duration-300"
    >
      {/* Content */}
      <div className="p-8">

        {/* Title */}
        <h3 className="text-2xl font-bold text-blue-400">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 mt-4 text-sm leading-relaxed">
          {desc}
        </p>

        {/* Footer Info */}
        <div className="flex justify-between text-gray-400 text-sm mt-6">
          <span>{platform}</span>
          <span className="text-blue-300">{date}</span>
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block w-full text-center px-6 py-3 
          bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition"
        >
          View Certificate →
        </a>
      </div>
    </div>
  );
}


/* Project Card */
function ProjectCard({
  title,
  desc,
  img,
  githubLink,
}: {
  title: string;
  desc: string;
  img: string;
  githubLink?: string;
}) {
  return (
    <div className="bg-[#0b1220] border border-gray-700 rounded-2xl overflow-hidden hover:border-blue-500 transition w-full max-w-lg shadow-xl">

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-56 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-base mt-4 leading-relaxed">
          {desc}
        </p>

        {/* ✅ View Code Button */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-2 rounded-xl 
                       bg-[#111827] border border-blue-500 
                       text-blue-400 font-semibold 
                       hover:bg-blue-600 hover:text-white transition"
          >
            💻 View Code
          </a>
        )}
      </div>
    </div>
  );
}




 