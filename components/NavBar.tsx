import Link from 'next/link'

export const NavBar = () => {
  return (
    <div className="flex bg-blue text-offWhite h-10 justify-between px-3 items-center">
      <h1>Giselle Pacheco</h1>
      <ul className="flex">
        <li>
          <Link href="https://tech.gisellep.com">Blog</Link>
        </li>
        <hr className='border-r-2 border-offWhite h-auto m-1'/>
        <li>
          <Link href="https://github.com/giggi1226" target="_blank">GitHub</Link>
        </li>
        <hr className='border-r-2 border-offWhite h-auto m-1'/>
        <li>
          <Link href="https://linkedin.com/in/gipacheco" target="_blank">Linkedin</Link>
        </li>
      </ul>
    </div>
  )
}

