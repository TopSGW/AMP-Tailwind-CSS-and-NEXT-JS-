import menu1 from '../img/menu1.png';
import menu2 from '../img/menu2.png';
import menu3 from '../img/menu3.png'

export default function Menupage(){
    return(
        <div className="w-screen">
            <div className="flex flex-wrap">
                <div className="min-w-full sm:flex-[1_1_33%] sm:min-w-[33%] bg-[#1CA591]">
                    <div className='mt-10 w-[200px] mx-auto'>
                        <div className='flex justify-start'>
                            <div className=''>
                                <amp-img src={menu3.src} width="30" height='30'/>
                            </div>
                            <div className='ml-3'>
                                <h1 className='text-base text-white font-bold'
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
                <div className="min-w-full sm:flex-[1_1_67%] sm:min-w-[67%] relative">
                    <amp-img src={menu1.src} className='w-full h-full object-cover' 
                        width="1765" height='1460' layout='responsive'/>
                    <div className='absolute top-0 inset-x-0'>
                        <div className='ml-10 mt-10'>
                            <div>
                                <amp-img src={menu2.src} width="200" height='40'/>
                            </div>
                            <div className='mt-[30px]'>
                                <h1 className='text-base text-black'>Address</h1>
                                <p className='mt-2 text-xs text-black'>New York, USA</p>
                                <p className='mt-1 text-xs text-black'>
                                    Macdonough St. 23a, Second floor
                                </p>
                            </div>
                            <div className='mt-[12px]'>
                                <h1 className='text-base text-black'>
                                    Ca<span className='font-bold'>ll</span> Us</h1>
                                <p className='mt-1 text-xs'>(212) 948-2621</p>
                            </div>
                            <div className='mt-[12px]'>
                                <h1 className='text-base text-black'>
                                    Emai<span className='font-bold'>l</span> Us</h1>
                                <p className='mt-1 text-xs'>name@compony.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}