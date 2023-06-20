import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './signup.module.scss'

import Image from 'next/image'

const SignupPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();

        // Lógica de criação de conta aqui (exemplo: enviar dados para o servidor)

        // Redirecionar para a página de sucesso após o cadastro
        router.push('/success');
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
                    style={{objectFit: "cover"}}
                />                
            </div>
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>
                    Cadastre-se para entrar em grupos
                    e compartilhar seus gastos!
                </h2>
                <form onSubmit={handleSignup}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input}
                            placeholder="Nome"
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email:</label>
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
                    <button type="submit" className={styles.button}>Cadastrar</button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
