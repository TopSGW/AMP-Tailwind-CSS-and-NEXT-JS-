import part51 from '../img/part58.png';
import part52 from '../img/part52.png';
import part53 from '../img/part53.png';
import part54 from '../img/part54.png';
import part55 from '../img/part55.png';
import part56 from '../img/part56.png';
import part57 from '../img/part57.png';
import leftImg from '../img/Asset3.png'
import { url } from 'inspector';
export default function BodyPart5(){
    return(
        <div className="w-screen">
            <div className="flex flex-wrap">
                <div className="min-w-full sm:flex-[1_1_55%] sm:min-w-[55%] relative">
                        <amp-img src={part51.src} width="1441" height='961' layout='responsive' 
                            className='block object-cover object-center w-full h-full z-[-1]'/>
                    <div className='absolute z-[1] inset-x-0 top-0'>
                        <div className='pt-[20px] pl-[20px]'>
                            <h1 className='text-xl text-black font-bold' style={{fontFamily:'Montserrat'}}>
                                ¿Qué puedes
                            </h1>
                            <h1 className='text-xl text-black font-bold' style={{fontFamily:'Montserrat'}}>estudiar en</h1>
                            <h1 className='text-xl text-black font-bold' style={{fontFamily:'Montserrat'}}>Australia?</h1>
                            <div className='pt-[5%]'>
                                <div className='flex justify-start'>
                                    <div className='w-30 h-30'>
                                        <amp-img src={part52.src} width='30' height='30'/>
                                    </div>
                                    <div className='w-30 h-30 pl-2'>
                                        <amp-img src={part53.src} width='30' height='30'/>
                                    </div>
                                    <div className='w-30 h-30 pl-2'>
                                        <amp-img src={part54.src} width='30' height='30'/>
                                    </div>
                                    <div className='w-30 h-30 pl-2'>
                                        <amp-img src={part55.src} width='30' height='30'/>
                                    </div>
                                    <div className='w-30 h-30 pl-2'>
                                        <amp-img src={part56.src} width='30' height='30'/>
                                    </div>
                                    <div className='w-30 h-30 pl-2'>
                                        <amp-img src={part57.src} width='30' height='30'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute z-[1] inset-x-0 bottom-0'>
                        <div className='pb-5 px-[10%]'>
                            <div className='flex justify-between'>
                                <amp-img src={leftImg.src} width="50" height='50'/>
                                <button type='button' className='self-center px-2 h-8 text-base text-white bg-yellow-500 rounded-full'
                                    style={{fontFamily:'Museo500'}}>
                                    Quiero tener una asesoría
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="min-w-full sm:flex-[1_1_45%] sm:min-w-[45%]">
                    <div className='grid grid-cols-2 grid-rows-2 min-w-full min-h-[400px] sm:min-h-full'>
                        <div className='bg-[#F3EFA1]'>
                            <div className='pl-[5%] pt-[20%]'>
                                <h1 className='text-[#00AC95] text-2xl' style={{fontFamily:'Museo500'}}>1</h1>
                                <h1 className='text-black text-xl font-semibold' style={{fontFamily:'Museo500'}}>
                                    Cursos<br/>
                                    de Inglés<br/>
                                    en Australia
                                </h1>
                                <p className='text-[#606060] text-xs leading-tight pb-2 pr-1'
                                 style={{fontFamily:'Museo300'}}>
                                    Sin importar tu nivel de Inglés, en
                                    Australia encontrarás diferentes
                                    opciones para estudiar este idioma
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#00AC95]'>
                            <div className='pl-[5%] pt-[20%]'>
                                <h1 className='text-[#FFFFFF] text-2xl' style={{fontFamily:'Museo500'}}>2</h1>
                                <h1 className='text-black text-xl font-semibold' style={{fontFamily:'Museo500'}}>
                                        Programas<br/>
                                        vocacionales<br/>
                                        o VET                                
                                </h1>
                                <p className='text-white text-xs leading-tight pb-2 pr-1'
                                    style={{fontFamily:'Museo300'}}>
                                        Son cursos técnicos que te
                                        ayudarán a adquirir más habilidades
                                        en ciertos campos y áreas de trabajo.
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#0085A9]'>
                            <div className='pl-[5%] pt-[20%]'>
                                <h1 className='text-[#FFFFFF] text-2xl' style={{fontFamily:'Museo500'}}>3</h1>
                                <h1 className='text-black text-xl font-semibold' style={{fontFamily:'Museo500'}}>
                                    Cursos<br/>
                                    TAFE                                
                                </h1>
                                <p className='text-white text-xs leading-tight pb-2 pr-1'
                                    style={{fontFamily:'Museo300'}}>
                                    Son muy similares a los cursos
                                    vocacionales pero son de mayor
                                    calidad y precio. La mayor diferencia
                                    entre el anterior y estos es que
                                    necesitas tener un nivel avanzado de
                                    Inglés para cursarlos.                                
                                </p>
                            </div>
                        </div>
                        <div className='bg-[#FFFFFF]'>
                            <div className='pl-[5%] pt-[20%]'>
                                <h1 className='text-[#00AC95] text-2xl' style={{fontFamily:'Museo500'}}>4</h1>
                                <h1 className='text-black text-xl font-semibold' style={{fontFamily:'Museo500'}}>
                                    Carreras<br/>
                                    universitarias
                                </h1>
                                <p className='text-[#606060] text-xs leading-tight pb-2 pr-1'
                                    style={{fontFamily:'Museo300'}}>
                                    Australia cuenta con una amplia lista
                                    de universidades reconocidas a nivel
                                    mundial por su alta calidad educativa.
                                    Puedes estudiar pregrados, posgrados
                                    y maestrías en la ciudad que elijas                                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}