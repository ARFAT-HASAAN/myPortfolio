import plan from '../assets/plan.png'
import code from '../assets/code.png'
import test from '../assets/test.png'
import deploy from '../assets/deploy.png'
const Stratagy = () => {
  return (
    <>
      <section className="contaiener">
        <div className="flex  mx-auto flex-col gap-3 mb-8 text-center items-center justify-center">
          <h1 className="text-2xl md:text-5xl text-white font-extrabold my-2">
            HOW I DO
          </h1>
          <div className="w-[200px]">
            <p className="border-t-2 border-[#F51613] mb-2 w-3/5 mx-auto"></p>
            <p className="border-t-2 border-[#F51613] w-2/5 mx-auto"></p>
          </div>
        </div>

        <div className="flex justify-between gap-5 items-center">
          <div className="w-1/5 text-center">
            <img
              style={{ width: '100px', margin: 'auto' }}
              src={plan}
              alt="instraction"
            />
            <p className="text-[14px] py-2 md:text-[18px]  text-white">
              GET INSTRUNCTION
            </p>
          </div>
          <div className="w-1/5 text-center">
            <img
              style={{ width: '100px', margin: 'auto' }}
              src={code}
              alt="plan"
            />
            <p className="text-[14px] py-2 md:text-[18px]  text-white">
              PLAN & CODE
            </p>
          </div>
          <div className="w-1/5 text-center">
            <img
              style={{ width: '100px', margin: 'auto' }}
              src={test}
              alt="test"
            />
            <p className="text-[14px] py-2 md:text-[18px]  text-white">
              TEST & DELIVER
            </p>
          </div>
          <div className="w-1/6 text-center ">
            <img
              style={{ width: '100px', margin: 'auto' }}
              src={deploy}
              alt="deploy"
            />
            <p className="text-[14px] py-2 md:text-[18px]  text-white">
              REVIEW & DEPLOY
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Stratagy
