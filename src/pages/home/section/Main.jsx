import track from '../../../img/track.svg'
import { Link } from 'react-router-dom'

const Main = () => {
    return ( 
         <section id="home" className="min-h-fit bg-background flex justify-between  text-darkText px-16 pt-10 pb-24 font-sans">
            <div>
                <h1 className="capitalize font-semibold text-6xl leading-snug">Start Tracking Your <br /> Expense Now</h1>
                <p className="max-w-lg text-justify text-gray-500 mt-4 mb-4">No more unnecessary spending anymore, start tracking and save your expense from this day!</p>
                <button className="mt-4 text-center bg-[#98c580] py-3 px-6 rounded text-[#244818] font-semibold hover:bg-[#244818] hover:text-white hover:transition-all"><Link to="/register">Get Started</Link></button>
            </div>
            <div className="flex flex-col">
                <img src={track} className="w-96" alt="" />
            </div>
        </section>
     );
}
 
export default Main;