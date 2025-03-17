import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div>
      <h2>Página não encontrada!</h2>
      <p>Não foi possível localizar o recurso.</p>
      <Link href="/">Retornar para o início</Link>
    </div>
  )
}