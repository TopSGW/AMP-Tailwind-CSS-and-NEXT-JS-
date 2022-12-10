import part41 from '../img/part41.png';
export default function BodyPart4(){
    return(
        <div className="w-screen h-30 bg-[#00AC86]">
            <div className="mx-[15%]">
                <div className="flex max-sm:flex-wrap sm:justify-between">
                    <div className="min-w-full mt-5 sm:min-w-[10%] sm:w-[10%] sm:mt-[3.5vw] 
                        sm:mb-[2.5vw] self-center">
                        <div className='flex justify-center'>
                            <div className='w-[10%] sm:w-[80%]'>
                                <amp-img src={part41.src} width="211" height='296' layout='responsive' className='block self-center w-full h-full'/>
                            </div>
                        </div>
                    </div>
                    <div className='min-w-full mb-5 mt-5 sm:min-w-[70%] sm:w-[70%] self-center'>
                        <h1 className='text-lg font-extrabold text-[#A4EDC2] text-center 
                            sm:text-[4.4vw] sm:leading-[4.2vw]'
                            style={{fontFamily:'Montserrat'}}>
                            Contácta AHORA con un guía Nōmada  
                        </h1>
                        <div className="mt-[1vw] flex rounded-full bg-[#86efac] text-white w-full">
                            <input
                                type="search"
                                className="w-full bg-transparent px-4 py-1 text-white outline-none focus:outline-none"
                                placeholder="Your email"
                                />
                            <button
                                type="button"
                                className="px-4 py-2 bg-white rounded-full text-black" style={{fontFamily:'Museo300'}}>
                                Contactanos
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}