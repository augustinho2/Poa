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
  debtGroup: 'string';
  debtUser: "string";
  debtValue: Number;
  debtDescription: "string";
  debtUserId: 'string';
}

type DebtProps = {
  data: Debt;
}





export default function Gasto({ data }: DebtProps) {
  //console.log(data.)


  /*   const [group, setGroup] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState('')
    const [amount, setAmount] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  
    const handleDebt = async (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
  
      // Lógica de criação de conta aqui (exemplo: enviar dados para o servidor)
      try {
        //console.log()
        const response = await axios.post('http://localhost:3000/debts', {
          group,
          user,
          amount,
          description
        });
  
        // Autenticação bem-sucedida - redirecionar para a página inicial
        // ou realizar outras ações necessárias
        //console.log(response.data)
  
        //console.log(response.data)
        setIsModalOpen(false);
      } catch (error) {
        // Autenticação falhou - exibir mensagem de erro
        console.error(error);
      }
      // Redirecionar para a página de sucesso após o cadastro
      //console.log(response.data)
    };
  
    const Modal = (isOpen) => {
      if (!isOpen) {
        return null; // Retorna null para não renderizar o modal se não estiver aberto
      }
  
      return (
        <div className={styles.modalOverlay}>
          <div className={styles.modalStyle}>
            <h2>add gasto</h2>
            <form onSubmit={handleDebt}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                  className={styles.input}
                  placeholder="Nome"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="name">Valor:</label>
                <input
                  type="number"
                  id="valor"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className={styles.input}
                  placeholder="valor em reais"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="description">description:</label>
                <input
                  type="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={styles.input}
                  placeholder="descrição"
                />
              </div>
              <button type="submit" className={styles.button}>Criar</button>
            </form>
          </div>
        </div>
      )
    } */




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
          <tfoot>
            {data.map((data, index) => {
              if (index === 0) {
                return (
                  <tr>
                    <Link href={`/createdebt/${data.debtGroup}`}>
                      <TbReportMoney /> Add gasto ao grupo
                    </Link>
                  </tr>
                )
              }
              return null

            })}
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
    },
    revalidate: 1 * 1 * 1,
  }
}