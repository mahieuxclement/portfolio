import Navbar from "../Navbar";
import Footer from "../Footer";
import ExperienceComponent from "../experiencesComponent/page";
import {ExperienceData} from "../data"

export const Experience = () => {return (
    <main className='min-h-screen flex-col bg-neutral-900'>
        <Navbar/>
        <div id="contentBody" className='items-center grid grid-flow-row-dense grid-cols-2 mt-24 mx-auto px-12 py-4 max-[900px]:grid-cols-1'>
            {ExperienceData.map((data,index) => (
                <li key={index} className="list-none">
                    <ExperienceComponent title={data.title} description={data.content}/>
                </li>
            ))}
        </div>
        <Footer/>
    </main>
);}
export default Experience