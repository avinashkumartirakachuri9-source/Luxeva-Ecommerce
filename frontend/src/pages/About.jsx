import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] "
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            iste suscipit ex animi cupiditate consequatur, corrupti, ducimus
            totam quisquam recusandae officia placeat eligendi dolorem rerum
            pariatur debitis? Impedit, minus est.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
            totam minima adipisci, eum illum placeat saepe quaerat excepturi
            libero, accusamus nobis, laudantium dolorem voluptatem sit tempore
            maiores eaque provident mollitia!
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore repudiandae laudantium a accusantium deleniti sapiente nostrum impedit quos officia cumque perspiciatis iusto hic, nihil debitis, qui tempora odit cupiditate praesentium.</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia quaerat a adipisci ratione aperiam eum voluptatem mollitia vero veritatis at! Accusamus minus, at eaque rem quae soluta perferendis illo saepe?</p>
        </div>
        <div className="border  border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience :</b>
          <p className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ut eum dolorum expedita. Minus odit, quia corporis doloribus ab aut, exercitationem atque dolorum quae nam amet fugit necessitatibus. Sint, cumque.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cum accusantium ratione maxime non praesentium voluptatibus tempore a alias adipisci tempora eaque doloremque eligendi nisi odio, atque pariatur rerum et!</p>
        </div>
      </div>
      < NewsLetterBox/>
    </div>
  );
};

export default About;
