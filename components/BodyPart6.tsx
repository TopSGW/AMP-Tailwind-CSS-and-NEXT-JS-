import part61 from '../img/part61.png';
import part62 from '../img/part62.png';
import part63 from '../img/part63.png';
import part64 from '../img/part64.png';
import part65 from '../img/part65.png';
import part66 from '../img/part66.png';
import part67 from '../img/part67.png';
export default function BodyPart6(){
    return(
        <>
            <div className="w-screen pt-4 relative">
                <div className="flex flex-wrap">
                    <div className="min-w-full sm:flex-[1_1_33%] sm:min-w-[33%]">
                        <amp-img src={part61.src} width="925" height='1445' layout='responsive'
                        className='w-full h-full object-cover'/>
                    </div>
                    <div className="min-w-full sm:flex-[1_1_67%] sm:min-w-[67%] bg-[#28B5A0]">
                        <div className='pl-[5%] pr-[10%] pt-[6vw] pb-[10%] min-w-full min-h-full'>
                            <h1 className='text-[4.4vw] sm:text-[3.2vw] text-[#A4EDC2] font-bold'
                                style={{fontFamily:"Montserrat"}}>
                                ¿Qué requisitos necesitas
                                para estudiar en australia?
                            </h1>
                            <div className='flex justify-between pt-[2%]'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'>
                                    <amp-img src={part62.src} width="10" height="12" className='' layout='responsive'/>
                                </div>
                                
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white'
                                    style={{fontFamily:"Museo500"}}>
                                    Tener un pasaporte vigente</p>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'>
                                    <amp-img src={part62.src} width="10" height="12" layout='responsive'/>
                                </div>
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white'
                                        style={{fontFamily:'Museo500'}}>
                                        Ser mayor de 18 años si tu objetivo es trabajar y estudiar
                                        en Australia. 
                                    </p>                        
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'>
                                    <amp-img src={part62.src} width="10" height="12" layout='responsive'/>
                                </div>
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white'
                                        style={{fontFamily:'Museo500'}}>
                                        Tener una visa de estudiante aprobada y vigente.
                                    </p>                        
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'> 
                                    <amp-img src={part62.src} width="10" height="12" layout='responsive'/> 
                                </div>
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white'
                                        style={{fontFamily:'Museo500'}}>
                                        Tener un seguro médico para estudiantes.
                                    </p>                        
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'>                            
                                    <amp-img src={part62.src} width="10" height="12" layout='responsive'/>
                                </div>
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white'
                                        style={{fontFamily:'Museo500'}}>
                                        Dependiendo de tu nacionalidad deberás hacerte
                                        exámenes biométricos. 
                                    </p>                        
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'>
                                    <amp-img src={part62.src} width="10" height="12" layout='responsive'/>
                                </div>
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white
                                        ' style={{fontFamily:'Museo500'}}>
                                        Nivel de Inglés dependiendo del curso que quieras estudiar.
                                    </p>                        
                                </div>                        
                            </div>
                            <div className='flex justify-between'>
                                <div className='w-[3%] min-w-[3%] pt-[1.2%]'>
                                    <amp-img src={part62.src} width="10" height="12" layout='responsive'/>
                                </div>
                                <div className='w-[95%] min-w-[95%]'>
                                    <p className='pl-[3%] text-[3.5vw] sm:text-[2.3vw] text-white
                                    ' style={{fontFamily:'Museo500'}}>
                                        Para aplicar a tu visa de estudiante para Australia deberás
                                        escribir una carta llamada GTE (Genuine Temporary
                                        Entrant), allí debes explicar por qué quieres estudiar en
                                        Australia, no te preocupes, 
                                    </p>                        
                                </div>                        
                            </div>
                            <div className='pt-[2.2vw] sm:pt-[1.3vw] pb-[1.2vw] sm:pb-0 pl-4'>
                                <div className='flex justify-center sm:justify-start'>
                                    <button className='text-[2.5vw] sm:text-[1.9vw] px-2 sm:px-[1.3vw] py-1 bg-[#7070E2] rounded-full text-[#A4EDC2]'
                                        style={{fontFamily:'Museo500'}}>
                                        Me lanzo a la aventura en Australia
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute inset-x-0 bottom-0'>
                    <div className='h-10 relative'>
                        <div className='absolute top-0 z-[10] min-w-full'>
                            <div className='w-full min-w-full md:min-w-[90%] md:w-[90%] m-auto relative h-[400px] sm:h-full max-sm:bg-white'>
                                <amp-img src={part63.src} width="780" height='600' layout='responsive'
                                 className='w-full h-full object-cover max-sm:hidden'/>
                                <div className='absolute top-0 inset-x-0'>
                                    <div className='sm:mx-[5%] m-auto mt-6 sm:mt-[4vw] w-[330px] bg-[#EAAD0A] sm:w-[45%] sm:min-w-[45%]'>
                                        <div className='px-4 sm:px-[8%] py-4 sm:pt-[2.5vw] sm:pb-[1.9vw]'>
                                            <h1 className='text-white text-base sm:text-[3.9vw] sm:leading-[3.8vw] 
                                                md:text-[3.31vw] md:leading-[3.6vw]'
                                                style={{fontFamily:'Montserrat'}}>
                                                Cómo te
                                                ayudamos
                                                en Nōmadas
                                            </h1>
                                            <p className='text-xs leading-tight text-white sm:text-[1.9vw] md:text-[1.6vw]' style={{fontFamily:'Museo500'}}>
                                                Si quieres estudiar y trabajar en
                                                Australia, nosotros te podemos
                                                ayudar, y lo mejor… ¡Lo hacemos
                                                gratis! Resolveremos todas tus dudas
                                                y te guiaremos durante todo el
                                                proceso para que te sientas cómodo
                                                y seguro antes de dar el gran paso.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='sm:mx-[5%] m-auto mt-3 w-[330px] bg-[#EAAD0A] sm:w-[45%] sm:min-w-[45%]'>
                                        <div className='px-4 py-4 sm:px-[8%] sm:pt-[2.5vw] sm:pb-[1.9vw]'>
                                            <h1 className='text-white text-base sm:text-[3.9vw] sm:leading-[3.8vw]
                                                md:text-[3.31vw] md:leading-[3.6vw]'
                                                style={{fontFamily:'Montserrat'}}>
                                                En Nómadas nos
                                                encargamos de:
                                            </h1>
                                            <p className='text-xs leading-tight text-white sm:text-[1.9vw] md:text-[1.6vw]' style={{fontFamily:'Museo500'}}>
                                                Ayudarte a elegir tu escuela y el curso
                                                que más te guste. Gestionamos tus
                                                trámites de matrícula al curso.
                                                Te ayudamos con la aplicación a tu
                                                visa. Estaremos a tu lado mientras
                                                preparas tu viaje.
                                                ¡Te recibimos y te damos la
                                                bienvenida a Australia!
                                                Estando en Australia te apoyaremos en
                                                todo lo que necesites para que puedas
                                                adaptarte fácilmente.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='absolute inset-x-0 bottom-0 min-w-full sm:mb-[7.5vw] md:mb-[7.3vw] sm:pr-[2.4vw] md:pr-[2.1vw]'>
                                    <div className='flex justify-center sm:justify-end'>
                                    <div className='max-sm:w-[320px]'>
                                        <button className='sm:text-[1.7vw] px-2 py-2 text-white bg-[#00AC95] rounded-full'
                                            style={{fontFamily:'Museo500'}}>
                                            Quiero iniciar mi experiencia Nōmada
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-3 mt-5 min-w-full bg-[#7070E2]'>
                                <div className="mt-5 mx-[20%]">
                                    <h1 className="text-center font-bold text-[#88bb9d] text-lg sm:text-xl md:text-2xl lg:text-4xl">
                                        Atrévete a dar el paso y vive una experiencia única en Australia
                                    </h1>
                                </div>
                                <div className='mt-4 pb-8'>
                                    <div className='flex justify-center'>
                                       <div className="flex rounded-full bg-[#AFBBDD] text-white w-[350px]">
                                            <input
                                                type="search"
                                                className="w-full bg-transparent px-4 py-1 text-white outline-none focus:outline-none"
                                                placeholder="Your mail"
                                                />
                                            <button
                                                type="button"
                                                className="px-4 py-2 bg-white rounded-full text-black" style={{fontFamily:'Museo500'}}>
                                                Contactanos
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-5 pb-7 px-[10%] bg-[#0085A9]'>
                                <div className='flex justify-between'>
                                    <div>
                                        <amp-img src={part64.src} width="150" height='30'/>
                                    </div>
                                    <div className='flex justify-start'>
                                        <div>
                                            <amp-img src={part65.src} width="30" height="30"/>
                                        </div>
                                        <div className='ml-1'>
                                            <amp-img src={part66.src} width="30" height="30"/>
                                        </div>
                                        <div className='ml-1'>
                                            <amp-img src={part67.src} width="30" height="30"/>
                                        </div>                                        
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