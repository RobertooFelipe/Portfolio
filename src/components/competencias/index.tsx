import "./style.css";

export function Competencias() {
  const competencias = [
    "React JS",
    "React Native",
    "TypeScript",
    "JavaScript",
    "NodeJS",
    "Python",
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
