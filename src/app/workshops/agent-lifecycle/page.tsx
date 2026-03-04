import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function AgentLifecycleWorkshop() {
  const workshop = workshops.find((w) => w.slug === "agent-lifecycle")!;
  return <WorkshopPage workshop={workshop} />;
}
