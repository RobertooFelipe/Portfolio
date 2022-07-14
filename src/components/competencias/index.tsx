import './style.css';

export function Competencias() {

    const competencias = [
        "JavaScript",
        "PHP",
        "MySQL"
    ]


    return (
        <>
            {competencias.map(index => {
                <div className='cardCompetencia'>
                    <p>{index}</p>
                </div>
            })}
        </>
    )


}


