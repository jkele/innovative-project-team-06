import { ProjectInfo } from "@/components/project-info";
import { PROJECTS } from "@/constants/projects";
import { PuncturesList } from "@/features/punctures-list";

export default function Project({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = PROJECTS.find((project) => project.id === id);

  return (
    <div className="flex flex-col h-[100dvh] bg-[#F3FAFF]">
      <ProjectInfo project={project!} />
      <div className="flex flex-col px-4 gap-4 mt-10">
        <PuncturesList punctures={project!.punctures} />
      </div>
    </div>
  );
}
