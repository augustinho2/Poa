import React, { useState } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Lógica de autenticação aqui (exemplo: verificar email e senha)

    // Redirecionar para a página principal após o login
    router.push('/home');
  };

  return (
    <div>
      <h1>Boas-vindas e boas festas!</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email cadastrado:</label>
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
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default LoginPage;
