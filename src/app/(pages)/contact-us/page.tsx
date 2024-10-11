import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, Phone, MapPin } from 'lucide-react';
import IMG1 from "../../../../public/map.webp";


export default function Contact() {
    return (
      <>
      <div className="flex justify-evenly items-center lg:flex-row   flex-col">
      <div className="">
        <h1 className="font-semibold text-2xl md:text-3xl lg:text-4xl mb-6 justify-center lg:justify-end flex">Lets colobrate</h1>
        <p className=" font-normal text-sm mb-8 md:text-base lg:text-lg text-muted-foreground">Lorem Ipsum is simply dummy text of the printing .</p>
      </div>
      <div className="">
      <div className="flex justify-end flex-col">
                <Image
                  src={IMG1}
                  alt="Team brainstorming"
                  //  className="w-full h-[50vh] object-cover"
                  className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover"
                />
              </div>
      </div>
      </div>

      {/*  */}
     
    <div className="flex flex-col container sm:flex-row justify-evenly items-center  p-4  py-9 lg:flex-row   ">
      <div className="mb-4 sm:mb-0 flex justify-center  items-center flex-col">
        <h2 className="text-lg font-semibold mb-2">Follow us</h2>
        <div className="flex gap-5">
          <Facebook className="w-6 h-6 text-muted-foreground hover:text-blue-600 cursor-pointer" />
          <Instagram className="w-6 h-6 text-muted-foreground hover:text-pink-600 cursor-pointer" />
          <Twitter className="w-6 h-6 text-muted-foreground hover:text-blue-400 cursor-pointer" />
          <Linkedin className="w-6 h-6 text-muted-foreground hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
      <div className="hidden sm:block w-px h-12 bg-gray-300 mx-4"></div>
      
      <div className="flex items-center mb-4 sm:mb-0 gap-3">
        <Phone className="w-6 h-6  " />
        <span className="text-muted-foreground">+94 4444 5555 6</span>
      </div>
      <div className="hidden sm:block w-px h-12 bg-gray-300 mx-4"></div>
      <div className="flex items-center justify-center gap-3">
        <MapPin className="w-6 h-6  " />
        <span className="text-muted-foreground  w-3/4">but also the leap into electronic typesetting</span>
      </div>
    </div>

      {/*  */}

      <div className=" mx-auto bg-blue-50 dark:bg-transparent p-8 flex justify-center flex-col items-center py-9 ">
      <h2 className="text-2xl font-bold text-center mb-1">Say hello</h2>
      <p className="text-center text-gray-600 mb-6">Lorem ipsum is simply dummy text of the printing</p>
      
      <form className="space-y-4  lg:w-1/3 w-full ">
        <div className="flex space-x-4">
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex-1">
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        
        <input 
          type="email" 
          placeholder="Email Address" 
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <textarea 
          placeholder="Message" 
          
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Send to Inbox
        </button>
      </form>
    </div>
      </>
    );
  }
