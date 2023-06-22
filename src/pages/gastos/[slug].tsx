import Head from 'next/head';
import styles from './gasto.module.scss'
import Link from 'next/link';
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';



type Debt = {
    _id: 'string';
    group: 'string';
    user: "string";
    amount: Number;
    description: "string";

}

type DebtProps = {
    data: Debt;
}

export default function Gasto({ data }: DebtProps) {
    console.log(data)
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
            </header>

            <div className={styles.description}>
            <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Membro:</th>
              <th>Gasto:</th>
              <th>Descrição:</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data._id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={'/moneyButtonBorderless.svg'}
                      alt={'money'}
                    />
                  </td>
                  <td>{data.user}</td>
                  <td>{data.amount} reais</td>
                  <td>{data.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
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
     //console.log(ctx)
    const { data } = await axios.get(`http://localhost:3000/debts/group/${slug}`)
    //console.log(data)
  
    return {
      props: {
        data,
      },
      revalidate: 1 * 1 * 1,
    }
  }