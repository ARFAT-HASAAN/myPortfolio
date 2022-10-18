import plan from "../assets/plan.png"
import code from "../assets/code.png"
import test from "../assets/test.png"
import deploy from "../assets/deploy.png"
 const Stratagy = () => {
    return (
        <>
         <section className="contaiener">
            <div className="flex justify-between gap-5 items-center">
                <div className="w-1/5">

              <img style={{width: "100px"}} src={plan} alt="photo"/>
               <p className="text-[14px] font-bold md:text-[18px]  text-white">GET INSTRUNCTION</p>
                </div>
                <div  className="w-1/5">

              <img style={{width: "100px"}} src={code} alt="photo"/>
               <p className="text-[14px] font-bold md:text-[18px]  text-white">PLAN & CODE</p>
                </div>
                <div  className="w-1/5">

              <img style={{width: "100px"}} src={test} alt="photo"/>
               <p className="text-[14px] font-bold md:text-[18px]  text-white">TEST & DELIVER</p>
                </div>
                <div  className="w-1/6 ">

              <img style={{width: "100px"}} src={deploy} alt="photo"/>
               <p className="text-[14px] font-bold md:text-[18px]  text-white">REVIEW & DEPLOY</p>
                </div>
            </div>
         </section>
        </>
    )
}

export default Stratagy