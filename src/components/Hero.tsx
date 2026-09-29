import Button from './Button';
import heroBg from '../assets/herobg.png';


export default function Hero() {
  return (
    <section className="flex min-h-[720px] items-center bg-[#0b2a55] bg-cover bg-[position:center-right]" 
    style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="container w-full pl-[80px]">
        <div className="max-w-[520px]">
          <span className="inline-flex items-center gap-2.5
              text-[13px] font-medium tracking-[2px] text-white">
           <i className="mr-1 h-[3px] w-[26px] bg-[#F5B400]"/> ASPIRE ACADEMY
          </span>
          <h1 className="  my-5 mb-[26px]
              text-[46px] font-bold leading-[1.15]
              tracking-[-0.3px] text-white
            ">
            Learn&nbsp; German With Confidence.
            <span className="block"> Build Your Future With Purpose</span>
          </h1>
          <p className=" mb-[34px] max-w-[460px]
              text-[16px] font-normal leading-[1.4]
              text-[#e3eaf5]">
            Quality German language training to help you unlock new opportunities — in academics, career, and life.
          </p>
          <div className="mb-[34px] flex gap-[14px]">
            <Button variant="outline-light" className="min-w-[120px] px-5 py-[13px] text-[14px]">Explore Courses</Button>
            <Button variant="Yellow" arrow className="min-w-[120px] px-5 py-[13px] text-[14px]">Apply Now</Button>
          </div>
          <div className    ="   flex items-center gap-2.5
              text-[13px] font-medium tracking-[2px] text-[#dbe4f2]">
            <i className="mr-1 h-[3px] w-[26px] bg-[#F5B400]"/> <span>LEARN</span> <b className="h-[5px] w-[5px] rounded-full bg-[#F5B400]"/> <span>GROW</span> <b className="h-[5px] w-[5px] rounded-full bg-[#F5B400]"/> <span>BELONG</span>
          </div>
        </div>
      </div>
    </section>
  );
}
