import styles from './home.module.scss'
import { useRouter } from 'next/router'
import { useEffect } from 'react';


export default function Home() {

  const router = useRouter();

  useEffect(() => {
    // Redireciona para outra página após o carregamento da página atual
    router.push('/login');
  }, []);
  return (
    <div className={styles.homepage}>
      <h1>home</h1>

    </div>
  )
}
