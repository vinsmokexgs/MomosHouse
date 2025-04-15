import React from "react";
import Lady from "../assets/Home/Lady.png";
import Video from "../assets/Home/Video.png";
import Hand from "../assets/Home/Hand.png";
import Wwomen from "../assets/Home/Wwomen.png";
import Chasma from "../assets/Home/Chasma.png";
import Blur from "../assets/Home/Blur.png";
import Curly from "../assets/Home/Curly.png"

function About() {
  return (
    <div>
      <div className=" border-2 border-black  flex items-center pl-10">
        <div className="w-[50%]">
          <div className=" border-2 border-amber-100 w-100  ml-40">
            <p className="text-3xl text-teal-800  font-bold ml-40">
              {" "}
              <span className="italic">About Us </span>
            </p>

            <p className=" mt-20"> WE PRIDE OURSELF ON</p>
            <div className=" flex mt-5 ">
              {" "}
              <h1 className="text-4xl  font-bold text-black-800 ">
                {" "}
                <span className="text-orange-600">
                  {" "}
                  Our authentic momo Receips{" "}
                </span>{" "}
                passed down through generation
              </h1>
            </div>
          </div>
        </div>
        <div className=" border-2 border-pink-300 flex items-center ">
          <div className="pt-10 ml-35 flex items-center justify-end">
            {" "}
            <img className=" mt-5  " src={Lady} />
          </div>
        </div>
      </div>
      <br /> <br />
      <div className=" border-2 ">
        <img className=" w-[100%]" src={Video}></img>{" "}
      </div>
      <br /> <br />
      <div className=" border-2 border-amber-600 ">
        <div className=" flex  border-2 border-black items-center pl-10">
          <div>
            {" "}
            <h1 className="text-4xl  font-bold text-black-800 ">
              Our Momos are{" "}
              <span className=" text-orange-600"> made with love</span>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores optio fuga unde mollitia eius praesentium nostrum sequi
              quisquam omnis aliquam?
            </p>
          </div>
          <br /> <br />
          <div className=" flex ">
            <img className=" inline-block" src={Hand} />
          </div>
        </div>
        <br /> <br />
        <div className=" flex ">
          <div>
            <img src={Wwomen} />
          </div>
          <div className=" border-2 pl-10 items-center pr-15 pt-30">
            <h1 className="text-4xl  font-bold text-black-800 ">
              {" "}
              Taste the difference with{" "}
              <span className=" text-orange-600">
                our handcrafted momos
              </span>{" "}
            </h1>
            <br />
            <p className="  flex items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
              vero doloribus beatae quos nemo eligendi omnis nisi nam distinctio
              error.
            </p>
          </div>
        </div>
        <br /> <br />
        <div className=" flex  border-2 border-black items-center pl-10">
          <div>
            {" "}
            <h1 className="text-4xl  font-bold text-black-800 ">
              Our Momos are the perfect{" "}
              <span className=" text-orange-600">
                {" "}
                blend of tradition and innovation{" "}
              </span>
            </h1>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores optio fuga unde mollitia eius praesentium nostrum sequi
              quisquam omnis aliquam?
            </p>
          </div>
          <br /> <br />
          <div className=" flex ">
            <img className=" inline-block" src={Chasma} />
          </div>
        </div>
      </div>
      <br/><br/>
      <div className=" flex ">
        <div className=" border-2 border-blue-300  w-[50%]    ">
          <div>   <span style={{ backgroundImage: `url(${Blur})` }} className=" w-170 h-250 text-white  bg-no-repeat  flex justify-center text-center  ">
        
         <p className=" flex justify-center text-center mt-30 "> "Momo is not just about sustenance, it's about bringing people
together and creating memories. At our restaurant, we strive to
create a warm and inviting atmosphere where our guests can enjoy
delicious momo, great company, and unforgettable experiences ."
</p>
<h1 className="text-4xl  font-bold text-black-800 mt-70   "> <p className=" ml-10 "> Marcus Schleifer</p> <br/> CEO</h1>

         </span></div>
        
        </div>
        <div> <img src={Curly}/></div>
      
      </div>
    </div>
  );
}

export default About;
