import './style.css';
import { useMediaQuery } from 'usehooks-ts'


export function RobertoFelipe() {
    const matches = useMediaQuery('(min-width: 670px)')

    if (matches === false) {

        return (
            <div className='return'>

                <div className='title'>
                    <h1>Roberto Felipe</h1>
                    <h2>FullStack Developer | UX/UI</h2>
                </div>
                <div className='cardBoasVindas'>
                    <section>
                        Seja bem vindo(a) ao meu portfólio,
                        aqui você encontrará um pouco
                        sobre quem é o Roberto Felipe
                        profissionalmente.
                    </section>
                </div>

                <div className='imgRoberto'>
                    <img src="\imagens\pictureRoberto 1.png" alt="" />
                </div>
            </div>
        )
    } else {

        return (
            <div className='return'>
                <div className='nameCard'>
                    <div className='title'>
                        <h1>Roberto Felipe</h1>
                        <h2>FullStack Developer | UX/UI</h2>
                    </div>
                    <div className='cardBoasVindas'>
                        <section>
                            Seja bem vindo(a) ao meu portfólio,
                            aqui você encontrará um pouco
                            sobre quem é o Roberto Felipe
                            profissionalmente.
                        </section>
                    </div>
                </div>
                <div className='imgRoberto'>
                    <img src="\imagens\pictureRoberto 1.png" alt="" />
                </div>
            </div>
        )
    }
}
