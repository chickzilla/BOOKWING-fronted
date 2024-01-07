import MainButton from "@/components/Organizer/MainButton";
import ShowOrganizerEvent from "@/components/Organizer/ShowOrganizerEvent";

export default function OrganizePage() {
  return (
    <main className="bg-neutral-100 w-full h-[auto] flex flex-col items-center mt-[70px] py-16">
      <div className="w-[100%] h-[100%] flex flex-col items-center text-center space-y-8">
        <div className="w-[80%] h-[20vh] flex flex-col items-center">
          <div className="text-4xl text-black font-semibold w-[100%] h-[60%] flex items-center ">
            Organizer Zone
          </div>
          <div className="text-gray-500 text-sm font-semibold w-[100%] h-[40%] flex items-start justify-start text-start">
            Craft Your Own Running Adventure 🏁🎉 - Your Journey, Your Rules!
            Plan, Execute, and Celebrate Your Unique Running Event with Us. Lace
            up and Let's Create Memories, One Stride at a Time!
          </div>
        </div>
        <MainButton />
        <ShowOrganizerEvent organizer="user1" />
      </div>
    </main>
  );
}
