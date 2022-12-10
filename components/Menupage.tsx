import menu1 from '../img/menu1.png';
import menu2 from '../img/menu2.png';
import menu3 from '../img/menu3.png'
import Rside2 from '../img/Rside2.png';

export default function Menupage(){
    return(
        <div className="w-screen">
            <div className="flex flex-wrap">
                <div className="min-w-full sm:flex-[1_1_33%] sm:min-w-[33%] bg-[#1CA591]">
                    <div className='mt-10 w-[200px] sm:mt-[8.5vw] sm:w-[80%] min-[1500px]:w-[400px] mx-auto'>
                        <div className='flex justify-between'>
                            <div className='w-[8%] self-center'>
                                <amp-img src={menu3.src} width="64" height='58' layout='responsive'
                                    className='w-full h-full object-cover'/>
                            </div>
                            <div className='w-[87%]'>
                                <h1 className='text-lg text-white font-bold sm:text-[3vw] min-[1750px]:text-[45px]'
                                 style={{fontFamily:'MontserratRegular'}}>contáctanos</h1>
                            </div>
                        </div>
                        <div className='mt-10'>
                            <div className="w-full">
                                <input type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-2 text-base bg-[#1CA591]
                                    border-b-2 border-b-white
                                    focus:outline-none focus:border-blue-400
                                    "/>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="w-full">
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full px-4 py-2 text-base bg-[#1CA591]
                                    border-b-2 border-b-white
                                    focus:outline-none focus:border-blue-400
                                    "/>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <div className="w-full">
                                <input type="text"  
                                    name="message"
                                    placeholder="Message"
                                    className="w-full px-4 py-2 text-base bg-[#1CA591]
                                    border-b-2 border-b-white
                                    focus:outline-none focus:border-blue-400
                                    "/>
                            </div>
                        </div>
                        <div className='mt-5 pb-5'>
                            <button className='px-4 py-1 text-white text-center text-base bg-[#7070E2]'>
                                Call me
                            </button>
                        </div>
                    </div>
                </div>
                <div className="min-w-full sm:flex-[1_1_67%] sm:min-w-[67%] max-sm:h-[420px] sm:h-full relative">
                    <amp-img src={menu1.src} className='w-full h-full object-cover' 
                        width="1765" height='1460' layout='responsive'/>
                    <div className='absolute top-0 inset-x-0'>
                        <div className='ml-6 mt-7 sm:mt-[8.5vw] min-[452px]:ml-10 min-[452px]:mt-10'>
                            <div>
                                <amp-img src={menu2.src} width="200" height='40'/>
                            </div>
                            <div className='mt-[30px] sm:mt-[1vw]'>
                                <h1 className='text-base sm:text-[2.5vw] sm:leading-[2.2vw] text-black'>Address</h1>
                                <p className='mt-1 text-xs sm:text-[1.7vw] sm:leading-[1.4vw] text-black'>New York, USA</p>
                                <p className='mt-1 text-xs sm:text-[1.7vw] sm:leading-[1.4vw] text-black'>
                                    Macdonough St. 23a, Second floor
                                </p>
                            </div>
                            <div className='mt-[12px] sm:mt-[3vw]'>
                                <h1 className='text-base text-black sm:text-[2.5vw] sm:leading-[2.2vw]'>
                                    Ca<span className='font-bold'>ll</span> Us</h1>
                                <p className='mt-1 text-xs sm:text-[1.7vw] sm:leading-[1.4vw]'>(212) 948-2621</p>
                            </div>
                            <div className='mt-[12px] sm:mt-[3vw]'>
                                <h1 className='text-base text-black sm:text-[2.5vw] sm:leading-[2.2vw]'>
                                    Emai<span className='font-bold'>l</span> Us</h1>
                                <p className='mt-1 text-xs sm:text-[1.7vw] sm:leading-[1.4vw]'>name@compony.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='absolute top-0 right-0 min-w-full h-[300px]'>
                        <div className='mt-[5%] sm:mt-[5vw] min-[480px]:mt-[2%] h-[300px] flex justify-end'>
                            <div className='w-[40%] h-[75%]'>
                                <amp-img src={Rside2.src} width="782" height='1429' layout='responsive'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}