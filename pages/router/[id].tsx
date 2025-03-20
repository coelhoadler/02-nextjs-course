import { useRouter } from 'next/router';
import Link from 'next/link';
import type {
  GetStaticProps,
  GetStaticPaths,
} from 'next'

type Repo = {
  name: string
  stargazers_count: number
}

export const getStaticPaths = (async () => {

  const paths = [
    { params: { id: '1' } },
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '123456' } },
  ];

  return {
    paths,
    fallback: false, // false or "blocking"
  }
});

export const getStaticProps = (async (context) => {
  return { 
    props: {
      title: 'Um título qualquer',
      message: 'Esse conteúdo veio do método getStaticProps',
      id: context.params?.id
    } 
  }
});

export default function Random(props) {
  console.log('---> Minhas props: ', props)
  // const router = useRouter();

  return (
    <>
      <h1>{ props.title }</h1>
      <div>ID atual: {props.id}</div>
      <p>{ props.message }</p>
      <p><Link href='/'>voltar para o início</Link></p>
    </>
  )
}