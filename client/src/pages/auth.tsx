export default function AuthPage(){
    return(
        <section className="flex items-center justify-center items-center w-screen h-screen bg-black">
            <div className="rounded-md shadow-lg border-white border-[2px] flex-row items-center bg-gray-700/40 backdrop-blur-lg justify-center">
                <div className="flex items-center py-3 border-b-[1px] border-gray-300 justify-center">
                    <div className="logo flex items-center gap-2">
                        <img className="object-contain h-[50px] rounded-full" src="https://img.freepik.com/premium-photo/logo-with-hooded-hacker_941097-26965.jpg?w=360" alt="" />
                        <h1 className="text-2xl font-medium text-violet-400">Hacker Finder</h1>
                    </div>
                </div>
                <div className="flex gap-2 w-full py-7 px-5">
                    <button className="bg-gray-700 gap-3 duration-250 flex hover:bg-gray-800 items-center text-sm rounded-lg p-2 text-white shadow-lg">
                        <i className="pi pi-github"></i>
                        Sign in with Github
                    </button>
                    <button className="bg-blue-700 gap-3 duration-250 flex hover:bg-blue-800 items-center text-sm rounded-lg p-2 text-white shadow-lg">
                        <i className="pi pi-linkedin"></i>
                        Sign in with Linkedin
                    </button>
                </div>
            </div>
        </section>
    )
}