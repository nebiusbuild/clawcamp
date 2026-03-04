import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function RoboticsWorkshop() {
  const workshop = workshops.find((w) => w.slug === "robotics")!;
  return <WorkshopPage workshop={workshop} />;
}
