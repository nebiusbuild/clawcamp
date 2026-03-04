import { workshops } from "@/data/workshops";
import WorkshopPage from "@/components/WorkshopPage";

export default function AgentInferenceWorkshop() {
  const workshop = workshops.find((w) => w.slug === "agent-inference")!;
  return <WorkshopPage workshop={workshop} />;
}
