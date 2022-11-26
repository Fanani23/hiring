import Assets from "../assets";

const Footer = () => {
  return (
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
  );
};

export default Footer;
