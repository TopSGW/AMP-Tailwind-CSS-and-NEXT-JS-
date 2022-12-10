import part21 from '../img/part21.png';
import part22 from '../img/part22.png';
import part17 from '../img/part17.png';
export default function BodyPart2(){
    return(
        <>
            <div className="w-screen bg-[#00AC95]">
                <div className="px-[10%] pt-5 pb-7">
                    <div className="flex justify-between max-sm:flex-wrap">
                        <div className='min-w-full sm:w-[60%] sm:min-w-[60%]'>
                            <div>
                                <h1 className="text-[#A4EDC2] font-extrabold text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl"
                                 style={{fontFamily:'Montserrat'}}>¿Cuál es la mejor ciudad
                                    para estudiar en Australia?
                                </h1>
                            </div>
                        </div>
                        <div className='min-w-full pt-4 sm:w-[30%] sm:pt-0 sm:min-w-[35%]'>
                            <div className='flex justify-between'>
                                <div className="w-[20%] min-w-[20%]">
                                    <amp-img src={part21.src} width="52" height='52' layout='responsive'/>
                                    <div className='text-center mt-1'>
                                        <h1 className='text-xs md:text-sm xl:text-xl text-white leading-tight'
                                            style={{fontFamily:'Musem500'}}>Brisbane</h1>
                                    </div>
                                </div>
                                <div className='w-[20%] min-w-[20%]'>
                                    <amp-img src={part22.src} width="50" height='50' layout='responsive'/>
                                    <div className='text-center mt-1'>
                                        <h1 className='text-xs md:text-sm xl:text-xl text-white leading-tight'
                                            style={{fontFamily:'Musem500'}}>Melbourne</h1>
                                    </div>
                                </div>
                                <div className='w-[20%] min-w-[20%]'>
                                    <amp-img src={part17.src} width="50" height='50' layout='responsive'/>
                                    <div className='text-center mt-1'>
                                        <div className='text-xs md:text-sm xl:text-xl text-white leading-tight'
                                         style={{fontFamily:'Musem500'}}>Sydney</div>
                                    </div>
                                </div>            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}