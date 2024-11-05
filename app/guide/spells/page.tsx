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

function SpellPage() {
  return (
    <section className="mt-[102px] mb-6 flex flex-col gap-4 bg-white rounded-xl p-4 shadow-xl">
      <h1 className="text-3xl font-bold">Spells</h1>
      <p>Spells được mở khóa vào day 2.</p>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Thông tin Spells</h2>
        <h3 className="text-lg font-bold mt-4 mb-2">Spells I</h3>
        <Table
          selectionMode="single"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Spell</TableColumn>
            <TableColumn>Miêu tả Lv.1</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Miêu tả Lv.5</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Thời gian hồi chiêu</TableColumn>
            <TableColumn>Mở khóa</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Gust</TableCell>
              <TableCell>
                Gây x1.1 sát thương cho kẻ địch trong một hàng ngang và đẩy lùi
                chúng 1.8 đơn vị.
              </TableCell>
              <TableCell>30</TableCell>
              <TableCell>
                Gây x1.5 sát thương cho kẻ địch trong một hàng ngang và đẩy lùi
                chúng 3.0 đơn vị.
              </TableCell>
              <TableCell>32</TableCell>
              <TableCell>10.0s</TableCell>
              <TableCell>2</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Ice Shard</TableCell>
              <TableCell>
                Gây x1.2 sát thương cho kẻ địch trong một khu vực mục tiêu và
                đóng băng chúng trong 3.0s.
              </TableCell>
              <TableCell>32</TableCell>
              <TableCell>
                Gây x2.0 sát thương cho kẻ địch trong một khu vực mục tiêu và
                đóng băng chúng trong 5.0s.
              </TableCell>
              <TableCell>34</TableCell>
              <TableCell>12.0s</TableCell>
              <TableCell>8</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Genesis</TableCell>
              <TableCell>
                Gây x1.6 sát thương trong 3.0s cho kẻ địch trong một hàng dọc và
                làm chậm chúng 40%.
              </TableCell>
              <TableCell>34</TableCell>
              <TableCell>
                Gây x4.0 sát thương trong 3.0s cho kẻ địch trong một hàng dọc và
                làm chậm chúng 40%.
              </TableCell>
              <TableCell>34</TableCell>
              <TableCell>14.0s</TableCell>
              <TableCell>12</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Zap</TableCell>
              <TableCell>
                Gây x2.0 (+20% máu hiện tại của kẻ địch) sát thương cho tất cả
                kẻ địch trong một bán kính nhỏ.
              </TableCell>
              <TableCell>10% hoặc 30</TableCell>
              <TableCell>
                Gây x4.0 (+20% máu hiện tại của kẻ địch) sát thương cho tất cả
                kẻ địch trong một bán kính nhỏ.
              </TableCell>
              <TableCell>10% hoặc 32</TableCell>
              <TableCell>12.0s</TableCell>
              <TableCell>17</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Fireball</TableCell>
              <TableCell>
                Gây x1.8 (+1% máu tối đa của kẻ địch) sát thương chí mạng cho kẻ
                địch trong một khu vực mục tiêu.
              </TableCell>
              <TableCell>10% hoặc 40</TableCell>
              <TableCell>
                Gây x3.0 (+1% máu tối đa của kẻ địch) sát thương chí mạng cho kẻ
                địch trong một khu vực mục tiêu.
              </TableCell>
              <TableCell>10% hoặc 42</TableCell>
              <TableCell>8.0s</TableCell>
              <TableCell>23</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h3 className="text-lg font-bold mt-4 mb-2">Spells II</h3>
        <Table
          selectionMode="single"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Spell</TableColumn>
            <TableColumn>Miêu tả Lv.1</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Miêu tả Lv.5</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Thời gian hồi chiêu</TableColumn>
            <TableColumn>Mở khóa</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Gale</TableCell>
              <TableCell>
                Gây x1.7 sát thương cho tất cả kẻ địch trên chiến trường và đẩy
                lùi chúng 2.8 đơn vị.
              </TableCell>
              <TableCell>48</TableCell>
              <TableCell>
                Gây x2.5 sát thương cho tất cả kẻ địch trên chiến trường và đẩy
                lùi chúng 4.0 đơn vị.
              </TableCell>
              <TableCell>50</TableCell>
              <TableCell>12.0s</TableCell>
              <TableCell>35</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Glacial Prison</TableCell>
              <TableCell>
                Gây x1.7 sát thương cho kẻ địch trong một hàng dọc và đóng băng
                chúng trong 3.0s.
              </TableCell>
              <TableCell>48</TableCell>
              <TableCell>
                Gây x2.5 sát thương cho kẻ địch trong một hàng dọc và đóng băng
                chúng trong 5.0s.
              </TableCell>
              <TableCell>50</TableCell>
              <TableCell>18.0s</TableCell>
              <TableCell>45</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Deuteronomy</TableCell>
              <TableCell>
                Hai tia sáng giao nhau, mỗi tia gây x3.0 sát thương trong 5.0s
                cho kẻ địch và làm chậm chúng 50%.
              </TableCell>
              <TableCell>50</TableCell>
              <TableCell>
                Hai tia sáng giao nhau, mỗi tia gây x5.0 sát thương trong 5.0s
                cho kẻ địch và làm chậm chúng 50%.
              </TableCell>
              <TableCell>52</TableCell>
              <TableCell>16.0s</TableCell>
              <TableCell>55</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Thunderbolt</TableCell>
              <TableCell>
                Gây x3.0 (+22% máu hiện tại của kẻ địch) sát thương cho tất cả
                kẻ địch trong khu vực mục tiêu.
              </TableCell>
              <TableCell>15% hoặc 58</TableCell>
              <TableCell>
                Gây x5.0 (+30% máu hiện tại của kẻ địch) sát thương cho tất cả
                kẻ địch trong khu vực mục tiêu.
              </TableCell>
              <TableCell>15% hoặc 60</TableCell>
              <TableCell>20.0s</TableCell>
              <TableCell>65</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Flamelance</TableCell>
              <TableCell>
                Gây x2.4 (+2% máu tối đa của kẻ địch) sát thương chí mạng cho kẻ
                địch theo đường thẳng, nảy từ tường hai lần.
              </TableCell>
              <TableCell>15% hoặc 62</TableCell>
              <TableCell>
                Gây x4.0 (+2% máu tối đa của kẻ địch) sát thương chí mạng cho kẻ
                địch theo đường thẳng, nảy từ tường hai lần.
              </TableCell>
              <TableCell>15% hoặc 64</TableCell>
              <TableCell>8.0s</TableCell>
              <TableCell>75</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h3 className="text-lg font-bold mt-4 mb-2">Spells III</h3>
        <Table
          selectionMode="single"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Spell</TableColumn>
            <TableColumn>Miêu tả Lv.1</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Miêu tả Lv.5</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Thời gian hồi chiêu</TableColumn>
            <TableColumn>Mở khóa</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Tornado</TableCell>
              <TableCell>
                Kéo và gây x3.0 sát thương cho tất cả kẻ địch trên chiến trường
                về phía trung tâm trong 3.0s tiếp theo.
              </TableCell>
              <TableCell>72</TableCell>
              <TableCell>
                Kéo và gây x5.0 sát thương cho tất cả kẻ địch trên chiến trường
                về phía trung tâm trong 3.0s tiếp theo.
              </TableCell>
              <TableCell>74</TableCell>
              <TableCell>30.0s</TableCell>
              <TableCell>85</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Blizzard</TableCell>
              <TableCell>
                Một loạt các mảnh băng rơi xuống chiến trường, gây x2.5 sát
                thương cho tất cả kẻ địch và đóng băng chúng trong 3.0s.
              </TableCell>
              <TableCell>72</TableCell>
              <TableCell>
                Một loạt các mảnh băng rơi xuống chiến trường, gây x4.5 sát
                thương cho tất cả kẻ địch và đóng băng chúng trong 5.0s.
              </TableCell>
              <TableCell>74</TableCell>
              <TableCell>30.0s</TableCell>
              <TableCell>95</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Revelation</TableCell>
              <TableCell>
                Các tia sáng chói lọi bao phủ chiến trường, gây x1.0 sát thương
                trong 6.0s cho tất cả kẻ địch trong 10.0s và làm chậm chúng 60%.
              </TableCell>
              <TableCell>72</TableCell>
              <TableCell>
                Các tia sáng chói lọi bao phủ chiến trường, gây x5.0 sát thương
                trong 10.0s cho tất cả kẻ địch và làm chậm chúng 60%.
              </TableCell>
              <TableCell>74</TableCell>
              <TableCell>30.0s</TableCell>
              <TableCell>105</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Thunderstorm</TableCell>
              <TableCell>
                Một cơn bão sấm sét tàn phá chiến trường, mỗi tia gây x1.0 (+7%
                máu hiện tại của kẻ địch) sát thương cho kẻ địch.
              </TableCell>
              <TableCell>25% hoặc 82</TableCell>
              <TableCell>
                Một cơn bão sấm sét tàn phá chiến trường, mỗi tia gây x3.0 (+15%
                máu hiện tại của kẻ địch) sát thương cho kẻ địch.
              </TableCell>
              <TableCell>25% hoặc 84</TableCell>
              <TableCell>30.0s</TableCell>
              <TableCell>115</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Armageddon</TableCell>
              <TableCell>
                Các thiên thạch rơi xuống chiến trường, gây x4.0 (+3% máu tối đa
                của kẻ địch) sát thương chí mạng cho tất cả kẻ địch.
              </TableCell>
              <TableCell>25% hoặc 82</TableCell>
              <TableCell>
                Các thiên thạch rơi xuống chiến trường, gây x6.0 (+3% máu tối đa
                của kẻ địch) sát thương chí mạng cho tất cả kẻ địch.
              </TableCell>
              <TableCell>25% hoặc 84</TableCell>
              <TableCell>30.0s</TableCell>
              <TableCell>125</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <h3 className="text-lg font-bold mt-4 mb-2">Spells IV</h3>
        <Table
          selectionMode="single"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Spell</TableColumn>
            <TableColumn>Miêu tả Lv.1</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Miêu tả Lv.5</TableColumn>
            <TableColumn>Mana</TableColumn>
            <TableColumn>Thời gian hồi chiêu</TableColumn>
            <TableColumn>Mở khóa</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Updraft</TableCell>
              <TableCell>
                Gây x1.0 sát thương chí mạng cho tất cả kẻ địch trên chiến
                trường, đẩy lùi chúng 2.0 đơn vị và làm chúng bay lên trong
                0.8s.
              </TableCell>
              <TableCell>15% hoặc 64</TableCell>
              <TableCell>Lỗi</TableCell>
              <TableCell>Lỗi</TableCell>
              <TableCell>20.0s</TableCell>
              <TableCell>3500</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Cryoblast</TableCell>
              <TableCell>
                Gây x2.0 sát thương chí mạng theo một đường thẳng, làm đóng băng
                kẻ địch bị trúng trong 3.0s hoặc kéo dài thời gian đóng băng của
                chúng thêm 0.2s.
              </TableCell>
              <TableCell>15% hoặc 64</TableCell>
              <TableCell>Lỗi</TableCell>
              <TableCell>Lỗi</TableCell>
              <TableCell>8.0s</TableCell>
              <TableCell>4500</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Polymorph</TableCell>
              <TableCell>
                Chuyển đổi 100% tất cả kẻ địch không phải công sự trong một bán
                kính thành một công sự Fallen Angel không thể bị ngăn cản.
              </TableCell>
              <TableCell>s</TableCell>
              <TableCell>
                Chuyển đổi 100% tất cả kẻ địch không phải công sự trong một bán
                kính thành một công sự Fallen Angel không thể bị ngăn cản.
              </TableCell>
              <TableCell>100</TableCell>
              <TableCell>20.0s</TableCell>
              <TableCell>5500</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Ragnarok</TableCell>
              <TableCell>Lỗi</TableCell>
              <TableCell>50% hoặc 150</TableCell>
              <TableCell>
                Một cơn bão gồm 100 tia sấm sét tàn phá chiến trường, mỗi tia
                gây x1.0 (+10% máu hiện tại của kẻ địch) sát thương chí mạng cho
                kẻ địch bị trúng.
              </TableCell>
              <TableCell>Lỗi</TableCell>
              <TableCell>30.0s</TableCell>
              <TableCell>6500</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

export default SpellPage;
