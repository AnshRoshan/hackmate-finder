export default function Header(){
    return(
            <header className="flex border-b-[1px] border-gray-700 rounded-lg shadow-lg items-center justify-between backdrop-blur-lg shadow-mds">
                <div className="logo flex items-center gap-2">
                    <img className="object-contain h-[70px]" src="https://img.freepik.com/premium-photo/logo-with-hooded-hacker_941097-26965.jpg?w=360" alt="" />
                    <h1 className="text-2xl font-medium text-violet-400">Hacker Finder</h1>
                </div>
                <nav>
                    <ul className="flex flex-1 max-w-[600px] gap-4 px-5 items-center py-4">
                        <li className="relative rounded-full border-2 border-violet-400 w-8 h-8 flex items-center justify-center">
                            <i className="pi text-violet-400 pi-bell"></i>
                        </li>
                        <li>
                            <button className="bg-violet-400 rounded-md py-2 px-2 shadow-lg border-2 border-gray-700 text-sm font-medium"> 
                                Logout
                            </button>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}