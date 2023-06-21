import Head from 'next/head';
import styles from '../home.module.scss'
import Link from 'next/link';
import axios from 'axios';
import router from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image'

type Group = {
  _id: 'string';
  name: 'string';
  users: 'string';
  description: 'string';
}

type HomeProps = {
  data: Array<Group>;
}

export default function User({ data }: HomeProps) {
  //const { variavel } = router.query;
  //console.log(variavel)
  return (
    <div className={styles.homepage}>
      <Head>
        <title>Home | poa</title>
      </Head>

      <section className={styles.allGroups}>
        <div className={styles.allGroupsHeader}>
          <h2> seus grupos </h2>
          <div className={styles.createGroupButtonContainer}>
            <Link href="/creategroup">
              <button type='button' className={styles.createGroupButton}>Criar grupo</button>
            </Link>
          </div>
        </div>

        <table cellSpacing={0}>
          <thead>
            <tr>
              <th></th>
              <th>Grupo</th>
              <th>Membros</th>
              <th>Descrição</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((group) => {
              return (
                <tr key={group._id}>
                  <td style={{ width: 72 }}>
                    <Image
                      width={120}
                      height={120}
                      src={'/moneyButton.svg'}
                      alt={'money'}
                    />
                  </td>
                  <td>
                    <Link href={`/groups/${group._id}`}>
                      {group.name}
                    </Link>
                  </td>
                  <td>{group.users}</td>
                  <td>{group.description}</td>
                </tr>
              )
            })}
          </tbody>
        </table>


      </section>

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
  const { data } = await axios.get(`http://localhost:3000/groups/user/${slug}`)


  return {
    props: {
      data,
    },
    revalidate: 6 * 1 * 1,
  }
}

// 64921ae88303bf641e4dbd60