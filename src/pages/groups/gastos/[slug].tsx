import Head from 'next/head';
import styles from './gasto.module.scss'
import Link from 'next/link';
import Image from 'next/image'



type Group = {
    id: 'string';
    name: 'string';
    members: 'string';
    description: 'string';
    memberNumber: number;
    createdAt: 'string';
}

type GroupProps = {
    group: Group;
}

export default function Gasto({ group }: GroupProps) {
    return(
        <div className={styles.group}>
            <Head>
                <title>Grupo 1</title>
            </Head>
            <div className={styles.thumbnailContainer}>
               {/*  <Link href="/">
                    <button type='button'>
                        <img src="/arrow-left.svg" alt="voltar" />
                    </button>
                </Link>
                */}
                 <Image 
                    width={670}
                    height={160}
                    src={'/moneyButton.svg'}
                    alt='thumb'
                    style={{objectFit: "cover"}}
                />
                
                
            </div>
            <header>
                <h1>nome</h1>
                <span>membros</span>
                <span>numero de membros</span>
                <span>data</span>
            </header>

            <div className={styles.description}>
                <p>Usuário 1: 100 Reais na venda do joão</p>
                <p>usuario 2: 100 Reais no mercado Alegria</p>
                <p>usuario 3: 100 reais no zé</p>
                <p>total gasto: 300</p>
            </div>
        </div>
    )
}