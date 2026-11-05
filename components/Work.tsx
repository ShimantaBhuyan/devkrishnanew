import { experience } from "../data/experience";

/** Work timeline, rendered from data/experience.ts. */
export const Work = () => (
  <ol className="dk-roles">
    {experience.map((job, i) => (
      <li key={`${job.company}-${job.start}`} className="dk-role dk-rise" style={{ ["--i" as string]: Math.min(i, 4) + 3 }}>
        <time>
          {job.start === job.end ? job.start : `${job.start} — ${job.end ?? "Present"}`}
        </time>
        <div>
          <h2>
            {job.role} <span className="at">at</span>{" "}
            {job.url ? (
              <a className="dk-link" href={job.url} target="_blank" rel="noopener noreferrer">
                {job.company}
              </a>
            ) : (
              job.company
            )}
            {!job.end ? <span className="now">Now</span> : null}
          </h2>
          {job.summary ? <p className="summary">{job.summary}</p> : null}
          {job.highlights?.length ? (
            <ul>
              {job.highlights.map(h => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          ) : null}
          {job.groups?.map(g => (
            <div className="dk-group" key={g.title}>
              <h3>
                {g.link ? (
                  <a className="dk-link" href={g.link} target="_blank" rel="noopener noreferrer">
                    {g.title}
                  </a>
                ) : (
                  g.title
                )}
              </h3>
              <ul>
                {g.items.map(h => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
          {job.stack?.length ? (
            <div className="dk-chips" aria-label="Stack">
              {job.stack.map(s => (
                <span key={s}>{s}</span>
              ))}
            </div>
          ) : null}
        </div>
      </li>
    ))}
  </ol>
);
