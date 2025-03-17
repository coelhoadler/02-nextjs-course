import './global.css'

export default function RootLayout({ children }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="pt-br">
        <body className="root">
          <section className='main'>{ children }</section>
        </body>
      </html>
    )
  }
  