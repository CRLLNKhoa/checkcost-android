import {
  IconCalendarMonth
} from "@tabler/icons-react";
import React from "react";
import { Image } from "@nextui-org/image";

function Banner() {
  return (
    <div className="flex flex-col my-8 items-center justify-center">
      <h1 className="text-2xl font-bold flex items-center justify-center gap-2 mb-8">
        <IconCalendarMonth stroke={2} size={36} />
        Lịch Banner Heroes
      </h1>
      <div className="relative p-4">
        <Image src="/lc.png" alt="Banner" />
      </div>
    </div>
  );
}

export default Banner;
