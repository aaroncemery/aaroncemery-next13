import '@/styles/globals.css'
import Nav from 'components/ui/nav'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head></head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
