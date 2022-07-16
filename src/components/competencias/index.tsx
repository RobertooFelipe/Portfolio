import './style.css';

export function Competencias() {

    const competencias = [
        "React JS",
        "JavaScript",
        "TypeScript",
        "JQuery",
        "React Native",
        "PHP",
        "MySQL",
        "T-SQL",
        "NodeJS",
        "Express",
        "HTML",
        "CSS",
        "UI/UX",
        "Git",
        "VUE",
        "Angular",
        "DevOps",
        "Scrum",
        "Ingles",
        "Espanhol"
    ]

    return (
        <>
            {competencias.map(index => {
                return (
                    <div className='cardCompetencia'>
                        <p>{index}</p>
                    </div>
                )
            })}
        </>
    )
}


