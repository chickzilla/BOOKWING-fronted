"use client";

import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";

import { useEffect, useState } from "react";
import packageDetail from "@/data/packageDatail";

export default function PackageForm({
  setParentPackage,
}: {
  setParentPackage: Function;
}) {
  const [SelectPackageGroup, setSelectPackageGroup] = useState<string[]>([]);

  useEffect(() => {
    console.log(SelectPackageGroup);
  }, [SelectPackageGroup]);

  return (
    <div className="w-[60%] h-[20%] bg-white dark:bg-gray-400 rounded-xl shadow-xl flex flex-col justify-center items-center py-10">
      <div className="w-[80%] h-[20%] text-black text-lg ">Include</div>
      <div className="w-[80%] h-[80%]">
        <FormGroup className="w-[100%] h-[100%] flex px-5 overflow-x-auto overflow-y-auto ">
          {packageDetail.map((name) => (
            <FormControlLabel
              key={name.id}
              label={name.name}
              className=""
              control={
                <Checkbox
                  className="mx-5"
                  size="small"
                  value={name.name}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectPackageGroup([...SelectPackageGroup, name.name]);
                      setParentPackage([...SelectPackageGroup, name.name]);
                    } else {
                      setSelectPackageGroup(
                        SelectPackageGroup.filter((item) => item !== name.name)
                      );
                      setParentPackage(
                        SelectPackageGroup.filter((item) => item !== name.name)
                      );
                    }
                  }}
                />
              }
            />
          ))}
        </FormGroup>
      </div>
    </div>
  );
}
