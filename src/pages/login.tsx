import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'

import styles from '../styles/login.module.scss'

import Image from 'next/image'

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const baseURL = 'http://localhost:3000'; 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        // Lógica de autenticação aqui (exemplo: verificar email e senha)
        try {
            const response = await axios.post('http://localhost:3000/login', {
              email,
              password,
            });
        
            // Autenticação bem-sucedida - redirecionar para a página inicial
            // ou realizar outras ações necessárias
            console.log(response.data)
            router.push(`/user/${response.data.id}`);
          } catch (error) {
            // Autenticação falhou - exibir mensagem de erro
            console.error(error);
          }

        // Redirecionar para a página principal após o login
        
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
                <h1 className={styles.heading}>Boas-vindas e boas festas!</h1>
                <form onSubmit={handleLogin}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email cadastrado:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={styles.input}
                            placeholder="Email"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Senha:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.input}
                            placeholder="Senha"
                        />
                    </div>
                    <button type="submit" className={styles.button}>Entrar</button>
                </form>
            </div>

        </div>
    );
};

export default LoginPage;
