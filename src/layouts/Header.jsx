import { useEffect, useState } from 'react'
import {
  AlignLeft,
  Heart,
  Search,
  ShoppingBag,
  User
} from 'react-feather'
import NavLink from '../components/NavLink'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setIsMobile(window.outerWidth <= 1024 ? true : false)
  }, [isMobile])

  return (
    <header className='w-full flex flex-row backdrop-blur-3xl h-16 sticky top-0 left-0 justify-between items-center px-4 z-50'>
      <div className='flex flex-row gap-x-10 items-center'>
        <img
          src='/logo.png'
          loading='lazy'
          className='h-[50px]'
        />
      </div>
      {!isMobile ? (
        <div className='gap-x-4 flex flex-row items-center'>
          <input
            required
            className='w-[255px] px-4 py-1 bg-gray-700/25 outline-none backdrop:blur-3xl rounded-lg'
            placeholder='Search'
            onChange={e => setQuery(e.target.value)}
          ></input>

          <a
            href={query !== '' ? `/search?q=${query}` : null}
            className='px-4 py-2 bg-gray-700/25 backdrop-blur-3xl rounded-lg'
            type='submit'
          >
            <Search size='1rem' />
          </a>
        </div>
      ) : (
        <></>
      )}
      <AlignLeft
        className='lg:hidden'
        onClick={() => {
          const navbar = document.querySelector('.navbar')
          navbar.classList.toggle('flex')
          navbar.classList.toggle('hidden')

        }}
      />
      <div className='navbar hidden backdrop-blur flex-col fixed top-16 left-0 gap-y-8 bg-black py-6 border border-gray-800 h-auto w-full lg:relative lg:bg-transparent lg:border-none lg:top-0 lg:left-4 lg:flex lg:flex-row lg:gap-x-6 items-center '>
        <NavLink
          href='#'
          text='Erkek'
        />
        <NavLink
          href='#'
          text='Kadın'
        />
        <NavLink
          href='#'
          text='Çocuk'
        />
        <NavLink
          href='#'
          text='Spor'
        />
        <NavLink
          href='#'
          text='Markalar'
        />
        <NavLink
          href='#'
          text='Lifestyle'
        />
        <NavLink
          href='#'
          text={<User />}
        />
        <NavLink
          href='#'
          text={<Heart />}
        />
        <NavLink
          href='#'
          text={<ShoppingBag />}
        />
        {isMobile ? (
          <div className='gap-x-4 flex flex-row items-center'>
            <input
              required
              className='w-[255px] px-4 py-1 bg-gray-700/25 outline-none backdrop:blur-3xl rounded-lg'
              placeholder='Search'
              onChange={e => setQuery(e.target.value)}
            ></input>

            <a
              href={
                query !== ''
                  ? `/search?q=${query.replace(' ', '%20')}`
                  : null
              }
              className='px-4 py-2 bg-gray-700/25 backdrop:blur-3xl rounded-lg'
              type='submit'
            >
              <Search size='1rem' />
            </a>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  )
}

export default Header
