import track from '../../../../img/track.svg'
import { Link } from 'react-router-dom'
import { BsPlay } from 'react-icons/bs'

const Main = () => {
    return ( 
         <section id="home" className="min-h-max bg-background flex justify-between  text-darkText px-16 pt-10 pb-44 font-sans">
            <div>
                <h1 className="capitalize font-semibold text-6xl leading-snug">Start Tracking Your <br /> Expense Now</h1>
                <p className="max-w-lg text-justify text-gray-500 mt-4 mb-4">No more unnecessary spending anymore, start tracking and save your expense from this day!</p>
                <button className="mt-4 text-center bg-[#98c580] py-3 px-6 rounded text-[#244818] font-semibold hover:bg-[#244818] hover:text-white hover:transition-all"><Link to="/register">Get Started</Link></button>
            </div>
            <div className="flex flex-col bg-pinkBrand relative w-fit rounded-full z-[2]">
                <div className="bg-lightText w-20 h-20 absolute rounded-full translate-y-[150px] border-2 border-background -translate-x-10 -z-[2]"><BsPlay className="text-6xl mx-auto mt-2 text-white " /></div>
                <img src={track} className="w-96 abolute" alt="" />
            </div>
        </section>
     );
}
 
export default Main;