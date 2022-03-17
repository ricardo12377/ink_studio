import style from './Navbar.module.scss'

interface iProps {
    home: string;
    jobs: string;
    contato: string
}

function Navbar (props: iProps):JSX.Element {
     
    const {home, jobs, contato } = props;

    return (
        <section className={style.container} data-testid="navbar-component">

            <div  className={style.logo}>Ink Art</div>

            <ul className={style.lista}>
                <li>{home}</li>
                <li>{jobs}</li>
                <li>{contato}</li>
            </ul>

        </section>
    );
}

export default Navbar;