import CreateEventForm from "@/components/CreateEvent/CreateEventForm";
import TypesFrom from "@/components/CreateEvent/TypeForm";

export default function CreateEventPage() {
  return (
    <main className="bg-neutral-100 w-full h-[150vh] flex flex-col items-center pt-[70px] text-black">
      <div className="w-[100%] h-[100%] flex flex-col items-center pt-[60px] space-y-10">
        <div className="text-4xl text-black font-semibold w-[60%]">
          New Event
        </div>
        <CreateEventForm />
        <TypesFrom />
      </div>
    </main>
  );
}
