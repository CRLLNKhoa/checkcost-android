
import { IconUsersGroup } from "@tabler/icons-react";
import React from "react";
import CardTeam from "./card-team";
import { Button } from "@nextui-org/button";

function Teams() {
  return (
    <div className="flex flex-col my-8 items-center justify-center">
      <h1 className="text-2xl font-bold flex items-center justify-center gap-2 mb-8">
        <IconUsersGroup stroke={2} size={36} />
        Các đội hình gợi ý
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 w-full">
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
        <CardTeam />
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <Button color="secondary" className="text-white w-[120px]">Xem thêm</Button>
      </div>
    </div>
  );
}

export default Teams;
