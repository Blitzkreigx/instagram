import FollowedStories from '@/components/following'
import User from '@/components/users'
import Publication from '@/components/publications'
import ThreadPublicaton from '@/components/threads'
import DotsMobileStepper from '@/components/carousel'

export default function Home() {
  return (
    <main className="bg-black text-white text-[13px] w-full lg:flex h-auto lg:h-screen overflow-hidden">
      <div className='lg:hidden'>
        <div className="flex justify-between items-center p-[10px]">
          <div className="flex justify-center items-center cursor-pointer relative">
            <button className='flex'>
              <img src="/name-instagram-hd.png" alt="instagram" className="max-h-[40px]" />
              <img src="/chevron-down.svg" alt="chevron down" />
            </button>
            {/* <div className="bg-zinc-900 absolute top-full left-0 p-[10px] rounded-[5px] flex flex-col justify-center items-center gap-[15px]">
              <a href='' className="flex justify-center items-center gap-[25px]">
                <p>Following</p>
                <img src="/followers.svg" alt="followers" />
              </a>
              <a href='' className="flex justify-center items-center gap-[25px]">
                <p>Favorites</p>
                <img src="/favorites.svg" alt="favorites" />
              </a>
            </div> */}
          </div>
          <div className="flex justify-center items-center gap-[15px]">
            <a href="">
              <img src="/heart.svg" alt="heart" className='cursor-pointer' />
            </a>
            <a href="">
              <img src="/message.svg" alt="message" className='cursor-pointer' />
            </a>
          </div>
        </div>
      </div>
      <div className='hidden w-[18%] border-r-[1px] border-zinc-800 p-[30px] lg:flex flex-col justify-between items-start text-[16px]'>
        <a href=''>
          <img src="/name-instagram-hd.png" alt="instagram" className="max-h-[35px]" />
        </a>
        <div className='flex flex-col justify-center items-start gap-[30px]'>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <img src="/home.svg" alt="home" className='w-[30px]' />
            <b className='hidden xl:block'>Home</b>
          </a>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <img src="/search.svg" alt="search" className='w-[30px]' />
            <p className='hidden xl:block'>Search</p>
          </a>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <img src="/explore.svg" alt="explore" className='w-[30px]' />
            <p className='hidden xl:block'>Explore</p>
          </a>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <img src="/reels.svg" alt="reels" className='w-[30px]' />
            <p className='hidden xl:block'>Reels</p>
          </a>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <img src="/message.svg" alt="message" className='w-[30px]' />
            <p className='hidden xl:block'>Message</p>
          </a>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <img src="/create.svg" alt="create" className='w-[30px]' />
            <p className='hidden xl:block'>Create</p>
          </a>
          <a href="" className='cursor-pointer flex justify-start items-center gap-[15px]'>
            <div className="w-[30px] h-[30px] bg-zinc-900 rounded-full"></div>
            <p className='hidden xl:block'>Profile</p>
          </a>
        </div>
        <a href='' className='cursor-pointer flex justify-start items-center gap-[15px]'>
          <img src="/menu.svg" alt="menu" className='w-[30px]' />
          <p className='hidden xl:block'>More</p>
        </a>
      </div>

      <div className='lg:w-[82%] lg:flex lg:overflow-y-scroll'>
        <div className='lg:w-[65%]'>
          <div className='flex items-center gap-[10px] w-auto overflow-hidden lg:p-[30px] xl:justify-center'>
            <FollowedStories />
            <FollowedStories />
            <FollowedStories />
            <FollowedStories />
            <FollowedStories />
            <FollowedStories />
            <FollowedStories />
            <FollowedStories />
          </div>
          <div className='px-[30px] py-[20px] lg:py-[10px]'>
            <Publication />
            <Publication />
            <div className="max-w-[450px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-[5px]">
                        <div className="w-[35px] h-[35px] rounded-full border-[1px] border-zinc-800 flex justify-center items-center">
                            <img src="/brand-threads.svg" alt="treads" />
                        </div>
                        <p className="font-bold">Threads</p>
                    </div>
                    <a href="" className="text-blue-800">Open Threads</a>
                </div>
                <div className="flex gap-[25px] overflow-hidden">
                  <ThreadPublicaton />
                  <ThreadPublicaton />
                </div>
                <hr className="my-[15px] border-zinc-800" />
            </div>
            <Publication />
          </div>
        </div>

        <div className='hidden lg:block w-[35%] py-[30px]'>
          <div className='max-w-[80%] mx-auto'>
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[10px]">
                    <div className="bg-zinc-900 w-[50px] h-[50px] rounded-full cursor-pointer">
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p className="cursor-pointer">dani_rep</p>
                        <p className="text-zinc-500">daniel hidalgo</p>
                    </div>
                </div>
                <button className="text-blue-800">Switch</button>
            </div>
          </div>
          <div className='max-w-[80%] mx-auto mt-[25px] mb-[50px]'>
            <div className='flex justify-between items-center py-[10px]'>
              <p className="text-zinc-500">Suggested for you</p>
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
          <div className='max-w-[80%] mx-auto text-zinc-500'>
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
      </div>

      <div className="flex justify-around items-center fixed bottom-0 w-full bg-black py-[10px] lg:hidden">
        <a href=''>
          <img src="/home.svg" alt="home" />
        </a>
        <a href=''>
          <img src="/search.svg" alt="search" />
        </a>
        <a href=''>
          <img src="/create.svg" alt="create" />
        </a>
        <a href=''>
          <img src="/reels.svg" alt="reels" />
        </a>
        <a href=''>
          <div className="w-[30px] h-[30px] bg-zinc-900 rounded-full"></div>
        </a>
      </div>
    </main>
  );
}
