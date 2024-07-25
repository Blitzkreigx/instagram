export default function BottomNavBarMovil () {
    return (
        <>
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
        </>
    )
}
