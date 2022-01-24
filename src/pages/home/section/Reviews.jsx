import person1 from '../../../img/portrait.jpg'
const Reviews = () => {
    return ( 
        <section id="reviews" className="bg-background w-full min-h-screen px-16 font-sans">
            <h1 className="text-center text-3xl font-bold tracking-tight ">What Our Clients Say</h1>
                <div className="py-20 flex justify-evenly">
                    <div>
                        <h1 className="text-2xl font-semibold text-darkText">Joseph Wu</h1>
                        <h1 className="text-gray-500">College Student</h1>
                        <div className="flex gap-2 py-8">
                            <div className="w-2 h-2 bg-lightText rounded-full"></div>
                            <div className="w-2 h-2 bg-lightText rounded-full"></div>
                            <div className="w-2 h-2 bg-lightText rounded-full"></div>
                            <div className="w-2 h-2 bg-lightText rounded-full"></div>
                        </div>
                        <p className="w-[500px] text-justify text-darkText leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis pariatur eveniet architecto qui illum dolorum consequatur! Hic dicta sint nisi commodi labore exercitationem aperiam nam, eius doloremque perspiciatis necessitatibus nulla quod in similique ullam explicabo accusantium. Repudiandae ipsa veritatis laudantium ullam, sequi voluptate iure ad, vel accusamus dolore obcaecati.</p>
                    </div>
                    <div>
                        <img src={person1} className="w-96 rounded-xl shadow-md shadow-slate-500" alt="" />
                    </div>
                </div>
        </section>
     );
}
 
export default Reviews;