export default function Publication () {
    return (
        <>
            <div className="max-w-[450px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-[5px]">
                        <div className="bg-zinc-900 w-[40px] h-[40px] rounded-full">
                            <img src="" alt="" />
                        </div>
                        <a href="">dani_rep</a>
                        <p className="text-zinc-500">•</p>
                        <p className="text-zinc-500">1d</p>
                    </div>
                    <button>
                        <img src="/dots.svg" alt="dots" />
                    </button>
                </div>
                <div className="w-full h-[600px] bg-zinc-900 my-[10px] rounded-[5px] border-[1px] border-zinc-700">
                    <img src="" alt="" />
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-[10px]">
                            <a href="">
                                <img src="/heart.svg" alt="heart" className='w-[25px]' />
                            </a>
                            <a href="">
                                <img src="/comment.svg" alt="comment" className='w-[25px]' />
                            </a>
                            <a href="">
                                <img src="/send.svg" alt="share" className='w-[25px]' />
                            </a>
                        </div>
                        <a href="">
                            <img src="/save.svg" alt="save" className='w-[25px]' />
                        </a>
                    </div>
                    <div className="py-[5px]">
                        <a href="" className="font-bold">20,097 Likes</a>
                        <div className="py-[5px] flex flex-col items-start justify-center gap-[5px]">
                            <p><a href="" className="font-bold">dani_rep</a> Os dejo x aquí unas fotitos de ayer ❤️</p>
                            <a href="" className="">See translation</a>
                        </div>
                        <a href="" className="text-zinc-500">View all 226 comments</a>
                        <div className="flex justify-between items-center gap-[5px] py-[5px]">
                            <input type="text" placeholder="Add a comment..." className="bg-black text-white border-none outline-none w-full placeholder:text-zinc-500" />
                            <button>
                                <img src="/mood-smile.svg" alt="smile" className='w-[20px]' />
                            </button>
                        </div>
                    </div>
                </div>
                <hr className="my-[15px] border-zinc-800" />
            </div>
        </>
    )
}
