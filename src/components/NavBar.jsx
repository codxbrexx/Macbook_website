import { navLists } from "../constants"

const NavBar = () => {
    
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
            <nav className="flex w-full screen-max-width">
                <img  src={`${import.meta.env.BASE_URL}logo.svg`} alt="Apple logo" />

                <ul>
                    {navLists.map(({ label }) => (
                        <li key={label}>
                            <a href={label}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src={`${import.meta.env.BASE_URL}search.svg`} alt="Search" />
                    </button>
                    <button>
                        <img src={`${import.meta.env.BASE_URL}cart.svg`} alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar
