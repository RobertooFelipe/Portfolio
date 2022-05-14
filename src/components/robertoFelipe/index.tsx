import './style.css';


// var altura = window.screen.height;
var windowWidth = window.innerWidth;

export function RobertoFelipe() {

    if (windowWidth <= 670) {
        console.log("if")
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
        console.log("else")
        console.log(windowWidth)
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
