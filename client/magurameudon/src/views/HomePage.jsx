import { useState } from "react"

export function HomePage(){

    const slide = [
        {
            url : 'https://www.marugameudon.co.id/webroot/files/AboutSliders/picture/1674441379/FA_MU_Web%20banner_STU_1280x680px.jpg'
        },
        {
            url : 'https://www.marugameudon.co.id/webroot/files/AboutSliders/picture/1674528587/FA_MU_Web%20banner_KCS_1280x680px.jpg'
        },
        {
            url : 'https://www.marugameudon.co.id/webroot/files/AboutSliders/picture/1676256055/FA_MU-10th%20Promo_Web%20Banner_1280x680px.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slide.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slide.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    
    return (
        <div className="mx-[150px] ">
            <div className=" flex justify-center flex-col items-center max-w-[1400px] h-[550px] w-full m-auto  relative group ">
                <h1 className="text-6xl font-light mb-[30px]">
                    PROMO ANNIVARSARY
                </h1>
                <div style={{backgroundImage : `url(${slide[currentIndex].url})`}} className="ml-[50px] mt-[0px] w-[910px] h-[450px] rounded-2xl bg-center bg-cover duration-500"></div>
                {/* LEFT ARROW */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                    <svg onClick={prevSlide} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                {/* RIGHT ARROW */}
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                    <svg onClick={nextSlide}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
            <h1 className="text-2xl font-light mb-[30px] border-b pb-[20px] mt-[100px]">
                News and Update
            </h1>
            <div className=" w-full  flex">
                    <div className="h-48 lg:h-auto lg:w-[600px] flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('https://www.marugameudon.co.id/webroot/files/AboutSliders/picture/1676256055/FA_MU-10th%20Promo_Web%20Banner_1280x680px.jpg')`}} title="Woman holding a mug">
                    </div>
                    <div className=" w-full h-[400px] border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                        <p className="text-sm text-gray-600 flex items-center mt-[20px] ml-[20px]">
                            News Update | SPECIAL PROMO
                        </p>

                        <h1 className="text-gray-900 mt-[40px] text-4xl font-light ml-[20px] ">PROMO ANNIVARSARY</h1>
                        
                        </div>
                        <div className="flex items-center">
                       
                        </div>
                    </div>
                    </div>

        </div>
    )
}