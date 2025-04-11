export function MatchTile(){
    return(
        <article className="bg-gray-700/30 backgrop-blug-lg rounded-lg text-white w-[200px] gap-2 p-3 flex items-center flex-col shadow-lg">
            <img src="" className="w-[100px] border-[1px] border-violet-600 h-[100px] rounded-full object-contain" alt="" />
            <h1> User name </h1>
            <article className="flex gap-2 items-center">
                <button className="p-1 border-2 shadow-lg flex items-center rounded-lg hover:bg-violet-600">
                    <i className="pi pi-github"></i>
                </button>
                <button className="p-1 border-2 shadow-lg flex items-center rounded-lg hover:bg-violet-600">
                    <i className="pi pi-linkedin"></i>
                </button>
            </article>
            <button className="rounded-md p-2 font-medium flex items-center gap-2 border-[1px]">
                <i className="pi pi-plus"></i>
                Connect
            </button>
        </article>
    )
}