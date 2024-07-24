export default function NavBarDesktop () {
    return (
        <>
            <div className='hidden w-[18%] border-r-[1px] border-zinc-800 py-[25px] pl-[20px] pr-[10px] lg:flex flex-col justify-between items-start text-[16px]'>
                <a href=''>
                    <img src="/name-instagram-hd.png" alt="instagram" className="max-h-[35px]" />
                </a>
                <div className='flex flex-col justify-center items-start gap-[10px] w-full'>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <img src="/home.svg" alt="home" className='w-[30px]' />
                        <b className='hidden xl:block'>Home</b>
                    </a>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <img src="/search.svg" alt="search" className='w-[30px]' />
                        <p className='hidden xl:block'>Search</p>
                    </a>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <img src="/compas.svg" alt="explore" className='w-[30px]' />
                        <p className='hidden xl:block'>Explore</p>
                    </a>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <img src="/reels.svg" alt="reels" className='w-[30px]' />
                        <p className='hidden xl:block'>Reels</p>
                    </a>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <img src="/message.svg" alt="message" className='w-[30px]' />
                        <p className='hidden xl:block'>Message</p>
                    </a>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <img src="/create.svg" alt="create" className='w-[30px]' />
                        <p className='hidden xl:block'>Create</p>
                    </a>
                    <a href="" className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                        <div className="w-[30px] h-[30px] bg-zinc-900 rounded-full"></div>
                        <p className='hidden xl:block'>Profile</p>
                    </a>
                </div>
                <a href='' className='cursor-pointer flex justify-start items-center gap-[15px] hover:bg-zinc-900 rounded-[8px] p-[10px] w-full'>
                    <img src="/menu.svg" alt="menu" className='w-[30px]' />
                    <p className='hidden xl:block'>More</p>
                </a>
            </div>
        </>
    )
}
