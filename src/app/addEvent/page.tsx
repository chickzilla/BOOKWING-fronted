import CreateEventForm from "@/components/CreateEvent/CreateEventForm";
import DetailForm from "@/components/CreateEvent/DetailForm";
import DateandLocationForm from "@/components/CreateEvent/DateandLocationForm";
import PackageForm from "@/components/CreateEvent/PackageForm";

export default function CreateEventPage() {
  return (
    <main className="bg-neutral-100 w-full h-[200vh] flex flex-col items-center py-[70px] text-black">
      <div className="w-[100%] h-[100%] flex flex-col items-center pt-[60px] space-y-10">
        <div className="text-4xl text-black font-semibold w-[60%] h-[10%]">
          New Event
        </div>
        <CreateEventForm />
        <DetailForm />
        <DateandLocationForm />
        <PackageForm />
      </div>
    </main>
  );
}
