import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className="h-screen flex justify-center items-center bg-blue-950">
      <Link to='/PoidIdeal' className='btn btn-outline btn-lg text-gray-100 mx-2'>
        Poids Idéal
      </Link>
      <Link to='/Activite2_Books' className='btn btn-outline btn-lg text-gray-100 mx-2'>
        Activite2 Livres 
      </Link>
      <Link to='/Activite2_Books_redux' className='btn btn-outline btn-lg text-gray-100 mx-2'>
        Activite2 Livres redux
      </Link>
    </div>
  )
}