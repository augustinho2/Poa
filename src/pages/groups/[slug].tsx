import Head from 'next/head';
import styles from './group.module.scss'
import Link from 'next/link';
import Image from 'next/image'

import Button from '../../components/Button'

import { BsPersonFillAdd } from 'react-icons/bs'
import { TbReportMoney } from 'react-icons/tb'
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';

type Group = {
    id: 'string';
    name: 'string';
    users: 'string';
    description: 'string';
}

type GroupProps = {
    data: Array<Group>;
}



export default function Group({ data }: any) {
    console.log(data)
    const showGroup = data.showGroup
    const userNames = data.userNames
    return (
        <div className={styles.group}>
            <Head>
                <title>Grupo</title>
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
                    style={{ objectFit: "cover" }}
                />
            </div>
            <header>
                <h1>{showGroup.name}</h1>
                {/* {userNames.map((userNames) => {
                    return(userNames)
                })} */}
                <span>{userNames.join(', ')}</span>
            </header>
            <div className={styles.buttonsContainer}>
                {/* <div className={styles.addButton}>
                    <Button icon={BsPersonFillAdd} route="/" />
                    <p>adicionar membro ao grupo</p>
                </div> */}
                <div className={styles.gastosGrupo}>
                    <Link href={`/gastos/${showGroup._id}`}>
                       <TbReportMoney /> Ver gastos do grupo
                    </Link>

                </div>
            </div>

            <div className={styles.description}>
                <h3>Descrição do grupo:</h3>
                <p>{showGroup.description}</p>
            </div>
        </div>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params;
    // console.log(slug)
    const { data } = await axios.get(`http://localhost:3000/groups/${slug}`)

    return {
        props: {
            data,
        },
        revalidate: 6 * 1 * 1,
    }
}