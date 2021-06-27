import Link from 'next/link'

const NavBar = () => {
    return (
        <div class="text-white flex place-content-center font-roboto space-x-6">
        <Link href="/">
            <a>Home</a>
        </Link>
        <Link href="/music">
            <a>Music</a>
        </Link>
        <Link href="/">
            <a>Merch</a>
        </Link>
        </div>
    )
}

export default NavBar;