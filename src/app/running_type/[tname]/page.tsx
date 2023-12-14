export default function TypePage({ params }: { params: { tname: string } }) {
  return (
    <main className="bg-neutral-100 w-full h-[400vh] flex flex-col items-center mt-[120px] text-black py-16">
      <div className="space-y-4 w-[80%] h-[20%] flex flex-row justify-around">
        <div className="text-black w-full font-bold text-5xl">
          Mini Marathon
          <div className="text-gray-500 w-[100%] text-2xl font-semibold my-5">
            10.5 KM
          </div>
        </div>
        <div className="text-[#8B0000] w-full font-bold text-7xl text-end">
          69
          <div className="text-gray-500 w-[100%] text-4xl my-5 inline mx-10 ">
            EVENT
          </div>
        </div>
      </div>
    </main>
  );
}
