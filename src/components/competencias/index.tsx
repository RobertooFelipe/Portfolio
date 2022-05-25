import './style.css';

interface PropsCompetencia {
    Competencia: string;
}

export function Competencias({ Competencia }: PropsCompetencia) {

    return (
        <div className='cardCompetencia'>
            <p>{Competencia}</p>
        </div>
    )
}


