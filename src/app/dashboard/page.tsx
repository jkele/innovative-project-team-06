import { PROJECTS } from "@/constants/projects";
import { ProjectsList } from "@/features/projects-list";

export default function Dashboard() {
  return (
    <div className="flex flex-col bg-[rgb(243,250,255)] px-10">
      <div className="lg:px-[246px] mb-4">
        <ProjectsList projects={PROJECTS} />
      </div>
    </div>
  );
}
