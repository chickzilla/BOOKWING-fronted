"use client";

import CreateEventForm from "@/components/CreateEvent/CreateEventForm";
import DetailForm from "@/components/CreateEvent/DetailForm";
import DateandLocationForm from "@/components/CreateEvent/DateandLocationForm";
import PackageForm from "@/components/CreateEvent/PackageForm";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Event } from "@/interface";
import { useRouter } from "next/navigation";
import uploadFile from "@/libs/uploadFile";
import createEvent from "@/libs/createEvent";
import getCoordinates from "@/libs/getCoordinates";
import { getCookie } from "typescript-cookie";
import getUserProfile from "@/libs/getUserProfile";
import { User } from "@/interface";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";

export default function CreateEventPage() {
  const [selectName, setSelectName] = useState<string>("");
  const [selectType, setSelectType] = useState<string[]>([]);
  const [allDescription, setAllDescription] = useState<string>("DESCRIPTION");
  const [selectProvince, setSelectProvince] = useState<string>("Bangkok");
  const [selectLocation, setSelectLocation] = useState<string>("");
  const [selectDate, setSelectDate] = useState<string>("");
  const [selectTime, setSelectTime] = useState<string>("");
  const [selectPackage, setSelectPackage] = useState<string[]>([]);
  const [selectPicture, setSelectPicture] = useState<string>("No picture");
  const [selectlatitude, setSelectlatitude] = useState<number>(11.0);
  const [selectlongitude, setSelectlongitude] = useState<number>(11.0);

  const [selectPictureFile, setSelectPictureFile] = useState<File | null>(null);
  const router = useRouter();
  const [submit, setSubmit] = useState<boolean>(false);

  const [organizer, setOrganizer] = useState<string>("");
  useEffect(() => {
    const fetchOrganizer = async () => {
      const token = getCookie("jwt");
      try {
        if (token) {
          const result = await getUserProfile({ token });
          const user: User = result.user;
          setOrganizer(user.username);
        }
      } catch (error) {
        console.log(error);
        setOrganizer("");
      }
    };
    fetchOrganizer();
  }, []);

  const SubmitHandler = async () => {
    if (
      !selectName ||
      !selectType ||
      !allDescription ||
      !selectProvince ||
      !selectLocation ||
      !selectDate ||
      !selectTime ||
      !selectPackage ||
      !selectPictureFile ||
      !selectlatitude ||
      !selectlongitude
    ) {
      alert("Please fill all information");
    } else if (!organizer) {
      alert("Sorry You are not organizer");
    } else {
      const data: Event = {
        id: "0",
        name: selectName,
        type: selectType,
        description: allDescription,
        province: selectProvince,
        location: selectLocation,
        date: selectDate,
        time: selectTime,
        package: selectPackage,
        picture: selectPicture,
        latitude: selectlatitude,
        longitude: selectlongitude,
        organizer: organizer,
      };
      try {
        setSubmit(true);

        const file = await uploadFile(selectPictureFile);
        data.picture = file.url;
        const geocoding = await getCoordinates(selectProvince);
        const latidude = geocoding.features[0].center[1];
        const longitude = geocoding.features[0].center[0];
        data.latitude = latidude;
        data.longitude = longitude;
        const response = await createEvent(data);

        router.push(`/runningevent/${response.message}`);
      } catch (error) {
        alert("fail to create event Please Try again with new name");
        setSubmit(false);
      }
    }
  };

  return (
    <main className="bg-neutral-100 w-full h-[250vh] flex flex-col items-center py-[70px] text-black">
      <div className="w-[100%] h-[100%] flex flex-col items-center pt-[60px] space-y-10">
        <div className="text-4xl text-black font-semibold w-[60%] h-[5%] flex flex-row justify-between">
          New Event
          <Button
            variant="contained"
            sx={{ width: "20%", height: "80%" }}
            onClick={() => {
              router.push("/OrganizeEvent");
            }}
            className="hover:bg-[#B55555] bg-[#CD5C5C] text-sm text-white"
          >
            <DensitySmallIcon sx={{ marginRight: "8px" }} />
            My events
          </Button>
        </div>
        <CreateEventForm
          SetParentName={(value: string) => {
            setSelectName(value);
          }}
          SetParentType={(value: string[]) => {
            setSelectType(value);
          }}
        />
        <DetailForm
          setParentDescription={(value: string) => {
            setAllDescription(value);
          }}
          setParentPicture={(value: File) => {
            setSelectPictureFile(value);
          }}
        />
        <DateandLocationForm
          setParentDate={(value: string) => {
            setSelectDate(value);
          }}
          setParentProvince={(value: string) => {
            setSelectProvince(value);
          }}
          setParentLocation={(value: string) => {
            setSelectLocation(value);
          }}
          setParentTime={(value: string) => {
            setSelectTime(value);
          }}
        />
        <PackageForm
          setParentPackage={(value: string[]) => {
            setSelectPackage(value);
          }}
        />
        <div className="w-[60%] h-[5%] flex flex-col items-center ">
          {!submit ? (
            <Button
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
              onClick={SubmitHandler}
              className="hover:bg-[#CD5C5C] bg-[#B22222] text-xl text-white"
            >
              Add new
            </Button>
          ) : (
            <Button
              variant="contained"
              sx={{ width: "100%", height: "100%" }}
              className="hover:bg-[#CD5C5C] bg-[#B22222] text-xl text-white"
              disabled
            >
              ...Creating
            </Button>
          )}
        </div>
      </div>
    </main>
  );
}
