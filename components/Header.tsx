import Head from "next/head"
import Image from "next/image"
import img1 from '../img/2.jpg'
import img2 from '../img/beach.jpg'
import img3 from '../img/Asset2.png'
import listImg1 from '../img/Asset3.png';
import listImg2 from '../img/Asset4.png';
import listImg3 from '../img/Asset5.png';
import listImg4 from '../img/Asset6.png';
import listImg5 from '../img/Asset7.png';
import menuButton from '../img/Asset8.png';
import menuImg from '../img/Asset9.png';
import houseImg from '../img/Asset11.png';
import noticeImg from '../img/Asset12.png';
import menuBackImg from '../img/Asset13.png';
import part11 from '../img/part11.png';
import part12 from '../img/part12.png';
import part13 from '../img/part13.png';
import part14 from '../img/part14.png';
import part15 from '../img/part15.png';
import part16 from '../img/part16.png';
import part17 from '../img/part17.png';
import React from "react";
import { AmpState } from "amp-react-components"

export const config = {amp:true}

export default function Header(){
    const id = "myState";
    let state = {
        activeState: false,
    }
    return(
        <>
            <AmpState state={state} id={id} />
            <div className="w-screen">
                <div className="flex flex-wrap">
                    <div className="min-w-full sm:flex-[1_1_30%] sm:min-w-[30%] overflow-hidden relative">
                        <amp-img src={img1.src} className="block object-cover object-center w-full h-full absolute z-[-1]"
                            height="500" width="200" layout="responsive"/>  
                        <div className="flex flex-col">
                            <div className="pt-[35%] px-[10%]">
                                <div className="flex justify-center">
                                    <div className="w-[200px] h-[100px]">
                                        <amp-img src={img3.src} width="200" height="100"
                                        alt={""} className="w-full h-full object-cover"/>
                                    </div>
                                </div>
                            </div>                                      
                            <div className="pt-[70%] pb-[10%]">
                                 <div className="flex justify-center">
                                    <div className="max-sm:w-[200px]">
                                      <button type="button" className="text-base w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Start now</button>
                                    </div>
                                 </div>                                        
                            </div>
                        </div>                        
                    </div>
                    <div className="min-w-full sm:flex-[1_1_70%] sm:min-w-[70%] relative">
                        <amp-img src={img2.src} height="250" width="200" layout="responsive" className="block object-cover w-full h-full object-center z-[-1] absolute"/>
                        <div className="relative">
                            <div className="min-w-[300px] sm:min-w-[45%] inset-y-0 right-0  h-full z-[999] absolute" hidden
                                 data-amp-bind-hidden="myState.activeState" >
                                <div className="flex flex-col bg-black pl-6 pr-20">
                                    <div className="pt-[10%]">
                                        <div className="flex">
                                            <div className="relative w-full">
                                                <input type="search" className="block p-2.5 w-full z-20 text-sm text-gray-300 bg-black border border-gray-300 rounded-full"      
                                                        placeholder="Search" required/>
                                                <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-full  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    <span className="sr-only">Search</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-5">
                                        <h1 className="text-base md:text-xl lg:text-2xl" 
                                            style={{color:'#A4EDC2',fontFamily:'MontserratThin'}}>experiencia</h1>
                                    </div>
                                    <div className="pt-5">
                                        <amp-img src={menuImg.src} height="40" width="170" alt={""}/>
                                    </div>
                                    <div className="mt-5">
                                        <h1 className="text-white" style={{fontFamily:'Museo300'}}>
                                            En Nómadas nos dedicamos a <br></br>
                                            cumplir los sueños de miles de<br />
                                            aventureros. Te ayudamos con<br></br>
                                            tu visa para que puedas estudiar<br></br>
                                            y trabajar en países como<br></br>
                                            Australia, Canadá, Malta, Irlanda<br></br>
                                            y Nueva Zelanda.<br></br>
                                            Lánzate a tener una experiencia<br></br>
                                            nómada y vive la aventura de<br></br>
                                            tu vida.
                                        </h1>
                                    </div>
                                    <div className="mt-5">
                                        <div className="h-2 w-[250px] border-b-2 border-b-gray-500"></div>
                                    </div>
                                    <div className="pt-5">
                                        <h1 className="text-base sm:text-lg md:text-xl lg:text-xl" 
                                            style={{color:"#A4EDC2",fontFamily:'MontserratThin'}}>encuéntranos</h1>
                                    </div>
                                    <div className="pt-5">
                                        <div className="flex justify-start">
                                            <div className="w-7 h-7">
                                                <amp-img height="20" width="20" src={noticeImg.src} alt={""}/>
                                            </div>
                                            <div className="ml-5">
                                                <a href="/menu" className="text-white text-base underline decoration-slate-100"
                                                 style={{fontFamily:'Museo300'}}>contáctanos</a>
                                            </div>
                                        </div>
                                        <div className="flex justify-start">
                                            <div className="w-7 h-7">
                                                <amp-img height="20" width="20" src={houseImg.src} alt={""}/>
                                            </div>
                                            <div className="ml-5">
                                                <a className="text-white text-base underline decoration-slate-100"
                                                style={{fontFamily:'Museo300'}}>nuestras oficinas</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-5 mb-[10%]">
                                        <div className="flex justify-start">
                                            <div className="w-7 h-7" on="tap:AMP.setState({myState:{activeState:true}})" 
                                             role="button" tabIndex={-1}>
                                                <amp-img height="25" width="25" src={menuBackImg.src} alt={""} layout="responsive"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="top-0 right-0 fixed min-w-[70%] z-[998]">
                                <div className="relative">
                                    <div className="flex justify-end">
                                        <div className="mt-5 mr-5 w-11 h-11 cursor-pointer" on="tap:AMP.setState({myState:{activeState:false}})" 
                                            tabIndex={-1} role="button">
                                            <amp-img height="50" width="50" src={menuButton.src} alt={""}/>
                                        </div>
                                    </div>
                                    <div className="min-w-[300px] sm:min-w-[45%] inset-y-0 right-0  h-full z-[999] absolute" hidden
                                        data-amp-bind-hidden="myState.activeState" >
                                            <div className="flex flex-col bg-black pl-6 pr-20">
                                                <div className="pt-[10%]">
                                                    <div className="flex">
                                                        <div className="relative w-full">
                                                            <input type="search" className="block p-2.5 w-full z-20 text-sm text-gray-300 bg-black border border-gray-300 rounded-full"      
                                                                    placeholder="Search" required/>
                                                            <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white rounded-full  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                                <span className="sr-only">Search</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="pt-5">
                                                    <h1 className="text-base md:text-xl lg:text-2xl" 
                                                        style={{color:'#A4EDC2',fontFamily:'MontserratThin'}}>experiencia</h1>
                                                </div>
                                                <div className="pt-5">
                                                    <amp-img src={menuImg.src} height="40" width="170" alt={""}/>
                                                </div>
                                                <div className="mt-5">
                                                    <h1 className="text-white" style={{fontFamily:'Museo300'}}>
                                                        En Nómadas nos dedicamos a <br></br>
                                                        cumplir los sueños de miles de<br />
                                                        aventureros. Te ayudamos con<br></br>
                                                        tu visa para que puedas estudiar<br></br>
                                                        y trabajar en países como<br></br>
                                                        Australia, Canadá, Malta, Irlanda<br></br>
                                                        y Nueva Zelanda.<br></br>
                                                        Lánzate a tener una experiencia<br></br>
                                                        nómada y vive la aventura de<br></br>
                                                        tu vida.
                                                    </h1>
                                                </div>
                                                <div className="mt-5">
                                                    <div className="h-2 w-[250px] border-b-2 border-b-gray-500"></div>
                                                </div>
                                                <div className="pt-5">
                                                    <h1 className="text-base sm:text-lg md:text-xl lg:text-xl" 
                                                        style={{color:"#A4EDC2",fontFamily:'MontserratThin'}}>encuéntranos</h1>
                                                </div>
                                                <div className="pt-5">
                                                    <div className="flex justify-start">
                                                        <div className="w-7 h-7">
                                                            <amp-img height="20" width="20" src={noticeImg.src} alt={""}/>
                                                        </div>
                                                        <div className="ml-5">
                                                            <a href="/menu" className="text-white text-base underline decoration-slate-100"
                                                            style={{fontFamily:'Museo300'}}>contáctanos</a>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-start">
                                                        <div className="w-7 h-7">
                                                            <amp-img height="20" width="20" src={houseImg.src} alt={""}/>
                                                        </div>
                                                        <div className="ml-5">
                                                            <a className="text-white text-base underline decoration-slate-100"
                                                            style={{fontFamily:'Museo300'}}>nuestras oficinas</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mt-5 mb-[10%]">
                                                    <div className="flex justify-start">
                                                        <div className="w-7 h-7" on="tap:AMP.setState({myState:{activeState:true}})" 
                                                        role="button" tabIndex={-1}>
                                                        <amp-img height="25" width="25" src={menuBackImg.src} alt={""} layout="responsive"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-[4%] sm:pt-0 md:pt-[4%] pl-[5%]">
                                <h1 className="text-white text-base sm:text-lg md:text-2xl
                                    lg:text-4xl xl:text-6xl" style={{fontFamily:'Montserrat'}}>Vive, estudia<br></br> 
                                    y trabaja en <br></br>otro país.</h1>
                            </div>
                            <div className="pt-[5%] pl-[5%]">
                                <p className="text-gray-300 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-4xl"
                                    style={{fontFamily:'Museo300'}}>Aventúrate a vivir una <br></br>experiencia Nómada</p>
                            </div>
                            <div className="pt-[5%] pl-[5%] mb-[10%]">
                                <div className="flex flex-wrap justify-start">
                                    <div className="w-11 h-11">
                                        <amp-img height="50" width="50" src={listImg1.src} alt={""}/>
                                    </div>
                                    <div className="w-11 h-11 ml-2">
                                        <amp-img height="50" width="50" src={listImg2.src} alt={""}/>
                                    </div>
                                    <div className="w-11 h-11 ml-2">
                                        <amp-img height="50" width="50" src={listImg3.src} alt={""}/>
                                    </div>
                                    <div className="w-11 h-11 ml-2">
                                        <amp-img height="50" width="50" src={listImg4.src} alt={""}/>
                                    </div>
                                    <div className="w-11 h-11 ml-2">
                                        <amp-img height="50" width="50" src={listImg5.src} alt={""}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute z-10 min-w-full sm:min-w-[70%] top-[90%] right-0 h-20">
                            <div className="flex justify-between">
                                <div className="w-[48%] relative">
                                    <div className="absolute z-[1] pt-[5%] px-[5%] w-full">
                                        <div className="flex justify-between">
                                            <amp-img src={part13.src} width="60" height="15" className="self-center"></amp-img>
                                            <amp-img src={part14.src} width="15" height="18" className="self-center"></amp-img>
                                            <span className="text-xs underline  text-white self-center leading-tight">Australia</span>
                                        </div>
                                    </div>
                                    <div className="absolute z-[1] mt-[125%] px-[5%] w-full">
                                        <div className="flex justify-between">
                                            <amp-img src={part15.src} width="30" height="30" className="self-center"/>
                                            <amp-img src={part16.src} width="40" height="8"  className="self-center"/>
                                        </div>
                                    </div>
                                    <amp-img src={part11.src} width="150" height="220" layout="responsive"/>
                                </div>
                                <div className="w-[48%] relative">
                                    <div className="absolute z-[1] mt-[5%] px-[5%] w-full">
                                        <div className="flex justify-between">
                                            <p className="text-white text-sm font-medium self-center"
                                            style={{fontFamily:'GothamBlack'}}>Sydney</p>
                                            <amp-img src={part17.src} width="50" height="25" className="self-center"/>
                                        </div>
                                    </div>
                                    <amp-img src={part12.src} width="150" height="220" layout="responsive"/>
                                </div>
                            </div>
                            <div className="pt-[3%] px-[5%]">
                                <div className="flex justify-between">
                                    <p className="text-base font-bold text-[#00AC95] leading-normal">¡Nosotros te<br/>
                                        ayudamos con<br></br>
                                        todo esto!</p>
                                    <div className="self-center">
                                        <button type="button" className="inline-block px-2 py-2.5  bg-[#7070E2] text-[#A4EDC2] font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Quiero hablar con un guía Nōmada</button>
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