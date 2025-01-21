import Image from "next/image";
import TitleBar from "./modules/title";
import About from "./modules/about";
import StartButton from "./modules/Buttons";
import ImageSelection from "./modules/ImageSelection";

export default function Home() {
  return (
    <main className="">
        <TitleBar/>
        <br></br>
        <About/>
        <br></br>
        <ImageSelection />
    </main>
  );
}

/*
Header
Photo/Camera





Fast fashion:
fast degrading _____
cite all sources (prompt?)
fashionably
"the proper way to fashion"
"sustainable, clean"
"sustainable fashion brought to you"
"sf" = "sustainable fashion"
"sf a click away"
"Fashionably = name"
placeholder api
loading animation
1 page
dynamic loading & deloading
modules

*/
