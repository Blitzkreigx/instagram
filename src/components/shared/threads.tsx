export default function ThreadPublicaton () {
    return (
        <>
            <div className="flex flex-col gap-[10px] border-[1px] border-zinc-800 rounded-[10px] p-[15px] min-w-[400px] min-h-[180px] my-[25px] mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex justify-center items-center gap-[5px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-zinc-900">
                            <img src="" alt="" />
                        </div>
                        <p className="font-bold">dani_rep</p>
                    </div>
                    <p className="text-secondary">3d</p>
                </div>
                <div className="flex justify-between items-center gap-[10px]">
                    <div className="w-full flex flex-col items-end">
                        <p>Las economías más grandes del mundo en 2075, proyectadas por Goldman Sachs:</p>
                        <span>... <button className="text-links">more</button></span>
                    </div>
                    <div className="min-w-[70px] min-h-[70px] rounded-[5px] bg-zinc-900">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="flex justify-start items-center gap-[5px] text-secondary">
                    <p>11 replies</p>
                    <p>•</p>
                    <p>107 likes</p>
                </div>
            </div>
        </>
    )
}