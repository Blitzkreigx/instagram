import User from "@/components/shared/users"

export default function SideBarDesktop () {
    return (
        <>
            <div className='hidden lg:block w-[35%] py-[30px]'>
                <div className='max-w-[80%] mx-auto'>
                    <div className="flex justify-between items-center">
                        <div className="flex justify-start items-center gap-[10px]">
                            <div className="bg-zinc-900 w-[50px] h-[50px] rounded-full cursor-pointer">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p className="cursor-pointer">dani_rep</p>
                                <p className="text-secondary">daniel hidalgo</p>
                            </div>
                        </div>
                        <button className="text-links">Switch</button>
                    </div>
                </div>
                <div className='max-w-[80%] mx-auto mt-[25px] mb-[50px]'>
                    <div className='flex justify-between items-center py-[10px]'>
                    <p className="text-secondary">Suggested for you</p>
                    <a href=''>See All</a>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    <User/>
                    </div>
                </div>
                <div className='max-w-[80%] mx-auto text-secondary text-[12px]'>
                    <ul className='flex flex-wrap gap-[5px]'>
                    <li><a href="">About</a></li>
                    <li>•</li>
                    <li><a href="">Help</a></li>
                    <li>•</li>
                    <li><a href="">Press</a></li>
                    <li>•</li>
                    <li><a href="">API</a></li>
                    <li>•</li>
                    <li><a href="">Jobs</a></li>
                    <li>•</li>
                    <li><a href="">Privacy</a></li>
                    <li>•</li>
                    <li><a href="">Terms</a></li>
                    <li>•</li>
                    <li><a href="">Locations</a></li>
                    <li>•</li>
                    <li><a href="">Language</a></li>
                    <li>•</li>
                    <li><a href="">Meta Verified</a></li>
                    </ul>
                    <p className='my-[20px]'>© 2024 INSTAGRAM FROM META</p>
                </div>
            </div>
        </>
    )
}
