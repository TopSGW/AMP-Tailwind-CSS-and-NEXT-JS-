import part31 from '../img/part31.png';
import part32 from '../img/part32.png';
import part33 from '../img/part33.png';
import part34 from '../img/part34.png';
import part35 from '../img/part35.png';
import part36 from '../img/part36.png';
import part37 from '../img/part37.png';
export const config = { amp:true }
export default function BodyPart3(){
    return(
        <div className="w-screen">
            <amp-img src={part31.src} width="600" height='150' layout='responsive'
                className='w-full object-cover z-[-1] hidden sm:block sm:absolute'/>
            <div className='flex max-sm:flex-col sm:justify-between pb-5'>
                <div className='min-w-full sm:w-[33%] sm:min-w-[33%] max-sm:mb-2'>

                    <div className='flex sm:flex-col max-sm:justify-between'>

                        <div className='relative max-sm:w-[30%] max-sm:min-w-[30%]'>
                            <amp-img src={part32.src} width="875" height='981' layout='responsive'
                                className='w-full h-full object-cover'/>
                            <div className='absolute bottom-0 inset-x-0'>
                                <div className='relative h-10'>
                                    <div className='absolute top-0 min-w-full'>
                                        <div className='pl-[10%] pt-[5px] max-sm:pt-[16px]'>
                                            <div className='max-sm:w-[30px] max-sm:h-[30px] sm:hidden'>
                                                <amp-img src={part35.src} width="30" height='30' 
                                                    className='sm:hidden z-[20]'/>
                                            </div>
                                            <div className='max-sm:hidden'>
                                                <amp-img src={part35.src} width="45" height='45' 
                                                    className='z-[20]'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='max-sm:w-[68%] max-sm:min-w-[68%] max-sm:pt-2 max-sm:pr-[2%] max-sm:pb-2 sm:pl-[8%] sm:pr-[5%] sm:pt-3'>
                            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black'>
                                Sydney
                            </h1>
                            <p className='pt-2 text-xs leading-tight text-black sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
                            style={{fontFamily:'Museo500'}}>
                                Sydney es la ciudad más popular de
                                Australia y también una de las más
                                pobladas. ¡Es una de las ciudades con más
                                playas del mundo! De hecho, se le conoce
                                como la ciudad de las cien playas, este es
                                uno de los motivos por los que pueda
                                resultar uno de los mejores sitios para
                                trabajar y estudiar en Australia. 
                            </p>
                        </div>
                    </div>

                </div>

                <div className='min-w-full sm:w-[33%] sm:min-w-[33%] max-sm:mb-2 max-sm:border-t-2
                     max-sm:border-gray-400'>
                    <div className='flex sm:flex-col max-sm:justify-between'>

                        <div className='relative max-sm:w-[30%] max-sm:min-w-[30%]'>
                            <amp-img src={part33.src} width="875" height='981' layout='responsive'
                                className='w-full h-full object-cover'/>
                            <div className='absolute bottom-0 inset-x-0'>
                                <div className='relative h-10'>
                                    <div className='absolute top-0 min-w-full'>
                                        <div className='pl-[10%] pt-[5px] max-sm:pt-[16px]'>
                                            <div className='max-sm:w-[30px] max-sm:h-[30px] sm:hidden'>
                                                <amp-img src={part36.src} width="30" height='30' 
                                                    className='sm:hidden z-[20]'/>
                                            </div>
                                            <div className='max-sm:hidden'>
                                                <amp-img src={part36.src} width="45" height='45' 
                                                    className='z-[20]'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='max-sm:w-[68%] max-sm:min-w-[68%] max-sm:pt-2 max-sm:pr-[2%] max-sm:pb-2 sm:pl-[8%] sm:pr-[5%] sm:pt-3'>
                            <h1 className='text-2xl font-extrabold text-black sm:text-3xl md:text-4xl lg:text-5xl'>
                                Brisbane
                            </h1>
                            <p className='pt-2 text-xs leading-tight text-black sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
                            style={{fontFamily:'Museo500'}}>
                                Situada en el extremo norte del país, conocida por ser la tercera con mayor población de Australia y por ser la ciudad del eterno verano posee un excelente clima, cálido y estable durante todo el año.
                            </p>
                        </div>
                    </div>

                </div>

                <div className='min-w-full sm:w-[33%] sm:min-w-[33%] max-sm:border-t-2 
                    border-gray-400'>
                    <div className='flex sm:flex-col max-sm:justify-between'>

                        <div className='relative max-sm:w-[30%] max-sm:min-w-[30%]'>
                            <amp-img src={part34.src} width="875" height='981' layout='responsive'
                                className='w-full h-full object-cover'/>
                            <div className='absolute bottom-0 inset-x-0'>
                                <div className='relative h-10'>
                                    <div className='absolute top-0 min-w-full'>
                                        <div className='pl-[10%] pt-[5px] max-sm:pt-[16px]'>
                                            <div className='max-sm:w-[30px] max-sm:h-[30px] sm:hidden'>
                                                <amp-img src={part37.src} width="30" height='30' 
                                                    className='sm:hidden z-[20]'/>
                                            </div>
                                            <div className='max-sm:hidden'>
                                                <amp-img src={part37.src} width="45" height='45' 
                                                    className='z-[20]'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='max-sm:w-[68%] max-sm:min-w-[68%] max-sm:pt-2 max-sm:pr-[2%] max-sm:pb-2 sm:pl-[8%] sm:pr-[5%] sm:pt-3'>
                            <h1 className='text-2xl font-extrabold text-black sm:text-3xl md:text-4xl lg:text-5xl'>
                                Melbourne
                            </h1>
                            <p className='pt-2 text-xs leading-tight text-black sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl'
                            style={{fontFamily:'Museo500'}}>
                                Melbourne: Melbourne es la ciudad que lo tiene todo, festivales, playas, gastronomía diversidad y multiculturalidad. Vivir en Melbourne es vivir en una ciudad urbana, bohemia y llena de cultura. Además, si te gusta el café, estarás llegando al lugar indicado.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}