"use client";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/button";
import { IconBrandAndroid, IconDownload } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import React from "react";

function HeroBanner() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "h-screen hidden flex-col items-center justify-center px-6",
        pathname === "/" && "flex"
      )}
    >
      <p>Tiện ích Check cost</p>
      <h1 className="text-3xl lg:text-5xl font-semibold my-6 text-center">
        Welcome to the Check Rewind
      </h1>
      <p className="text-center max-w-2xl text-lg">
        Tham gia cùng Người bảo vệ trong Phòng thủ Lâu đài vô tận này với vô số
        giờ hành động không ngừng nghỉ! Phát triển lâu đài của bạn trước những
        đợt sóng bất tận, đụng độ với đám đông, Titan và trùm trong các màn chơi
        vô tận và bảng xếp hạng cạnh tranh.
      </p>

      <div className="flex items-center justify-center flex-col md:flex-row mt-8 gap-4 lg:gap-2">
        <Button
          radius="sm"
          className="text-lg text-white h-12"
          color="secondary"
          startContent={<IconDownload stroke={2} />}
        >
          Tải Xuống Máy Tính
        </Button>
        <div className="relative">
          <Button
            radius="sm"
            className="text-lg h-12"
            color="secondary"
            startContent={<IconBrandAndroid stroke={2} />}
            variant="bordered"
          >
            Tải Xuống Apk
          </Button>
          <span className="absolute -top-2 -right-4 w-10 flex items-center 
          justify-center bg-red-500 text-white text-sm rounded-md 
          transform -rotate-12 select-none">
            new
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
