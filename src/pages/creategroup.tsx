import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/creategroup.module.scss'

import Image from 'next/image'
import axios from 'axios';

const CreateGroupPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [users, setUsers] = useState([])

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('valores', users.join(','));

        // Lógica de criação de conta aqui (exemplo: enviar dados para o servidor)
        try {
            //console.log()
            const response = await axios.post('http://localhost:3000/groups', {
                name,
                users,
                description
            });

            // Autenticação bem-sucedida - redirecionar para a página inicial
            // ou realizar outras ações necessárias
            //console.log(response.data)
            
            //console.log(response.data)
            router.push(`/groups/${response.data.groupID}`);
        } catch (error) {
            // Autenticação falhou - exibir mensagem de erro
            console.error(error);
        }
        // Redirecionar para a página de sucesso após o cadastro
        //console.log(response.data)
        router.push('/');
    };

    const handleChange = (event) => {
        const { value } = event.target;
        const arrayValores = value.split(',').map((item) => item.trim());
        setUsers(arrayValores);
        
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
                        <label htmlFor="name">Usuarios:</label>
                        <input
                            type="text"
                            id="name"
                            value={users}
                            onChange={handleChange}
                            className={styles.input}
                            placeholder="usuarios"
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
