// src/components/articles/ArticleBody.jsx
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export default function ArticleBody({ contentPath }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(contentPath)
      .then((res) => res.text())
      .then((text) => setMarkdown(text))
      .catch((err) => console.error("Failed to load markdown:", err));
  }, [contentPath]);

  // Split main vs aside vs head content
  const splitMarkdown = () => {
    const lines = markdown.split("\n");
    const mainLines = [];
    const asideLines = [];
    const headLines = lines.slice(0, 2); // first 2 lines go to head

    let inAside = false;

    lines.slice(2).forEach((line) => {
      // Detect start of aside
      if (
        line.startsWith("🛠 **Pro Recommendation:**") ||
        line.startsWith("☑️ **Checklist:**")
      ) {
        inAside = true;
      }

      if (inAside) asideLines.push(line);
      else mainLines.push(line);
    });

    return {
      head: headLines.join("\n"),
      main: mainLines.join("\n"),
      aside: asideLines.join("\n"),
    };
  };

  const { head, main, aside } = splitMarkdown();

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-lg-12">
          <ReactMarkdown>{head}</ReactMarkdown>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 col-md-7 pe-lg-4">
          <ReactMarkdown>{main}</ReactMarkdown>
        </div>

        {aside?.trim() && (
          <div className="col-lg-4 col-md-5">
            <aside className="bg-light rounded-3 p-4 mt-5 shadow-sm ">
              <ReactMarkdown>{aside}</ReactMarkdown>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
}
