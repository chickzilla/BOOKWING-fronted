export default function TypePage({ params }: { params: { tname: string } }) {
  return (
    <main className="bg-neutral-100 w-full h-[400vh] flex flex-col items-center pt-[120px]">
      <div className="text-black">{params.tname}</div>
    </main>
  );
}
