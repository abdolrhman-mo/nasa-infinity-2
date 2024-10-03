import { NextPage } from 'next'

const Footer: NextPage = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Infinity Team</p>
    </footer>
  )
}

export default Footer
