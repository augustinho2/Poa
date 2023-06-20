import Head from 'next/head';
import styles from './group.module.scss'
import Link from 'next/link';
import Image from 'next/image'

import Button from '../../components/Button'

import { BsPersonFillAdd  } from 'react-icons/bs'
import { TbReportMoney } from 'react-icons/tb'

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

export default function Group({ group }: GroupProps) {
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
                    src={'/groupBack.svg'}
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
            <div className={styles.buttonsContainer}>
                <div className={styles.addButton}>
                    <Button icon={BsPersonFillAdd} route="/" />
                    <p>adicionar membro ao grupo</p>
                </div>
                <div className={styles.moneyButton}>
                    <Button icon={TbReportMoney} route='/groups/gastos/a' />
                    <p>Ver gastos do grupo</p>
                </div>
            </div>

            <div className={styles.description}>
                <p>description</p>
            </div>
        </div>
    )
}