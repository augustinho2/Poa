import Head from 'next/head';
import styles from './home.module.scss'

type Group = {
  id: 'string';
  name: 'string';
  members: 'string';
  description: 'string';
  memberNumber: number;
  createdAt: 'string';
}

type HomeProps = {
  allGroups: Array<Group>;
}

export default function Home({ allGroups }: HomeProps) {
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home | poa</title>
      </Head>

      <section className={styles.allGroups}>
        <h2> seus grupos </h2>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Grupo</th>
              <th>Membros</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
        </table>
      </section>

    </div>
  )
}
