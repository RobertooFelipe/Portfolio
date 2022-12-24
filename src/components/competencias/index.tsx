import "./style.css";

export function Competencias() {
  const competencias = [
    "TypeScript",
    "JavaScript",
    "React JS",
    "React Native",
    "NodeJS",
    "Express",
    "Git",
    "PHP",
    "SQL Server",
    "HTML",
    "CSS",
    "SCSS",
    "Styled Components",
    "UI/UX",
    "React Hooks",
  ];

  return (
    <>
      {competencias.map((index) => {
        return (
          <div className="cardCompetencia">
            <p>{index}</p>
          </div>
        );
      })}
    </>
  );
}
