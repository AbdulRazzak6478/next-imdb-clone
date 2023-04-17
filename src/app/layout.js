import Header from '../components/Header'
import './globals.css'

export const metadata = {
  title: 'IMDb clone',
  description: 'This is the IMDb clone website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
          <Header />
        {/* Navbar */}

        {/* SearchBar */}

        {children}

      </body>
    </html>
  )
}
 