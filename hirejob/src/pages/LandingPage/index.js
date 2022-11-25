import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Assets from "../../assets";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const LandingPage = () => {
  // Navigate
  const navigate = useNavigate();
  // Craousel
  const responsiveCarousel = {
    dekstop: {
      breakpoint: { max: 2566, min: 1366 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1366, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="container-xl mx-auto bg-white">
      <div className="container-xl mx-auto">
        <Navbar />
      </div>
      <div className="container bg-white mx-auto">
        <div className="flex flex-row">
          <div className="basis-2/4">
            <p className="mt-48 font-sans text-black text-5xl font-semibold leading-snug non-italic text-start w-4/5 h-52">
              Talenta terbaik negri untuk perubahan revolusi 4.0
            </p>
            <p className="mt-2 font-sans text-slate-700 text-lg font-normal leading-7 non-italic text-start w-4/5 h-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="mt-11 flex justify-start">
              <button className="text-white bg-violet-600 hover:bg-violet-800 focus:ring-1 focus:outline-none focus:ring-violet-300 font-medium rounded-lg text-sm text-center h-12 w-44">
                Mulai Dari Sekarang
              </button>
            </div>
          </div>
          <div className="basis-2/4">
            <img className="mt-14 ml-2" src={Assets.HomeTr} alt="" />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-2/4">
            <img className="mt-14 ml-2" src={Assets.HomeCl} alt="" />
          </div>
          <div className="basis-2/4">
            <p className="mt-20 font-sans text-black text-4xl font-semibold leading-snug non-italic text-start w-4/5 h-40">
              Kenapa harus mencari tallent di peworld
            </p>
            <div className="flex flex-row">
              <img src={Assets.CheckCr} alt="" />
              <p className="ml-5 font-sans text-slate-700 text-base font-normal non-italix text-start">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="mt-5 flex flex-row">
              <img src={Assets.CheckCr} alt="" />
              <p className="ml-5 font-sans text-slate-700 text-base font-normal non-italix text-start">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="mt-5 flex flex-row">
              <img src={Assets.CheckCr} alt="" />
              <p className="ml-5 font-sans text-slate-700 text-base font-normal non-italix text-start">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className="mt-5 flex flex-row">
              <img src={Assets.CheckCr} alt="" />
              <p className="ml-5 font-sans text-slate-700 text-base font-normal non-italix text-start">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-2/4">
            <p className="mt-36 font-sans text-black text-4xl font-semibold leading-snug non-italic text-start w-4/5 h-9">
              Skill Tallent
            </p>
            <p className="mt-8 font-sans text-slate-700 text-sm font-normal leading-snug non-italic text-start w-3/5 h-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <div className="mt-5 flex flex-row">
              <div className="flex flex-col">
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    Java
                  </p>
                </div>
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    Kotlin
                  </p>
                </div>
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    PHP
                  </p>
                </div>
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    JavaScript
                  </p>
                </div>
              </div>
              <div className="ml-16 flex flex-col">
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    Golang
                  </p>
                </div>
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    C++
                  </p>
                </div>
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    Ruby
                  </p>
                </div>
                <div className="mt-5 flex flex-row">
                  <img src={Assets.CheckBl} alt="" />
                  <p className="ml-5 font-sans text-slate-700 text-sm font-normal non-italic text-start">
                    10+ Bahasa lainnya
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-2/4">
            <img className="mt-8 ml-8" src={Assets.HomeBr} alt="" />
          </div>
        </div>
        <div className="bg-neutral-300 mx-auto w-full">
          <div className="pt-10">
            <p className="font-sans text-black text-semibold text-4xl">
              Their opinion about peworld
            </p>
          </div>
          <div className="w-4/5 mt-8 mx-auto">
            <Carousel
              className="w-full"
              responsive={responsiveCarousel}
              arrows={true}
              showDots={true}
              autoPlay={true}
            >
              <div>
                <img src={Assets.CarouselL} alt="Carousel 1" />
              </div>
              <div>
                <img src={Assets.CarouselC} alt="Carousel 2" />
              </div>
              <div>
                <img src={Assets.CarouselR} alt="Carousel 3" />
              </div>
              <div>
                <img src={Assets.CarouselL} alt="Carousel 1" />
              </div>
              <div>
                <img src={Assets.CarouselC} alt="Carousel 2" />
              </div>
              <div>
                <img src={Assets.CarouselR} alt="Carousel 3" />
              </div>
            </Carousel>
          </div>
        </div>
        <div className="w-full h-60">
          <div className="w-4/5 h-36 mt-20 mx-auto bg-violet-600 rounded-tl-3xl rounded-tr-md rounded-bl-md rounded-br-3xl">
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `url(${Assets.HomeBb})`,
                backgroundSize: "contain",
              }}
            >
              <div className="flex flex-row">
                <div className="basis-3/4">
                  <p className="w-60 h-28 mt-8 ml-16 font-sans text-white font-semibold text-3xl text-start leading-snug">
                    Lorem ipsum dolor sit amet
                  </p>
                </div>
                <div className="basis-1/4">
                  <button className="mt-14 text-violet-600 bg-white hover:bg-slate-200 focus:ring-1 focus:outline-none focus:ring-slate-200 font-medium rounded-sm text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
                    Mulai Dari Sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-violet-600 w-full h-80">
          <img className="pt-10 pl-32" src={Assets.HomeLogoB} alt="" />
          <p className="h-16 w-72 mt-8 ml-32 font-sans text-white text-normal text-md text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <img className="w-4/5 mx-auto mt-20" src={Assets.HomeLb} alt="" />
          <div className="flex flex-row mt-4">
            <p className="basis-3/4 text-white text-start ml-32">
              2020 Pewworld. All right reserved
            </p>
            <div className="basis-1/4 flex flex-row gap-16">
              <p className="text-white text-right">Telepon</p>
              <p className="text-white text-right">Email</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
