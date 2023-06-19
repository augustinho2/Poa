import React, { useState } from 'react';
import { useRouter } from 'next/router';

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
        <div>
            <h1>
                Cadastre-se para entrar em grupos
                e compartilhar seus gastos!
            </h1>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default SignupPage;
