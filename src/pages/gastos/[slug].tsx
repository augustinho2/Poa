import Head from 'next/head';
import styles from './gasto.module.scss'
import Link from 'next/link';
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next';
import axios from 'axios';
import { useState } from 'react';
import { TbReportMoney } from 'react-icons/tb'



type Debt = {
  debtId: 'string';
  debtUser: "string";
  debtValue: Number;
  debtDescription: "string";
  debtUserId: 'string';
  debtGroup: 'string'
}

type DebtProps = {
  data: Debt;
  slug: 'string';
  
}





export default function Gasto({ data, slug }: DebtProps) {
  console.log(data)
  //console.log(data.debtGroup)


  return (
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
          style={{ objectFit: "cover" }}
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
                <tr key={data.debtId}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={'/moneyButtonBorderless.svg'}
                      alt={'money'}
                    />
                  </td>
                  <td>{data.debtUser}</td>
                  <td>{data.debtValue} reais</td>
                  <td>{data.debtDescription}</td>
                </tr>
              )
            })}
          </tbody>
          <tfoot >
            <tr>
              <td>
                <Link href={`/createdebt/${slug}`} >
                  <TbReportMoney /> Adicionar gasto
                </Link> 
              </td>
            </tr>
            {/* {data.map((data, index) => {
              if (index === 0) {
                return (
                  <tr>
                    <td className={styles.gastosButton}>
                      <Link href={`/createdebt/${data.debtGroup}`} >
                        <TbReportMoney /> Adicionar gasto
                      </Link>
                    </td>

                  </tr>
                )
              }
              return null

            })} */}
          </tfoot>
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
      slug
    },
    revalidate: 1 * 1 * 1,
  }
}