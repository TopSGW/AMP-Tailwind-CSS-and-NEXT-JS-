import part21 from '../img/part21.png';
import part22 from '../img/part22.png';
import part17 from '../img/part17.png';
export default function BodyPart2(){
    return(
        <>
            <div className="w-screen bg-[#00AC95]">
                <div className="px-[10%] pt-5 pb-7">
                    <div className="flex flex-wrap">
                        <div className='min-w-full sm:flex-[1_1_65%] sm:min-w-[65%]'>
                            <div>
                                <h1 className="text-[#A4EDC2] font-bold text-lg"
                                 style={{fontFamily:'Montserrat'}}>¿Cuál es la mejor ciudad<br/>
                                    para estudiar en Australia?</h1>
                            </div>
                        </div>
                        <div className='min-w-full pt-4 sm:flex-[1_1_35%] sm:pt-0 sm:min-w-[35%]'>
                            <div className='flex justify-start sm:justify-end'>
                                <div className="">
                                    <amp-img src={part21.src} width="50" height='50'/>
                                    <div className='text-center'>
                                        <h1 className='text-xs text-white leading-tight'
                                            style={{fontFamily:'GothamLight'}}>Brisbane</h1>
                                    </div>
                                </div>
                                <div className='pl-10'>
                                    <amp-img src={part22.src} width="50" height='50'/>
                                    <div className='text-center'>
                                        <h1 className='text-xs text-white leading-tight'
                                            style={{fontFamily:'GothamLight'}}>Melbourne</h1>
                                    </div>
                                </div>
                                <div className='pl-10'>
                                    <amp-img src={part17.src} width="50" height='50'/>
                                    <div className='text-center'>
                                        <div className='text-xs text-white leading-tight'
                                         style={{fontFamily:'GothamLight'}}>Sydney</div>
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