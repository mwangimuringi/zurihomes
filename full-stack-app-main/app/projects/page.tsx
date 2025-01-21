"use client";

// hook state
import { useState } from "react";

// shadcn ui
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";

// components
import ProjectCard from "@/components/ProjectCard";

// project data
const projectData = [
  {
    image: "/work/3.png",
    category: "react js",
    name: "Next Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Solstice Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Lumina Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "next js",
    name: "Evolve Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Envision Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "Serenity Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/3.png",
    category: "fullstack",
    name: "Nova Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
  {
    image: "/work/2.png",
    category: "fullstack",
    name: "Zenith Website",
    description: "Lorem ipsun dolor sit amet consectetur adipisicing",
    link: "/",
    github: "",
  },
];

// remove category duplicates
const uniqueCategories = ["all projects", "react js", "next js", "fullstack"];

const ProjectPage = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState<string>("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is "all projects" return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px]
          mb-12 mx-auto md:border dark:border-none"
          >
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default ProjectPage;
