import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function PrivateAgentsWorkshop() {
  const workshop = workshops.find((w) => w.slug === "private-agents")!;
  return <WorkshopPage workshop={workshop} />;
}
