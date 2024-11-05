"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/table";

function GuidePage() {
  return (
    <section className="mt-[102px] mb-6 flex flex-col gap-4 bg-white rounded-xl p-4 shadow-xl">
      <h1 className="text-3xl font-bold">Stats</h1>
      <p>
        Người chơi có thể nâng cấp chỉ số của nhân vật trên trang
        &quot;Stats&quot;. Một số chỉ số có cấp độ mở khóa, có nghĩa là người
        chơi phải đánh bại trùm vào một số ngày nhất định trong trò chơi.
      </p>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Thông tin Stats</h2>
        <Table  selectionMode="single"  aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Stat</TableColumn>
            <TableColumn>Miêu tả</TableColumn>
            <TableColumn>Day mở khóa</TableColumn>
            <TableColumn>Cấp tối đa</TableColumn>
            <TableColumn>Tăng theo cấp độ</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Damage</TableCell>
              <TableCell>Gây x sát thương cho mỗi viên đạn.</TableCell>
              <TableCell>0</TableCell>
              <TableCell>Không giới hạn</TableCell>
              <TableCell>+1 Damage</TableCell>
            </TableRow>

            <TableRow key="2">
              <TableCell>Agility</TableCell>
              <TableCell>Bắn x viên đạn mỗi giây.</TableCell>
              <TableCell>0</TableCell>
              <TableCell>30</TableCell>
              <TableCell>+0.15 Tấn công mỗi giây</TableCell>
            </TableRow>

            <TableRow key="3">
              <TableCell>Health</TableCell>
              <TableCell>x Điểm máu.</TableCell>
              <TableCell>10</TableCell>
              <TableCell>20</TableCell>
              <TableCell>+5 HP</TableCell>
            </TableRow>

            <TableRow key="4">
              <TableCell>Knockback</TableCell>
              <TableCell>Đẩy lùi kẻ địch x đơn vị khi trúng đòn.</TableCell>
              <TableCell>15</TableCell>
              <TableCell>5</TableCell>
              <TableCell>+0.40 Đơn vị</TableCell>
            </TableRow>

            <TableRow key="5">
              <TableCell>Mana</TableCell>
              <TableCell>x Mana.</TableCell>
              <TableCell>20</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+10 MP</TableCell>
            </TableRow>

            <TableRow key="6">
              <TableCell>Critical Chance</TableCell>
              <TableCell>x% cơ hội đánh chí mạng.</TableCell>
              <TableCell>25</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+5% Cơ hội chí mạng</TableCell>
            </TableRow>

            <TableRow key="7">
              <TableCell>Projectiles</TableCell>
              <TableCell>Bắn x viên đạn gây y% sát thương mỗi viên.</TableCell>
              <TableCell>30</TableCell>
              <TableCell>15</TableCell>
              <TableCell>+10% Sát thương mỗi viên, +1 viên đạn</TableCell>
            </TableRow>

            <TableRow key="8">
              <TableCell>Critical Damage</TableCell>
              <TableCell>Gây x% sát thương khi chí mạng.</TableCell>
              <TableCell>50</TableCell>
              <TableCell>Không giới hạn</TableCell>
              <TableCell>+10% Sát thương chí mạng</TableCell>
            </TableRow>

            <TableRow key="9">
              <TableCell>Spell Damage</TableCell>
              <TableCell>Phép của bạn gây thêm x% sát thương.</TableCell>
              <TableCell>100</TableCell>
              <TableCell>1 sextillion</TableCell>
              <TableCell>+10% Sát thương phép</TableCell>
            </TableRow>

            <TableRow key="10">
              <TableCell>Devastation</TableCell>
              <TableCell>
                Tất cả các đòn chí mạng có x% (dựa trên % chí mạng trên 100%) cơ
                hội để đánh chí mạng lại.
              </TableCell>
              <TableCell>1000</TableCell>
              <TableCell>10000</TableCell>
              <TableCell>+0.01% của cơ hội chí mạng trên 100%</TableCell>
            </TableRow>

            <TableRow key="11">
              <TableCell>Gold</TableCell>
              <TableCell>Nhận thêm x% vàng.</TableCell>
              <TableCell>3000</TableCell>
              <TableCell>Không giới hạn</TableCell>
              <TableCell>+50% vàng mỗi cấp</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        {/* <div className="flex flex-col gap-2 mt-4">
          <p className="text-red-500">Cách nâng stats sau rewind:</p>
          <p>Dưới 3000: 50% dame 50% critdame</p>
          <p>Trên 3000: 100% gold 100% critdame</p>
        </div> */}
      </div>
    </section>
  );
}

export default GuidePage;
