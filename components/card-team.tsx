"use client";
import React from "react";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { IconEye, IconHeart } from "@tabler/icons-react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Button } from "@nextui-org/button";

function CardTeam() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card className="bg-white select-none cursor-pointer">
        <CardBody onClick={onOpen}>
          <div className="flex items-center justify-between">
            <Image
              isZoomed
              radius="sm"
              src="/nero.webp"
              alt="Stats"
              className="size-12 bg-black"
              fallbackSrc="https://via.placeholder.com/150"
            />
            <div className="flex flex-col flex-1 ml-2">
              <h1 className="line-clamp-1 text-lg">
                Roland và những người bạn
              </h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center text-sm gap-1">
                  <IconEye stroke={2} size={16} />
                  <p>12</p>
                </div>
                <div className="flex items-center text-sm gap-1">
                  <IconHeart stroke={2} size={16} />
                  <p>12</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <p>12/05/2024</p>
            <Button variant="bordered" color="secondary">Xem chi tiết</Button>
          </div>
        </CardBody>
      </Card>

      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <div className="w-full flex flex-col">
                  <div className="w-full flex items-center">
                    <Button isIconOnly variant="light">
                      <IconHeart />
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default CardTeam;
