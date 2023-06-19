import Link from 'next/link';
import styles from './styles.module.scss'
//import format from 'date-fns/format'
//import ptBR from 'date-fns/locale/pt-BR'

export function Header() {
    /*const currentDate = format(new Date(), 'EEEEEE, d, MMMM', {
        locale: ptBR,
    });

    */

    return (
        <header className={styles.headerContainer}>
            <Link href="/">
                <img src="/moneybutton.svg" alt="Pague o aluguel" />
            </Link>
            

            <p>eu sou o milhor</p>

            <div className={styles.buttonsContainer}>
                <Link href="/signup">
                    <button type='button'>
                        Cadastre-se
                    </button>
                </Link>
                <Link href="/login">
                    <button type='button'>
                        Login
                    </button>
                </Link>



            </div>


        </header>
    );
}
// <span>{currentDate}</span>