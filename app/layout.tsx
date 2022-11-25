import '@/styles/globals.css'
import Nav from 'components/ui/nav'
import '@fontsource/jetbrains-mono'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </head>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
