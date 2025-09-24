import { Swiper, SwiperSlide } from "swiper/react";
import { Github, ExternalLink } from "lucide-react";
import "swiper/css";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Website cá nhân được xây dựng bằng React và TailwindCSS, có hiệu ứng mượt và responsive.",
      image: "https://via.placeholder.com/800x400",
      github: "https://github.com/username/portfolio",
      demo: "https://your-portfolio-demo.com",
    },
    {
      title: "E-commerce App",
      description:
        "Ứng dụng bán hàng online với giỏ hàng, đăng nhập và thanh toán tích hợp.",
      image: "https://via.placeholder.com/800x400",
      github: "https://github.com/username/ecommerce-app",
      demo: "https://ecommerce-demo.com",
    },
    {
      title: "Chat Application",
      description: "Ứng dụng chat realtime sử dụng WebSocket và Node.js.",
      image: "https://via.placeholder.com/800x400",
      github: "https://github.com/username/chat-app",
      demo: "https://chat-app-demo.com",
    },
    {
      title: "Task Manager",
      description:
        "Ứng dụng quản lý công việc với drag & drop và biểu đồ thống kê.",
      image: "https://via.placeholder.com/800x400",
      github: "https://github.com/username/task-manager",
      demo: "https://task-manager-demo.com",
    },
  ];

  return (
    <section
      id="project"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl font-bold mb-12">My <span className="text-primary">Projects</span></h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true} // 🔥 bật infinite loop
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              className="!w-[90%] h-80%" // mỗi slide rộng 80%
            >
              <div className="rounded-2xl shadow-lg overflow-hidden h-full flex flex-col hover:shadow-2xl transition duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex space-x-6">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-black transition"
                    >
                      <Github className="w-5 h-5" />
                      <span className="text-sm">GitHub</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-black transition"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
