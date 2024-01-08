"use client";
import EventType_Data from "@/data/eventType";
import React, { useState } from "react";
import Link from "next/link";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  NextUIProvider,
} from "@nextui-org/react";

export default function ModalComp() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [mouseEnter, setMouseEnter] = useState<boolean>(false);
  return (
    <>
      <Button key="3xl" onPress={onOpen} className="bg-red text-white">
        Types
      </Button>
      <Modal size="3xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-3xl font-bold text-black">
                Event Type 🏃‍♂️
              </ModalHeader>
              <ModalBody className="text-black">
                <div className="w-full border-t-zinc-400 border-2 mt-1" />
                <div className="grid gap-x-6 gap-y-6 grid-cols-3">
                  {EventType_Data.map((obj, index) => (
                    <div
                      className="text-xl transition-all p-2 text-black inline flex flex-row text-center items-center justify-center rounded-md hover:bg-rose-400 hover:text-white "
                      // onMouseEnter={setMouseEnter(true)} onMouseLeave={setMouseEnter(false)}
                    >
                      <Link
                        className="inline"
                        href={`/running_type/${obj.link}`}
                      >
                        {" "}
                        {obj.title}{" "}
                      </Link>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
