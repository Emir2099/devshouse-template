"use client";
import Image from "next/image";
import Link from "next/link";
import { IconContext } from "react-icons";
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { RiThreadsFill, RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const contacts = [
    {
      name: "Bhavika Maini",
      title: "Gdg on Campus Organizer at VIT Chenna",
      email: "fix",
      mobileNo: "fix",
    },
    {
      name: "Syed Omar Albeez",
      title: "GDG On Campus Secretary at VIT Chennai",
      email: "syedomar.albeez2022@vitstudent.ac.in",
      mobileNo: "+91 90030 65894",
    },
    {
      name: "Joel Gibi",
      title: "GDG On Campus Management Lead at VIT Chennai",
      email: "subhamgcon@gmail.com",
      mobileNo: "fix",
    },
    {
      name: "Shaan Mukharjee",
      title: "GDG On Campus Management Lead at VIT Chennai",
      email: "fix",
      mobileNo: "fix",
    },
  ];

  return (
    <IconContext.Provider value={{ color: "white", size: "25px" }}>
      <div className="flex flex-col lg:flex-row justify-evenly items-center bg-[#242425] py-24 md:px-16" id="contacts">
        <div className="flex flex-col md:w-1/2 mb-10" data-aos="fade-right" data-aos-delay="600">
          <div className=" px-8">
            <h1 className="font-sans text-4xl text-white mb-10 text-center md:text-left">Reach out to Us!</h1>
            {contacts.map((e, i) => {
              return (
                <div className="mb-8" key={i}>
                  <h2 className="font-medium text-2xl text-white">{e.name}</h2>
                  <h3 className="font-normal text-base text-white">{e.title}</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <Link className="text-sm sm:text-md hover:text-blue-500" href={`mailto:${e.email}`}>
                      <AiOutlineMail />
                    </Link>
                    <span className="flex flex-row gap-2">
                    <Link className="text-sm sm:text-md hover:text-blue-500" href={`tel:${e.mobileNo.replace(/[^+0-9]/g, '')}`}>
                      <AiOutlinePhone />
                      </Link>
                      <h3 className="font-normal text-base text-white">{e.mobileNo}</h3>
                    </span>
                  </div>
                </div>
              );
            })}
            <Link target="_blank" className="text-white font-bold text-xl underline" href="https://docs.google.com/forms/d/e/1FAIpQLSeYTeeWWnH_OV3X3vp__Sq6xLHw6eOpHPXQSj9aRhPrE4CH_g/viewform?usp=sf_link">
              Interested in sponsoring us? Click here!
            </Link>
          </div>
          <div className="w-full px-8 ">
            <div className="grid grid-rows-2 grid-cols-3 md:flex md:grid-cols-6  justify-center md:justify-start gap-14 pt-8">
              <Link href="https://www.instagram.com/gdscvitchennai/" target="_blank" rel="noreferrer">
                <AiOutlineInstagram />
              </Link>
              <Link href="https://www.linkedin.com/company/dsc-vit-chennai/" target="_blank" rel="noreferrer">
                <AiOutlineLinkedin />
              </Link>
              <Link href="mailto:gdsc.vitc@gmail.com" target="_blank" rel="noreferrer">
                <AiOutlineMail />
              </Link>
              <Link href="https://discord.gg/UFfPjTtzh7" target="_blank" rel="noreferrer">
                <BsDiscord />
              </Link>
              <Link href="https://twitter.com/gdscvitc" target="_blank" rel="noreferrer">
                <RiTwitterXFill />
              </Link>
              <Link href="https://www.threads.net/@gdscvitchennai" target="_blank" rel="noreferrer">
                <RiThreadsFill />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <Image src="/Pasted Graphic 7.png" className="w-full h-full" height={400} width={400} alt="footer" />
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;
