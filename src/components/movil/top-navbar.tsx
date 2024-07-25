'use client'
import { useState } from "react"

export default function TopNavBarMovil () {
    const [mouseEnter, setMouseEnter] = useState<boolean>(false)

    const HandleMouseEnter = (): void => {
        setMouseEnter(!mouseEnter)
    }

    return (
        <>
            <div className='lg:hidden'>
                <div className="flex justify-between items-center p-[10px]">
                <div className="flex justify-center items-center cursor-pointer relative">
                    <button 
                        className='flex' 
                        onClick={HandleMouseEnter}
                    >
                        <img src="/name-instagram-hd.png" alt="instagram" className="max-h-[40px]" />
                        <img src="/chevron-down.svg" alt="deploy menu" />
                    </button>
                    <div className={`${mouseEnter ? 'flex' : 'hidden'} bg-zinc-900 absolute top-full left-0 p-[10px] rounded-[5px] flex-col justify-center items-center gap-[15px]`}>
                        <a href='' className="flex justify-center items-center gap-[25px]">
                            <p>Following</p>
                            <img src="/followers.svg" alt="followers" />
                        </a>
                        <a href='' className="flex justify-center items-center gap-[25px]">
                            <p>Favorites</p>
                            <img src="/favorites.svg" alt="favorites" />
                        </a>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-[15px]">
                    <a href="">
                        <img src="/heart.svg" alt="notifications" className='cursor-pointer' />
                    </a>
                    <a href="">
                        <img src="/message.svg" alt="messages" className='cursor-pointer' />
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}
