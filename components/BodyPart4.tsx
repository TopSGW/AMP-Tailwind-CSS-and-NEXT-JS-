import part41 from '../img/part41.png';
export default function BodyPart4(){
    return(
        <div className="w-screen h-30 bg-[#00AC95]">
            <div className="ml-[10%] mr-[20%]">
                <div className="flex flex-wrap">
                    <div className="min-w-full mt-5 sm:min-w-[20%] sm:flex-[1_1_20%] sm:mt-0">
                        <div className='flex justify-center h-full'>
                            <amp-img src={part41.src} width="30" height='60' className='block self-center w-full h-full'/>
                        </div>
                    </div>
                    <div className='min-w-full mb-5 mt-5 sm:min-w-[80%] sm:flex-[1_1_80%]'>
                        <h1 className='text-lg text-[#A4EDC2] font-bold text-center'
                            style={{fontFamily:'Montserrat'}}>
                            Contácta AHORA 
                        </h1>
                        <h1 className='text-lg text-[#A4EDC2] font-bold text-center'
                            style={{fontFamily:'Montserrat'}}>
                            con un guía Nōmada
                        </h1>
                        <div className="flex rounded-full bg-[#86efac] text-white w-full">
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