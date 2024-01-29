"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function HomeContent() {
    const [CvOpen, setCvOpen] = useState(false);
    return (<>
    <div className='grid grid-cols-1 sm:grid-cols-11 mt-[150px]' >
        <div className="col-span-6 place-self-center text-center sm:text-left ">
            <h1 className='mb-8 lg:text-5xl font-extrabold'>
                bonjour,<br/> bienvenue sur mon portfolio
            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-7 '>
                je suis un étudiant de 3ème année d'informatique<br/>
                j'étudie acctuellement a l'IUT de lens en BUT informatique,<br/>
                ici vous pourrez retrouver les differentes technologies que j'ai appris <br/>
                ainci que les differents porjets qu j'ai réalisé(personel ou realisé avec l'IUT)<br/>
                vous pouvez aussi retrouver dans l'onglet experiences mes retours sur<br/>
                mes differentes experiences porfetionels<br/>
                Vous pouvez aussi en aprendre plus sur moi avec l'onglet à propos de moi<br/>
                vous permetant de decouvrir mes hobby et passions<br/>              
            </p>
        </div>
        <div className="col-span-5 place-self-center mt-20 lg:mt-0 sm: ml-8">
            <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
                <Image className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src="/clement_mahieux.jpg" alt="photo de moi" width={300} height={500}/>
            </div>
        </div>
    </div>
    <div className="flex-1 max-[650px]:mt-24">
    {CvOpen ?<>
            <img className="mt-10 mb-7 m-auto flex-1 w-80%" src={"/cv_mahieux_clement.png"} alt="photo cv" style={{ width: '80%', height: 'auto' }}/>
        <button onClick={() =>{setCvOpen(false);}}className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
            cacher mon cv
        </button></>:
        <button onClick={() =>{setCvOpen(true);}}className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
            afficher mon cv
        </button>
    }
    </div>
    </>
    )
};
