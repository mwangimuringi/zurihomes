import "../globals.css";

export default function TitleBar() {
  return (
    <div>
      <div className="w-full align-middle text-center font-sans rounded-[2vw] text-black font-semibold">
      <img className="w-[8%] ml-10 mt-10 absolute top-0 left-0" src="https://cdn.discordapp.com/attachments/1241231662365413417/1241879873354731551/logo.jpg?ex=664bce42&is=664a7cc2&hm=da46c50ef3bbcf8b3589c47793f8e1eab190c5c3682ecd2237320073b25ef4e8&"></img>
        <p className="text-[5vw] mt-16">
          Fashionably
        </p>
        <p className="italic text-[1.2vw]">
          Fashionably sustainable, Fashionably you
        </p>
      </div>

      <div className="flex justify-center">
        <span className="w-10/12 border-b-4 rounded-xl">wahoo</span> 
      </div>
    </div>
  );
}