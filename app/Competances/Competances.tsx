import Navbar from "../Navbar";
import Footer from "../Footer";
import {CompetanceComponent} from "./CompetanceBox";
import { CompetancesData } from "../data";

export const competances = () => {return (
    <main className='min-h-screen flex-col bg-neutral-900'>
        <Navbar/>
        <div className='grid grid-flow-row-dense grid-cols-2 mt-24 space-x-3 mx-auto px-12 py-4 max-[900px]:grid-cols-1 min-[1400px]:grid-cols-3'>
        {CompetancesData.map((data,index) => (
                <li key={index} className="list-none">
                    <CompetanceComponent img_paht={data.img_path} title={data.title} note={data.note} bgColor={data.bgColor}/>
                </li>
            ))}
        </div>
        <Footer/>
    </main>
);}
export default competances