import { Swiper, SwiperSlide } from "swiper/react";
import { Github, ExternalLink } from "lucide-react";
import "swiper/css";

export const ProjectSection = () => {
  const projects = [
    {
      title: "Book-eat",
      description:
        "Nền tảng trung gian giúp nhà hàng đăng tải thông tin nhà hàng, nhận đặt bàn trực tuyến và khách hàng có thể booking realtime chỉ trong vài giây.",
      image: "/assets/projects/book-eat.png",
      github: "https://github.com/KeyT9999/RestaurantBookingWebsite",
      demo: "https://bookeat-app.onrender.com/",
    },
    {
      title: "Task Manager",
      description:
        "Ứng dụng quản lý công việc với drag & drop và biểu đồ thống kê.",
      image: "/assets/projects/manage-work.png",
      github: "https://github.com/thanhtai040805/ManageWork",
      demo: "",
    },
  ];

  return (
    <section
      id="project"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="container max-w-6xl mx-auto text-center z-10">
        <h2 className="text-4xl font-bold mb-12">
          My <span className="text-primary">Projects</span>
        </h2>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true} //
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
                  className="w-full h-100 object-cover"
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
                    {project.demo && project.demo.trim() !== "" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-700 hover:text-black transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span className="text-sm">Demo</span>
                      </a>
                    )}
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
