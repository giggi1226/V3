import Link from 'next/link'

export const NavBar = () => {
  return (
    <ul className="flex bg-blue text-offWhite">
      <li>
        <Link href="/blog">Blog</Link>
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
  )
}

