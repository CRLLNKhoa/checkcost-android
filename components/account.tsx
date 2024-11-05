"use client";
import React, { use, useEffect } from "react";
import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/avatar";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/modal";
import { Input } from "@nextui-org/input";

function Account() {
  const { isLoaded, user, isSignedIn } = useUser();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  useEffect(() => {
    if (!isSignedIn) {
      onClose();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center">
      {!isSignedIn && isLoaded && (
        <SignInButton mode="modal">
          <Button
            radius="sm"
            className="text-white font-semibold"
            color="success"
          >
            ĐĂNG NHẬP
          </Button>
        </SignInButton>
      )}
      {isSignedIn && isLoaded && (
        <Avatar onClick={onOpen} isBordered radius="lg" src={user?.imageUrl} />
      )}

      <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tài khoản của tôi
              </ModalHeader>
              <ModalBody>
              <div className="flex flex-col gap-2">
                      <Avatar
                        className="w-20 h-20 text-large"
                        isBordered
                        radius="full"
                        src={user?.imageUrl}
                      />
                      <Input
                        readOnly
                        type="email"
                        label="Email"
                        value={user?.primaryEmailAddress?.emailAddress}
                        defaultValue="junior@nextui.org"
                        className="w-full"
                        color="secondary"
                        variant="bordered"
                      />
                      <Input
                        readOnly
                        type="text"
                        label="Họ tên"
                        value={user?.fullName || "Unknown"}
                        defaultValue="junior@nextui.org"
                        className="w-full"
                        color="secondary"
                        variant="bordered"
                      />
                      <SignOutButton>
                        <Button
                          radius="sm"
                          className="text-white font-semibold"
                          color="danger"
                        >
                          Đăng xuất
                        </Button>
                      </SignOutButton>
                    </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}

export default Account;
