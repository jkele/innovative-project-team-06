import Navbar from "@/components/client/navigation/NavBar";
import { ProjectCard } from "@/components/project-card";
import { PROJECTS } from "@/constants/projects";
import { ProjectsList } from "@/features/projects-list";

export default function Dashboard() {
  return (
    <div className="h-[100dvh] flex flex-col bg-[#F3FAFF] px-10">
      <ProjectsList projects={PROJECTS} />
      <button className="mt-16 bg-white uppercase font-semibold py-4">
        Add project
      </button>
    </div>
  );
}
