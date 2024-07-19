export default function User () {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="flex justify-start items-center gap-[10px]">
                    <div className="bg-zinc-900 w-[50px] h-[50px] rounded-full cursor-pointer">
                        <img src="" alt="" />
                    </div>
                    <div>
                        <p className="cursor-pointer">monserrat_k3</p>
                        <p className="text-zinc-500">Suggested for you</p>
                    </div>
                </div>
                <button className="text-blue-800">Follow</button>
            </div>
        </>
    )
}