import Link from 'next/link';

export default function Page() {
    return (
      <>
        <header className="header">
          <h1 className="title">Eu, Mari e o Tom 🐶</h1>
          <div className="avatar"></div>
        </header>

        <section className="about-me">
          <p>Minha vida é repleta de amor e felicidade ao lado de minha adorável esposa e do nosso fiel husky, Tom. Ela é o meu alicerce, sempre trazendo alegria e companheirismo, e juntos enfrentamos os altos e baixos da vida com muito carinho e respeito. Tom, com sua energia contagiante e seu olhar doce, é uma presença que enche nossa casa de diversão e ternura. Entre risadas, momentos tranquilos e a companhia deles, sinto-me grato por cada dia vivido ao lado desses dois seres incríveis que fazem minha vida completa e repleta de significado.</p>
          <p>➡️ Vá até a página <Link href='sobre'>sobre</Link> para saber mais sobre mim.</p>
          <p>➡️ Vá até a página <Link href='router/123456'>router</Link> para testar as rotas dinâmicas.</p>
        </section>
      </>
    )
  }