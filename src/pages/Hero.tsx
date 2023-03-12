import Carousel from "./Carousel";
import CarouselSlider from "./CarouselSlider";

export default function Hero(){
    return(
        <section className="min-h-screen bg-gradient-to-br from-slate-900 to-teal-900 text-slate-200 px-6 md:px-14 lg:px-28 ">
            <div className="grid grid-rows-3 min-h-screen">
                <div className="grid row-span-1 grid-cols-1 md:row-span-2 md:grid-cols-2">
                    <div>
                        <div className="grid grid-flow-row auto-rows-max">
                            <div className="my-[30%]">
                            <h1 className="text-4xl font-bold mb-6 text-teal-900">Welcome to Al Faruq Islamic Center</h1>
                                <p className="text-green-900 text-md mb-8">Join us for daily prayers, weekly programs, community events and much more.</p>
                            </div>
                        </div>
                    </div>
                    <div>                        
                        <CarouselSlider slides={[
                            <div className="rounded-lg bgSlide h-full w-full bg-no-repeat bg-contain border border-red-500"></div>,
                            <div className="rounded-lg bgSlideTall h-full w-full bg-no-repeat bg-contain border border-red-500"></div>,
                            <div className="rounded-lg bgSlideWide h-full w-full bg-no-repeat bg-contain border border-red-500"></div>
                        ]}></CarouselSlider>
                    </div>
                </div>
                <div className=" bg-cyan-500">
                    <div className="h-28">2</div>
                </div>
            </div>
            
        </section>
    )
}