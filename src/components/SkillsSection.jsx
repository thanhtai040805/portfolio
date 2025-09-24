export const SkillsSection = () => {
  const skills = [
    {
      name: "javaScript",
      image_url: "/assets/skills/js.png",
      category: "frontend",
    },
    {
      name: "React",
      image_url: "/assets/skills/react.png",
      category: "frontend",
    },
    {
      name: "Redux",
      image_url: "/assets/skills/redux.png",
      category: "frontend",
    },
    {
      name: "TailWindCSS",
      image_url: "/assets/skills/tailwind.png",
      category: "frontend",
    },
    {
      name: "SASS",
      image_url: "/assets/skills/sass.webp",
      category: "frontend",
    },
    {
      name: "Bootstrap",
      image_url: "/assets/skills/bootstrap.svg",
      category: "frontend",
    },
    {
      name: "Node.Js",
      image_url: "/assets/skills/node.png",
      category: "backend",
    },
    {
      name: "SpringBoots.Js",
      image_url: "/assets/skills/spring.svg",
      category: "backend",
    },
    { name: "Java", image_url: "/assets/skills/java.svg", category: "backend" },
    {
      name: "Express.Js",
      image_url: "/assets/skills/express.png",
      category: "backend",
    },
    {
      name: "MySQL",
      image_url: "/assets/skills/mysql.svg",
      category: "Database",
    },
    {
      name: "PostgreSQL",
      image_url: "/assets/skills/postgreSQL.webp",
      category: "Database",
    },
    {
      name: "MongoDB",
      image_url: "/assets/skills/mongodb.svg",
      category: "Database",
    },
    { name: "Git", image_url: "/assets/skills/git.png", category: "tools" },
    {
      name: "Docker",
      image_url: "/assets/skills/docker-svgrepo-com.svg",
      category: "tools",
    },
    { name: "Figma", image_url: "/assets/skills/figma.png", category: "tools" },
  ];

  const grouped = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <section id="skills" className="py-24 px-4 realtive min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2
          data-aos="fade-in"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Stack</span>
        </h2>

        <div className="space-y-20">
          {Object.entries(grouped).map(([category, items]) => (
            <div className="grid sm:grid-cols-12" key={category}>
              <div className="sm:col-span-5 text-start">
                <p
                  data-aos="fade-down"
                  className="text-2xl font-bold leading-none text-muted-foreground uppercase"
                >
                  {category}
                </p>
              </div>
              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                {items.map((skill, index) => (
                  <div
                    data-aos="fade-down"
                    className="flex gap-3.5 items-center leading-none"
                    key={index}
                  >
                    <div>
                      <img
                        className="max-h-10"
                        src={skill.image_url}
                        alt={skill.name}
                      />
                    </div>
                    <span className="text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
