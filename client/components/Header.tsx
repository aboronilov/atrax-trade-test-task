import Image from 'next/image'
import Link from 'next/link'
import { ModeToggle } from './ThemeToggler'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='flex items-center justify-between px-8 py-5'>
            <Link href="https://www.atrucks.su/" target='_blank' className='flex items-center cursor-pointer'>
                <div className='bg-red-300 dark:bg-black w-fit'>
                    <Image
                        src='https://www.atrucks.su/static/images/logo.3f0bed1d838c.png'
                        alt='logo'
                        className='invert'
                        height={50}
                        width={50}
                    />
                </div>
            </Link>
            <h1 className='font-bold text-xl'>Fullstack developer test task</h1>
            <ModeToggle className="" />
        </header>
    )
}

export default Header