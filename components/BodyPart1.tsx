import img from "../img/Asset14.png";

export const config = {amp: true}

export default function BodyPart1(){
    return(
        <div className="w-screen">
            <div className="flex flex-wrap min-h-[350px] bg-white">
                <div className="w-full mt-[80%] sm:flex-[1_1_50%] sm:mt-0">
                    <div className="px-[5%] pl-15 pb-[15%]">
                        <div className="flex justify-between">
                            <div className="pt-5 w-[69%]">
                                <h1 className="text-[30px] sm:text-[3.4vw] sm:leading-[3.6vw]" 
                                    style={{color:'#0085A9', fontFamily:"Montserrat"}} >
                                    ¿Por qué vivir
                                    una experiencia
                                    Nómada en
                                    Australia?
                                </h1>
                            </div>
                            <div className="pt-3 w-[29%]">
                                <amp-img src={img.src} width="100" height="100" 
                                    layout="responsive"></amp-img>
                            </div>
                        </div>
                        <div className="pt-2">
                            <p className="text-xs leading-tight text-black sm:text-[1.6vw]">
                                Nómadas es un equipo conformado de muchos jóvenes que
                                como tú, han vivido la aventura de emigrar a otro país.<span className="bg-amber-100"> Creemos
                                en que salir de la zona de   y lanzarse a vivir una
                                experiencia nómada es algo que te cambia la vida.</span>
                            </p><div className="h-3 w-1"/>
                            <p className="text-xs leading-tight text-black sm:text-[1.6vw]">
                                <span className="bg-amber-100">Tenemos oficinas en Australia, Canadá, Colombia, Argentina y
                                Chile</span> para darte todo el apoyo que necesitas a la hora de tomar la
                                decisión de vivir y estudiar en otro país.
                            </p><div className="h-2 w-1"/>
                            <p className="text-xs leading-tight text-black sm:text-[1.6vw]">
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