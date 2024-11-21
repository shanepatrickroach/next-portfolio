import React from "react";


const page = () => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col gap-10">
        <img
          src={'./assets/profile-pic.png'}
          className="max-w-xs "
        />
        <div>
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6 font-light">
            Hi, I’m Shane Roach —a designer, developer, and lifelong
            learner passionate about creating experiences that are not only
            functional but also beautiful and impactful. I specialize in web
            design, front-end development, and user experience with a knack for
            turning complex ideas into intuitive systems. My work revolves
            around crafting websites and applications that balance functionality
            and creativity. Whether it’s building sleek, responsive websites in
            Webflow, developing engaging interfaces in React, or exploring new
            design paradigms, I thrive on challenges that push me to grow and
            innovate. 
            <br /> <br /> My Philosophy At the heart of everything I do is my belief
            in balance—between aesthetics and usability, structure and
            spontaneity, and work and adventure. My approach combines technical
            expertise with a deep love for creativity, ensuring that every
            project tells a story and solves real problems.
            <br /> <br /> What Inspires Me
            When I’m not coding or designing, you’ll find me out in the world:
            climbing mountains, backpacking through new terrains, or immersing
            myself in movement practices that keep my body and mind strong.
            These adventures fuel my work with fresh perspectives and keep me
            motivated to create systems that inspire growth and resilience. <br /> <br /> What
            I Do Web Development & Design: Bringing ideas to life through clean
            code and eye-catching designs. UX/UI: Crafting user-friendly
            interfaces that improve experiences. Creative Storytelling: Merging
            art, design, and philosophy to communicate ideas that matter.<br /> <br /> 
            Looking Ahead In the next few years, I hope to continue exploring
            new fields, building connections, and creating meaningful projects
            that resonate with people. Whether it’s through web design, movement
            coaching, or a yet-to-be-discovered pursuit, my goal is to keep
            growing, giving back, and enjoying the process. Let’s Connect If my
            work resonates with you, I’d love to collaborate or hear your
            thoughts! Feel free to check out my socials or drop me a message via
            my contact page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
