import { IconNotebook } from "@tabler/icons-react";
import React from "react";
import {Image} from "@nextui-org/image";
import Link from "next/link";

function Guide() {
  return (
    <div className="flex flex-col my-8 items-center justify-center">
      <h1 className="text-2xl font-bold flex items-center justify-center gap-2 mb-8">
        <IconNotebook stroke={2} size={36} />
        Hướng dẫn cơ bản
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4">
            <Link href={"/guide/stats"} className="flex flex-col gap-2 items-center cursor-pointer">
                <Image isZoomed radius="sm" src="/Stats.jpg" alt="Stats" className="w-full h-[160px] object-cover scale-105"  />
                <h2 className="text-center">Stats</h2>
            </Link>
            <Link href={"/guide/spells"} className="flex flex-col gap-2 items-center cursor-pointer">
                <Image isZoomed radius="sm" src="/spells.jpg" alt="Stats" className="w-full h-[160px] object-cover scale-105"  />
                <h2 className="text-center">Spells</h2>
            </Link>
            <Link href={"/guide/skills"} className="flex flex-col gap-2 items-center cursor-pointer">
                <Image isZoomed radius="sm" src="/skills.jpg" alt="Stats" className="w-full h-[160px] object-cover scale-105"  />
                <h2 className="text-center">Skills</h2>
            </Link>
      </div>
    </div>
  );
}

export default Guide;
