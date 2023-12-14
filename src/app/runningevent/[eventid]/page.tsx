export default function EventDatailPage({
  params,
}: {
  params: { eventid: string };
}) {
  return (
    <main className="bg-neutral-100 w-full h-[400vh] flex flex-col items-center pt-[120px]">
      <div className="text-black">Event ({params.eventid}) Detail Page</div>
    </main>
  );
}
