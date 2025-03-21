import TicketCard from "@/components/TicketCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-3 gap-5 px-2 py-4">
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
      <TicketCard />
    </div>
  );
}
