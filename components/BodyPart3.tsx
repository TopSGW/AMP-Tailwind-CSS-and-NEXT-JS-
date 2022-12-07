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
                className='w-full object-cover z-[-1] absolute'/>
            <div className='flex justify-between overflow-x-auto pb-5 relative'>
                <div className='min-w-[300px] sm:w-[33%] sm:min-w-[33%] relative'>
                    <div className='absolute top-0 inset-x-0'>
                        <div className='pt-[99%] md:pt-[99.5%] lg:pt-[102%] xl:pt-[104%] pl-[10%]'>
                            <amp-img src={part35.src} width="45" height='45' className='z-[20]'/>
                        </div>
                    </div>
                    <amp-img src={part32.src} width="875" height='981' layout='responsive'/>
                    <div className='pl-[8%] pr-[5%] pt-3'>
                        <h1 className='text-2xl font-bold text-black'>
                            Sydney
                        </h1>
                        <p className='pt-2 text-xs leading-tight text-black'
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
                <div className='min-w-[300px] sm:w-[33%] sm:min-w-[33%] relative'>
                    <div className='absolute top-0 inset-x-0'>
                        <div className='pt-[99%] md:pt-[99.5%] lg:pt-[102%] xl:pt-[104%] pl-[10%]'>
                            <amp-img src={part36.src} width="45" height='45' className='z-[20]'/>
                        </div>
                    </div>
                    <amp-img src={part33.src} width="875" height='981' layout='responsive'/>
                    <div className='pl-[8%] pr-[5%] pt-3'>
                        <h1 className='text-2xl font-bold text-black'>
                            Brisbane
                        </h1>
                        <p className='pt-2 text-xs leading-tight text-black'
                            style={{fontFamily:'Museo500'}}>
                            Situada en el extremo norte del país, conocida
                            por ser la tercera con mayor población de
                            Australia y por ser la ciudad del eterno verano
                            posee un excelente clima, cálido y estable
                            durante todo el año.
                        </p>
                    </div>
                </div>
                <div className='min-w-[300px] sm:w-[33%] sm:min-w-[33%] relative'>
                    <div className='absolute top-0 inset-x-0'>
                        <div className='pt-[99%] md:pt-[99.5%] lg:pt-[102%] xl:pt-[104%] pl-[10%]'>
                            <amp-img src={part37.src} width="45" height='45' className='z-[20]'/>
                        </div>
                    </div>
                    <amp-img src={part34.src} width="875" height='981' layout='responsive'/>
                    <div className='pl-[8%] pr-[5%] pt-3'>
                        <h1 className='text-2xl font-bold text-black'>
                            Melbourne
                        </h1>
                        <p className='pt-2 text-xs leading-tight text-black'
                         style={{fontFamily:'Museo500'}}>
                            Melbourne: Melbourne es la ciudad que lo
                            tiene todo, festivales, playas, gastronomía
                            diversidad y multiculturalidad. Vivir en
                            Melbourne es vivir en una ciudad urbana,
                            bohemia y llena de cultura. Además, si te
                            gusta el café, estarás llegando al lugar
                            indicado. 
                        </p>
                    </div>                    
                </div>
            </div>
        </div>
    )
}