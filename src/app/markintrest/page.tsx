export default function MarkIntrest() {
    return (
        <>
            <div className="grid grid-cols-12 justify-center">
                <div className="mt-10 lg:col-span-4 lg:col-start-5 rounded-2xl border-2 border-slate-400 sm:col-span-6 sm:col-start-4 mx-24">
                    <div>
                        <h2 className="mt-10 text-3xl text-center font-bold leading-9 tracking-tight text-gray-900">Please mark your interests!</h2>
                        <p className="text-base text-center leading-9 tracking-tight text-gray-900">We will keep you notified.</p>
                    </div>
                    <div className="mx-6">
                        <div className="flex flex-col lg:mx-10 ">
                            <h2 className="font-bold mt-4 text-xl">My saved interests!</h2>
                            <div className="flex mt-4">
                                <form action="#" method="">
                                    <input type="checkbox" name="shoes" id="" className="h-6 w-6 accent-black mr-2 my-2" checked /><span className="text-base">Shoes</span>  <br />
                                    <input type="checkbox" name="men-t-shirt" id="" className="h-6 w-6 accent-gray-400 my-2 mr-2" /> Man T-shirts <br />
                                    <input type="checkbox" name="makeup" id="" className="h-6 w-6 accent-black mr-2 my-2" checked /> Makeup <br />
                                    <input type="checkbox" name="jewellery" id="" className="h-6 w-6 accent-black mr-2 my-2" checked /> Jewellery <br />
                                    <input type="checkbox" name="women-t-shirt" id="" className="h-6 w-6 accent-gray-400 my-2 mr-2" /> Women T-shirts <br />
                                    <input type="checkbox" name="furniture" id="" className="h-6 w-6 accent-black mr-2 my-2" checked /> Furniture <br />
                                </form>
                            </div>
                        </div>
                        <div className="flex justify-start text-xl m-8">
                            <span >&lt;&lt;  &lt;  1  2  3  <b>4</b>  5  6  7 ... &gt;   &gt;&gt;</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}