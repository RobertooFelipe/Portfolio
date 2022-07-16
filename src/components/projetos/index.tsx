import './style.css';

export function Projetos(Props: any) {

    interface Props {
        title: string;
        desc?: string;
        link?: string;
        img?: string;
    }

    return (
        <article className="cardProject">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>

            <div className="card-inner">
                <div className='imgProjects'>
                    <img src={Props.img} alt="" />
                </div>
                <div className='textButton'>
                    <h1>{Props.title}</h1>
                    <p className='textProject'>
                        {Props.desc}
                    </p>
                    <a href={Props.link}><button className='gitHub'><img src="\imagens\icons8-github.svg" alt="" />Git Hub</button></a>
                </div>

            </div>
        </article>
    )
}

