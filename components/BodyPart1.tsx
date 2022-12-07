import img from "../img/Asset14.png";

export const config = {amp: true}

export default function BodyPart1(){
    return(
        <div className="w-screen">
            <div className="flex flex-wrap min-h-[350px] bg-white">
                <div className="w-full mt-[80%] sm:flex-[1_1_50%] sm:mt-0">
                    <div className="px-[5%] pl-15 pb-[15%]">
                        <div className="flex justify-evenly">
                            <div className="pt-5 w-2/3">
                                <h1 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl" 
                                    style={{color:'#0085A9',fontFamily:'Montserrat'}}>
                                    ¿Por qué vivir<br/>
                                    una experiencia<br/>
                                    Nómada en<br/>
                                    Australia?<br/>
                                </h1>
                            </div>
                            <div className="pl-1 pt-3 w-1/3">
                                <div className="flex justify-end">
                                    <div className="pr-5">
                                        <amp-img src={img.src} width="100" height="100" 
                                            ></amp-img>
                                    </div>                                    
                                </div>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="text-xs leading-tight text-black min-[778px]:text-sm min-[922px]:text-base min-[1136px]:text-[17px] xl:text-lg"
                                style={{fontFamily:'Museo500'}}>
                                Nómadas es un equipo conformado de muchos jóvenes que
                                como tú, han vivido la aventura de emigrar a otro país.<span className="bg-amber-100"> Creemos
                                en que salir de la zona de confort y lanzarse a vivir una
                                experiencia nómada es algo que te cambia la vida.</span>
                            </p><div className="h-3 w-1"/>
                            <p className="text-xs leading-tight text-black md:text-sm lg:text-base min-[1136px]:text-[17px] xl:text-lg"
                                style={{fontFamily:'Museo500'}}>
                                <span className="bg-amber-100">Tenemos oficinas en Australia, Canadá, Colombia, Argentina y
                                Chile</span> para darte todo el apoyo que necesitas a la hora de tomar la
                                decisión de vivir y estudiar en otro país.
                            </p><div className="h-2 w-1"/>
                            <p className="text-xs leading-tight text-black md:text-sm lg:text-base min-[1136px]:text-[17px] xl:text-lg"
                                style={{fontFamily:'Museo500'}}>
                                En Australia estamos en: Melbourne, Sydney y Adelaide. Nuestro
                                equipo es multicultural y está formado por colombianos,
                                chilenos, mexicanos, argentinos, japoneses, peruanos y muchas
                                más nacionalidades.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full sm:flex-[1_1_50%]">
                    <div className=""></div>
                </div>
            </div>
        </div>
    )
}