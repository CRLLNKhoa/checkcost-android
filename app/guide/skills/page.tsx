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
import { Image } from "@nextui-org/image";

function SkillsPage() {
  return (
    <section className="mt-[102px] mb-6 flex flex-col gap-4 bg-white rounded-xl p-4 shadow-xl">
      <h1 className="text-3xl font-bold">Skills</h1>
      <p>Mở khóa kỹ năng sau lần rewind đầu tiên.</p>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">Thông tin Skills</h2>
        <Table
          selectionMode="single"
          aria-label="Example static collection table"
        >
          <TableHeader>
            <TableColumn>Tên Kỹ Năng</TableColumn>
            <TableColumn>Chỉ số cơ bản</TableColumn>
            <TableColumn>Chỉ số tối đa</TableColumn>
            <TableColumn>Cấp tối đa</TableColumn>
            <TableColumn>Tăng trưởng mỗi cấp</TableColumn>
            <TableColumn>Thức tỉnh</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Anti-Siege</TableCell>
              <TableCell>-5% HP Công sự</TableCell>
              <TableCell>-50/-75%</TableCell>
              <TableCell>10</TableCell>
              <TableCell>-5%</TableCell>
              <TableCell>+5 Levels</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>Accelerated Growth</TableCell>
              <TableCell>+2% Tốc độ nhàn rỗi</TableCell>
              <TableCell>+100%/+200%</TableCell>
              <TableCell>50</TableCell>
              <TableCell>+2%</TableCell>
              <TableCell>+50 levels</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>Arcane Arts</TableCell>
              <TableCell>x1.1 Sát thương phép thuật</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.1</TableCell>
              <TableCell>x16.0</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>Bargaining Chip</TableCell>
              <TableCell>-5% Chi phí nâng cấp chỉ số</TableCell>
              <TableCell>-50/-75%</TableCell>
              <TableCell>10</TableCell>
              <TableCell>-5%</TableCell>
              <TableCell>+5 Levels</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell>Beautiful Disaster</TableCell>
              <TableCell>x1.05 Sát thương chí mạng</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>x2.0</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell>Boss Slayer</TableCell>
              <TableCell>x1.05 Sát thương lên Boss</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>x3.0</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell>Deja Vu</TableCell>
              <TableCell>+5% Thống kê giữ lại khi hồi sinh</TableCell>
              <TableCell>50/75%</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+5%</TableCell>
              <TableCell>+5 levels</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell>Elixir Mastery</TableCell>
              <TableCell>x1.05 Tất cả Elixir</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>x2.0 - không có mốc</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell>Explosive Strength</TableCell>
              <TableCell>+10% Sát thương chí mạng</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+10%</TableCell>
              <TableCell>x16</TableCell>
            </TableRow>
            <TableRow key="10">
              <TableCell>Fear Mongering</TableCell>
              <TableCell>-0% HP Quái vật</TableCell>
              <TableCell>-50/-75%</TableCell>
              <TableCell>10</TableCell>
              <TableCell>-5%</TableCell>
              <TableCell>+5 levels</TableCell>
            </TableRow>
            <TableRow key="11">
              <TableCell>Hard Labour</TableCell>
              <TableCell>x1.05 Tất cả vàng</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>x2.0</TableCell>
            </TableRow>
            <TableRow key="12">
              <TableCell>Hidden Strength</TableCell>
              <TableCell>+2 Sát thương</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+2</TableCell>
              <TableCell>x10.0</TableCell>
            </TableRow>
            <TableRow key="13">
              <TableCell>Idleness & Dissipation</TableCell>
              <TableCell>x1.1 Sát thương nhàn rỗi</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.2</TableCell>
              <TableCell>x2.0</TableCell>
            </TableRow>
            <TableRow key="14">
              <TableCell>Inner Demons</TableCell>
              <TableCell>-5% Thời gian hồi chiêu phép thuật</TableCell>
              <TableCell>-50/-75%</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+5%</TableCell>
              <TableCell>+5 levels</TableCell>
            </TableRow>
            <TableRow key="15">
              <TableCell>Inspire</TableCell>
              <TableCell>x1.1 Sát thương Hero</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.1</TableCell>
              <TableCell>x32.0</TableCell>
            </TableRow>
            <TableRow key="16">
              <TableCell>Intelligence</TableCell>
              <TableCell>+10 Mana</TableCell>
              <TableCell>+100/+300</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+10</TableCell>
              <TableCell>+20 levels</TableCell>
            </TableRow>
            <TableRow key="17">
              <TableCell>Keen Perception</TableCell>
              <TableCell>+4% Tỉ lệ chí mạng</TableCell>
              <TableCell>+20/200%</TableCell>
              <TableCell>5</TableCell>
              <TableCell>+4%</TableCell>
              <TableCell>+45 levels</TableCell>
            </TableRow>
            <TableRow key="18">
              <TableCell>Mob Slayer</TableCell>
              <TableCell>x1.05 Sát thương lên Quái vật</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>x2.0</TableCell>
            </TableRow>
            <TableRow key="19">
              <TableCell>Neuroregeneration</TableCell>
              <TableCell>+0.4 Tái sinh Mana</TableCell>
              <TableCell>+2.0/6.0</TableCell>
              <TableCell>5</TableCell>
              <TableCell>+0.4</TableCell>
              <TableCell>+10 levels</TableCell>
            </TableRow>
            <TableRow key="20">
              <TableCell>Quick Hands</TableCell>
              <TableCell>+0.2 Linh hoạt</TableCell>
              <TableCell>+4/24</TableCell>
              <TableCell>20</TableCell>
              <TableCell>+0.2</TableCell>
              <TableCell>+100 levels</TableCell>
            </TableRow>
            <TableRow key="21">
              <TableCell>Rejuvenation</TableCell>
              <TableCell>+0.4 Tái sinh sức khỏe</TableCell>
              <TableCell>+2.0/6.0</TableCell>
              <TableCell>5</TableCell>
              <TableCell>+0.4</TableCell>
              <TableCell>+10 levels</TableCell>
            </TableRow>
            <TableRow key="22">
              <TableCell>Runic Affinity</TableCell>
              <TableCell>x1.05 Hiệu ứng Rune</TableCell>
              <TableCell>x2.00/6.00</TableCell>
              <TableCell>20</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>+40 levels</TableCell>
            </TableRow>
            <TableRow key="23">
              <TableCell>Sheer Intimidation</TableCell>
              <TableCell>-5% HP Boss</TableCell>
              <TableCell>-50/-75%</TableCell>
              <TableCell>10</TableCell>
              <TableCell>-5%</TableCell>
              <TableCell>+5 levels</TableCell>
            </TableRow>
            <TableRow key="24">
              <TableCell>Time Jump</TableCell>
              <TableCell>+5% Ngày giữ lại khi hồi sinh</TableCell>
              <TableCell>+5</TableCell>
              <TableCell>1</TableCell>
              <TableCell>+5%</TableCell>
              <TableCell>+5 levels</TableCell>
            </TableRow>
            <TableRow key="25">
              <TableCell>Tinkers Construct</TableCell>
              <TableCell>x1.05 Thống kê vũ khí</TableCell>
              <TableCell>x2.00/4.00</TableCell>
              <TableCell>20</TableCell>
              <TableCell>+0.1</TableCell>
              <TableCell>+40 levels</TableCell>
            </TableRow>
            <TableRow key="26">
              <TableCell>Untapped Power</TableCell>
              <TableCell>x1.05 Sát thương</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>∞</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>x2.0</TableCell>
            </TableRow>
            <TableRow key="27">
              <TableCell>Vitality</TableCell>
              <TableCell>+10 Sức khỏe</TableCell>
              <TableCell>+100/+300</TableCell>
              <TableCell>10</TableCell>
              <TableCell>+10</TableCell>
              <TableCell>+20 levels</TableCell>
            </TableRow>
            <TableRow key="28">
              <TableCell>Weighted Shots</TableCell>
              <TableCell>x1.05 Sát thương đạn</TableCell>
              <TableCell>x2.00/∞</TableCell>
              <TableCell>20</TableCell>
              <TableCell>+0.05</TableCell>
              <TableCell>Gỡ bỏ giới hạn cấp độ</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <h2 className="text-xl font-bold">Awaken</h2>
      <p>
        Sau khi có được tất cả các kỹ năng, cuối cùng bạn cũng có thể bắt đầu
        đánh thức các kỹ năng này sau mỗi 365 ngày đạt cấp tối đa. Mỗi lần thức
        tỉnh sẽ cho phép bạn chọn một trong ba kỹ năng ngẫu nhiên. Bạn được cung
        cấp tùy chọn sử dụng một bộ kỹ năng mới để thức tỉnh với chi phí 200
        viên đá quý.
      </p>
      <p>Awaken = X*365 + 365</p>
      <p>X= số lượng kỹ năng được thức tỉnh</p>
      <Table
        selectionMode="single"
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>Số Ngày</TableColumn>
          <TableColumn>Kỹ Năng</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1">
            <TableCell>1</TableCell>
            <TableCell>365</TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell>2</TableCell>
            <TableCell>730</TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>3</TableCell>
            <TableCell>1,095</TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>4</TableCell>
            <TableCell>1,460</TableCell>
          </TableRow>
          <TableRow key="5">
            <TableCell>5</TableCell>
            <TableCell>1,825</TableCell>
          </TableRow>
          <TableRow key="6">
            <TableCell>6</TableCell>
            <TableCell>2,190</TableCell>
          </TableRow>
          <TableRow key="7">
            <TableCell>7</TableCell>
            <TableCell>2,555</TableCell>
          </TableRow>
          <TableRow key="8">
            <TableCell>8</TableCell>
            <TableCell>2,920</TableCell>
          </TableRow>
          <TableRow key="9">
            <TableCell>9</TableCell>
            <TableCell>3,285</TableCell>
          </TableRow>
          <TableRow key="10">
            <TableCell>10</TableCell>
            <TableCell>3,650</TableCell>
          </TableRow>
          <TableRow key="11">
            <TableCell>11</TableCell>
            <TableCell>4,015</TableCell>
          </TableRow>
          <TableRow key="12">
            <TableCell>12</TableCell>
            <TableCell>4,380</TableCell>
          </TableRow>
          <TableRow key="13">
            <TableCell>13</TableCell>
            <TableCell>4,745</TableCell>
          </TableRow>
          <TableRow key="14">
            <TableCell>14</TableCell>
            <TableCell>5,110</TableCell>
          </TableRow>
          <TableRow key="15">
            <TableCell>15</TableCell>
            <TableCell>5,475</TableCell>
          </TableRow>
          <TableRow key="16">
            <TableCell>16</TableCell>
            <TableCell>5,840</TableCell>
          </TableRow>
          <TableRow key="17">
            <TableCell>17</TableCell>
            <TableCell>6,205</TableCell>
          </TableRow>
          <TableRow key="18">
            <TableCell>18</TableCell>
            <TableCell>6,570</TableCell>
          </TableRow>
          <TableRow key="19">
            <TableCell>19</TableCell>
            <TableCell>6,935</TableCell>
          </TableRow>
          <TableRow key="20">
            <TableCell>20</TableCell>
            <TableCell>7,300</TableCell>
          </TableRow>
          <TableRow key="21">
            <TableCell>21</TableCell>
            <TableCell>7,665</TableCell>
          </TableRow>
          <TableRow key="22">
            <TableCell>22</TableCell>
            <TableCell>8,030</TableCell>
          </TableRow>
          <TableRow key="23">
            <TableCell>23</TableCell>
            <TableCell>8,395</TableCell>
          </TableRow>
          <TableRow key="24">
            <TableCell>24</TableCell>
            <TableCell>8,760</TableCell>
          </TableRow>
          <TableRow key="25">
            <TableCell>25</TableCell>
            <TableCell>9,125</TableCell>
          </TableRow>
          <TableRow key="26">
            <TableCell>26</TableCell>
            <TableCell>9,490</TableCell>
          </TableRow>
          <TableRow key="27">
            <TableCell>27</TableCell>
            <TableCell>9,855</TableCell>
          </TableRow>
          <TableRow key="28">
            <TableCell>28</TableCell>
            <TableCell>10,220</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <h2>Xếp hạng lựa chọn: </h2>
      <Image loading="lazy" alt="Skills" src="/tier.png" radius="none" />
      <h2 className="text-xl font-bold">Milestones</h2>
      <p>
        Tất cả các elixir skills chưa được đánh thức, ngoại trừ Elixir Mastery đều có các mốc quan trọng. Một số chỉ số vàng cũng có các mốc
        quan trọng (sát thương, sát thương chí mạng, vàng). Đạt được một cột mốc
        thường sẽ mang lại cho kỹ năng/chỉ số đó hệ số nhân x2, ngoại trừ Mob và
        Boss Slayer nhận được x3 và Sức mạnh tiềm ẩn nhận được x10 mỗi cột mốc
        (mặc dù vậy, HS vẫn tệ, chỉ tăng cấp cho phần thưởng của số phận). Các
        mốc quan trọng bắt đầu ở cấp độ 10k, sau đó xảy ra ở mọi cấp độ x10 (vì
        vậy ở cấp độ 10k, 100k, 1m, 10m, 100m, 1b, v.v.)
      </p>
    </section>
  );
}

export default SkillsPage;
