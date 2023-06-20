import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/creategroup.module.scss'

import Image from 'next/image'

const CreateGroupPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

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
                    De um nome e uma descrição ao seu grupo!
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
    );
};

export default CreateGroupPage;
