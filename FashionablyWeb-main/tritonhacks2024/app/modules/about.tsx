import "../globals.css";
import ImageSelection from "./ImageSelection";

export default function About() {
  return (
    <div className="flex text-black m-16">
      <div className="self-start justify-self-end">
        <p className="w-[60%] text-[2vw] font-sans text-center ">
          An introduction to the environmental impact of the textile industry.
        </p>
      </div>
      <img className="w-[40%] border-solid border-[0.25vw] border-[--foreground-rgb] rounded-[1vw]" 
      src="https://cdn.discordapp.com/attachments/1241231662365413417/1241864889824182312/Untitled.jpg?ex=664bc04e&is=664a6ece&hm=a96d450f4c3041f78821290db6af1d8b717f263894f90e90b5563d8e3285a93d&">
      </img>
    </div>
  );
}