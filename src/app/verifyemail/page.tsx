export default function VerifyEmail() {
    // const verifyinput = focus; 
    return (
        <>
            <div className="grid grid-cols-12 justify-center">
                <div className="mt-10 lg:col-span-4 lg:col-start-5 rounded-2xl border-2 border-slate-400 sm:col-span-6 sm:col-start-4 md:col-span-6 md:col-start-4 p-3">
                    <div>
                        <h2 className="mt-10 text-3xl text-center font-bold leading-9 tracking-tight text-gray-900">Verify your email</h2>
                        <p className="text-base text-center leading-9 tracking-tight text-gray-900">Enter the 8 digit code you have received on <br />
                            swa***@gmail.com</p>
                    </div>
                    <div className="flex flex-col justify-start mx-24">
                        <span className="text-lg">code</span>
                        <div className="flex justify-center">
                        <form action="#" method="get">
                                <input className="verifyinput appearance-none" type="number" name="" id="" placeholder="0" min={0} max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                                <input className="verifyinput" type="number" name="" id="" placeholder="0" min="0" max={9} maxLength={1} required />
                            </form>
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="m-10 mx-auto flex w-9/12 justify-center rounded-md bg-slate-800 py-4 text-base font-semibold leading-6 text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700">
                            Verify
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}