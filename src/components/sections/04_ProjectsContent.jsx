import { projectCards } from "../../data/Data";
import ShowcaseCard from "../ShowcaseCard";

function ProjectsContent() {
  const cards =
    projectCards.length > 0
      ? projectCards
      : Array.from({ length: 3 }, (_, index) => ({
          id: `project-placeholder-${index}`,
          placeholder: true,
        }));

  return (
    <div className="grid gap-5 xl:grid-cols-3">
      {cards.map((project, index) => (
        <ShowcaseCard
          key={project.id ?? project.title ?? `project-card-${index}`}
          item={project.placeholder ? null : project}
          placeholder={Boolean(project.placeholder)}
        />
      ))}
    </div>
  );
}

export default ProjectsContent;
