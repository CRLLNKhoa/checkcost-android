import { IconCalendarMonth, IconHelpOctagon, IconHourglassEmpty, IconMoon2, IconSearch, IconTools, IconUsersGroup } from "@tabler/icons-react";
import React from "react";
import { Button } from "@nextui-org/button";

function Tools() {
  return (
    <div className="flex flex-col my-8 items-center justify-center">
      <h1 className="text-2xl font-bold flex items-center justify-center gap-2 mb-8">
        <IconTools stroke={2} size={36} />
        Các công cụ khác
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 w-full">
        <Button
          radius="sm"
          variant="bordered"
          className="w-full h-14 text-lg"
          color="secondary"
          startContent={<IconSearch stroke={2} size={24} />}
        >
          Single Rewind
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          className="w-full h-14 text-lg"
          color="secondary"
          startContent={<IconUsersGroup stroke={2} size={24} />}
        >
          Team Build
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          className="w-full h-14 text-lg"
          color="secondary"
          startContent={<IconHourglassEmpty stroke={2} size={24} />}
        >
          Thời gian Rewind
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          className="w-full h-14 text-lg"
          color="secondary"
          startContent={<IconHelpOctagon stroke={2} size={24} />}
        >
          Câu trả lời Year 100
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          className="w-full h-14 text-lg"
          color="secondary"
          startContent={<IconMoon2 stroke={2} size={24} />}
        >
          Thời gian Nightmare
        </Button>
        <Button
          radius="sm"
          variant="bordered"
          className="w-full h-14 text-lg"
          color="secondary"
          startContent={<IconCalendarMonth stroke={2} size={24} />}
        >
          Lịch ra Heroes
        </Button>
      </div>
    </div>
  );
}

export default Tools;
