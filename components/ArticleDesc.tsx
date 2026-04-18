import { DescBlock } from "@/constants/index";

export const ArticleDesc = ({ blocks }: { blocks: DescBlock[] }) => {
  return (
    <article className="text-[#1A365D]/70 font-sans leading-relaxed text-base md:text-lg space-y-4">
      {blocks.map((block, i) => {
        if (block.type === "paragraph") {
          return <p key={i}>{block.text}</p>;
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc list-outside pl-5 space-y-2">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
      })}
    </article>
  );
};