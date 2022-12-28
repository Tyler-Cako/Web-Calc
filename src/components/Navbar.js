import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="bg-sky-400 container mb-3 min-w-full">
            <ul className="list-none flex-row justify-start flex-space-between content-between">
                <li className="text-slate-50 cursor-pointer my-1 px-6 py-3 hover:bg-gray-50/20 rounded-md">
                    <Link to="/" className="">Home</Link>
                </li>
                <li className="text-slate-50 cursor-pointer my-1 px-6 py-3 hover:bg-gray-50/20 rounded-md">
                    <Link to="/calculus">Calculus</Link>
                </li>
                <li className="text-slate-50 cursor-pointer my-1 px-6 py-3 hover:bg-gray-50/20 rounded-md">
                    <Link to="/algebra">Algebra</Link>
                </li>
                <li className="text-slate-50 cursor-pointer my-1 px-6 py-3 hover:bg-gray-50/20 rounded-md">
                    <Link to="/graphing">Graphing</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;