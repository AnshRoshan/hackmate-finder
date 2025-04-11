import Header from '../components/header'
import Footer from '../components/footer'
import MatchSearches from './matchesSearch'

export default function HomePage(){
    return(
        <>
        <section className="bg-black min-h-screen">
            <Header/>
            <article className='mb-3'></article>
            <section className='flex items-center justify-evenly pt-10'>
                <div className='text-white'>
                    <img src="/illustration.png" className='object-contain m-auto mb-5 w-[300px]' alt="img" />
                    <h1 className='text-3xl font-medium pb-5 text-center'>Find the Perfect Dev for you</h1>
                    <p className='max-w-md text-center mb-5 m-auto'>Connect with Developers who match your skill set and build connections through our portal</p>
                    <div className='p-2 flex items-center m-auto gap-4 rounded-[40px] px-5 w-fit border'>
                        <article className='flex items-center gap-2'>
                            <i className='pi pi-user'></i>
                            14k+ devs
                        </article>
                        <span className='inline-block h-5 w-[1px] bg-gray-400'></span>
                        <article className='flex items-center gap-2'>
                            <i className='pi pi-user'></i>
                            5k+ events
                        </article>
                        <span className='inline-block h-5 w-[1px] bg-gray-400'></span>
                        <article className='flex items-center gap-2'>
                            <i className='pi pi-code'></i>
                            3k+ tech stack
                        </article>
                    </div>
                </div>
                <div className='border-[.125px] border-white text-white p-5 flex flex-col gap-5 max-w-md rounded-2xl'>
                    <div className='pb-2'>
                        <h1 className='text-3xl font-medium'>Find the Hacker</h1>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm mb-2 font-medium'>Skills</label>
                        <input type="text" className='border border-white outline-none rounded-md p-2' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-sm mb-2 font-medium'>Resume</label>
                        <input
                            type="file"
                            className="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4 file:rounded-md
                                border border-white rounded-md file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-400 outline-none"
                        />
                    </div> 
                    {/* <div className='flex items-center gap-2'>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-sm mb-2 font-medium'>Linkedin</label>
                            <input type="text" className='border outline-none border-white rounded-md p-2' />
                        </div>
                        <div className='flex flex-col flex-1'>
                            <label htmlFor="" className='text-sm mb-2 font-medium'>Github</label>
                            <input type="text" className='border outline-none border-white rounded-md p-2' />
                        </div>
                    </div> */}
                    <div className='flex items-center justify-center my-3 w-full'>
                        <button className='border flex items-center gap-2 uppercase text-xs hover:bg-black duration-300 hover:text-violet-500 border-violet-500 rounded-2xl ms-auto px-4 p-2 text-white text-sm bg-violet-500 text-black font-medium'>
                            <i className='pi pi-search'></i>
                            Search
                        </button>
                    </div>
                </div>
            </section>
            <Footer/>
        </section>
        <MatchSearches/>
        </>
    )
}