export function Footer(){
    return (
        <div className='w-full bg-neutral-700 h-[550px] mt-20 flex justify-center'>
            <div className='mt-[45px] w-[500px] flex items-center flex-col'>
                <h1 className='text-3xl text-white mb-[10px]'>Tetap Terhubung</h1>
                <p className='text-1xl text-white font-bold'>Daftarkan E-mail Anda Untuk Penawaran</p>
                <p className='text-1xl text-white font-bold'>Menarik Dari Kami.</p>
                <div className="flex mt-[20px]">
                    <div className="relative w-full">
                        <input id="search-dropdown" className=" rounded-l-lg block p-2.5 w-[450px] z-20 text-sm bg-neutral-700 rounded-r-lg border-l-gray-500 border-l-2 border-[1px] " placeholder="Enter Your Email Here" required />
                        <button type="submit" className="absolute w-[100px] top-0 right-0 p-2.5 text-sm font-medium text-white bg-red-600 rounded-r-lg border border-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            Daftar
                        </button>
                    </div>
                </div>
                <div className="flex flex-row mt-[20px]  w-[350px]">
                    <div className="flex flex-col mr-[50px]">
                        <h1 className="font-bold text-white">Magurameudon</h1>
                        <h1 className="text-white">Home</h1>
                        <h1 className="text-white">About Us</h1>
                        <h1 className="text-white">Our Menu</h1>
                        <h1 className="text-white">Promo</h1>
                        <h1 className="text-white">Contact</h1>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-slate-400 text-sm mt-[5px]">Connect With Us On</h1>
                        <h1 className="text-slate-400 text-sm mt-[5px]">Customer Hotline Service</h1>
                        <h1 className="text-slate-200 mt-[5px]">+62 811 3453 345 (WA,SMS, or Call).</h1>
                        <p className="text-slate-400 text-xs mt-[5px]">©2017 Marugame Udon. All rights reserved</p>
                        <div className="mt-[5px]">
                            <img className="w-[75px]" src="https://www.marugameudon.co.id/webroot/assets/img/halal.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}