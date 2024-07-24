import NavBarDesktop from '@/components/desktop/navbar';
import SideBarDesktop from '@/components/desktop/sidebar';
import BottomNavBarMovil from '@/components/movil/bottom-navbar';
import TopNavBarMovil from '@/components/movil/top-navbar';
import Publication from '@/components/shared/publications'
import ThreadPublicaton from '@/components/shared/threads'
import Stories from '@/components/shared/stories'

export default function Home() {
  return (
    <main className="bg-black text-primary text-[13px] w-full lg:flex h-auto lg:h-screen overflow-hidden">
      
      <TopNavBarMovil />
      <NavBarDesktop />

      <div className='lg:w-[82%] lg:flex lg:overflow-y-scroll'>
        <div className='lg:w-[65%]'>
          <div className='flex items-center gap-[10px] w-auto overflow-hidden lg:p-[30px] xl:justify-center'>
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
            <Stories />
          </div>

          <div className='px-[30px] py-[20px] lg:py-[10px]'>
            <Publication />
            <Publication />
            <div className="max-w-[450px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-[5px]">
                        <div className="w-[35px] h-[35px] rounded-full border-[1px] border-zinc-800 flex justify-center items-center">
                            <img src="/brand-threads.svg" alt="threads" />
                        </div>
                        <p className="font-bold">Threads</p>
                    </div>
                    <a href="" className="text-links">Open Threads</a>
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

        <SideBarDesktop />
      </div>

      <BottomNavBarMovil />
    </main>
  );
}
