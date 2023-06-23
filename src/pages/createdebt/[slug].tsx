import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/creategroup.module.scss'

import Image from 'next/image'
import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';

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
    slug: 'string'
}

export default function CreateDebt(x: DebtProps) {
    console.log(x);
    const data = x.data;
    const slug = x.slug
    const router = useRouter();
    const [debtDescription, setDebtDescription] = useState('');
    const [debtValue, setDebtValue] = useState('')
    const [debtUser, setDebtUser] = useState('')

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        
        // Lógica de criação de conta aqui (exemplo: enviar dados para o servidor)
        try {
            console.log(debtUser, debtValue, debtDescription)
            const response = await axios.post(`http://localhost:3000/debts`, {
                group: slug,
                user: debtUser,
                value: debtValue,
                description: debtDescription
            });
            router.push(`/gastos/${slug}`);
            // Autenticação bem-sucedida - redirecionar para a página inicial
            // ou realizar outras ações necessárias
            //console.log(response.data)

            //console.log(response.data)
            
        } catch (error) {
            // Autenticação falhou - exibir mensagem de erro
            console.error(error);
        }
        // Redirecionar para a página de sucesso após o cadastro
        //console.log(response.data)
        //router.push('/');
    };

    return (
        <div className={styles.container}>
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
                    src={'/signupBack.svg'}
                    alt='thumb'
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className={styles.formContainer}>
               {data.map((data, index) => {
                    if (index === 0) {
                        return (
                            debtGroup = data.debtGroup
                        )
                    }
                    return null

                })}
                <h2 className={styles.heading}>
                    Adicione uma divida ao seu grupo!
                </h2>
                <form onSubmit={handleSignup}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={debtUser}
                            onChange={(e) => setDebtUser(e.target.value)}
                            className={styles.input}
                            placeholder="Nome"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Valor:</label>
                        <input
                            type="number"
                            id="name"
                            value={debtValue}
                            onChange={(e) => setDebtValue(e.target.value)}
                            className={styles.input}
                            placeholder="valor"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">description:</label>
                        <input
                            type="description"
                            id="description"
                            value={debtDescription}
                            onChange={(e) => setDebtDescription(e.target.value)}
                            className={styles.input}
                            placeholder="descrição"
                        />
                    </div>
                    <button type="submit" className={styles.button}>Criar</button>
                </form>
            </div>
        </div>
    );
};


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