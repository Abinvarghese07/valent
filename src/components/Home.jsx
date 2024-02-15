import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1707984699457.json'
import animationData2 from '../assets/Animation - 1707988753336.json'
import { useState } from "react";
const Home = () => {
    const[yes,setYes] = useState(false)

    const handleButton = () => {
        setYes(!yes)
    }
    return (
        <div>
            <div className="flex items-center flex-col p-8">
            {
                yes === false && (
                    <div>
                        <Lottie animationData={animationData} className="w-[400px] lg:w-[800px]"/>
                        <h1 className="text-2xl md:text-3xl font-normal text-pink-900">Will you go on a date with me!?</h1>


                    </div>
                

                )
            }
            {
                yes === true &&(
                    <div className="flex flex-col items-center">
                        <Lottie animationData={animationData2} className="w-[200px] lg:w-[400px]"></Lottie>
                        <h1 className="text-3xl  text-pink-900 font-bold">Mwah Mwah Mwah Mwah</h1>
                        


                    </div>
                )
            }

           

               <div className=" group flex flex-col md:flex-row  items-center p-5 gap-6">
                 <div className="group-hover:mr-[200px] duration-300">
                    <button className= 'px-6 py-2 group-hover:px-14 group-hover:py-12 group-hover:text-5xl bg-pink-800 rounded-lg text-white ' onClick={handleButton} >Yes</button>
                </div>
                <div className="group-hover:rotate-180 relative group-hover:top-[-300px] group-hover:left-[180px]  md:group-hover:top-[-400px] md:group-hover:left-[400px] duration-500 ">
                    <button className="px-6 py-2 bg-pink-800 rounded-lg text-white ">No</button>

                </div>
               </div>
              

            </div>
            
        </div>
    );
};

export default Home;