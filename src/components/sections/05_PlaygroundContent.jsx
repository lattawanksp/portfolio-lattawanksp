import { playgroundCards } from "../../data/Data";
import ShowcaseCard from "../ShowcaseCard";

function PlaygroundContent() {
  const cards =
    playgroundCards.length > 0
      ? playgroundCards
      : Array.from({ length: 4 }, (_, index) => ({
          id: `playground-placeholder-${index}`,
          placeholder: true,
        }));

  return (
    <div className="grid gap-5 xl:grid-cols-4">
      {cards.map((project, index) => (
        <ShowcaseCard
          key={project.id ?? project.title ?? `playground-card-${index}`}
          item={project.placeholder ? null : project}
          placeholder={Boolean(project.placeholder)}
        />
      ))}
    </div>
  );
}

export default PlaygroundContent;
