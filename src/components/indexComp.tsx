// import '../assets/css/index.css'
import ImageComponent from "./imageComp"
import logo from '../assets/images/download-1.svg'

import Navbar from "./Navbar"


const IndexComp =()=>{

return(
    <>
    <section className="h-[100vh] w-[100%]">
{/* mobile nav bar */}
<Navbar/>
<div className="flex flex-col items-center justify-center md:flex md:flex-row md:justify-around pt-18">
    
    
    <div className="pt-4.5 self-center py-1.5">
        <h1 className="text-center text-[30px] font-bold md:inline-block font-poppins">Ace Your Exams with </h1>  <h1 className=" text-center text-[30px] font-bold md:inline-block text-[#9b87f6] drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] pb-3"> FlashMaster</h1>
        <p className="text-center py-2.5 px-2 md:w-[500px] font-poppins">Master your subjects with personalized flashcards that make studying effective and fun. Wheather you're preparing for exams, learning a new topic, or reviewing on the go FlashMaster helps you stay sharp and confident</p>

        <span className="flex flex-col items-start justify-center md:flex-row pt-4 md:pt-3.5">
            <button className="w-[170px] h-[42px] font-medium bg-[#9b87f6] border-none rounded-[7px] mx-auto">Get Started</button>
            <button className="w-[170px] h-[42px] font-medium rounded-[7px] mt-[20px] mx-auto bg-[#f9f7fc] border border-gray-300 shadow-2xl md:mt-0">Sign In</button>
        </span>
</div>


<div className="mt-4">
    <figure>
        <ImageComponent src={logo}  alt="Banner Image" className="w-[280px] h-[280px] md:w-[350px] md:h-[350px]"/>
    </figure>
</div>



    </div>
    </section>
    
    </>
)
}

   export default IndexComp