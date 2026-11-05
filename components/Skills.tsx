import { skills } from "../data/skills";

/** Skills, rendered from data/skills.ts. */
export const Skills = () => (
  <div className="dk-skills">
    {skills.map((group, i) => (
      <section key={group.name} className="dk-skillrow dk-rise" style={{ ["--i" as string]: Math.min(i, 5) + 3 }}>
        <h2>{group.name}</h2>
        <ul>
          {group.items.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    ))}
  </div>
);
