import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {

  return (
    <section id="about" className="py-24 px-4 realtive min-h-screen">
      <div data-aos="fade-down-left" className="container mx-auto max-w-5xl">
        <h2
          data-aos="zoom-in-left"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 imtems-center">
          <div className="space-y-6">
            <h3 data-aos="zoom-in-left" className="text-2xl font-semibold">
              Passionate Developer & Tech Creator
            </h3>
            <p data-aos="zoom-in-left" className="text-muted-foreground">
              I’m a student at FPT University, majoring in Fullstack
              Development. I have strong interest in building modern web
              applications using React, NodeJS, and other web technologies.
            </p>
            <p data-aos="zoom-in-left" className="text-muted-foreground">
              Although I don’t have real-world working experience yet, I have
              been learning through academic projects and personal practice. My
              goal is to join professional teams, keep improving my coding
              skills, and contribute to impactful products.
            </p>

            <div
              data-aos="fade-down"
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <a href="#contact" className="cosmic-button">
                Get In Tourch
              </a>
              <a className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 trasition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div
              data-aos="fade-down"
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Skilled in building responsive websites with React, NodeJS,
                    HTML, CSS, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Personal Skills</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Fast learner, team player, and passionate about solving
                    problems with technology.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-down"
              className="gradient-border p-6 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Career Goal</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Seeking internship opportunities to apply my knowledge, gain
                    practical experience, and grow as a Fullstack Developer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
