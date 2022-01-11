import { RiPencilRuler2Fill } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BiMicrochip } from "react-icons/bi";
import { FaLaptopCode, FaTools } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const content = [
  {
    id: 1,
    icon: <HiOutlineLightBulb />,
    title: "1. Ideenfindung & Brainstorming",
    description:
      "Profitieren Sie von unserer Erfahrung und lassen Sie sich unverbindlich inspirieren und beraten. Sie erhalten ein detailliertes Angebot sowie eine Zeitplanung mit sämtlichen Schritten. Rufen Sie uns einfach an!",
  },
  {
    id: 2,
    icon: <RiPencilRuler2Fill />,
    title: "2. Konzept & Planung",
    description:
      "Wir entwickeln Ihre Idee in einem Konzept bis zur Umsetzungsreife und umgehen frühzeitig eventuelle Stolpersteine. Das ist die Basis für eine zügige Realisierung.",
  },
  {
    id: 3,
    icon: <BiMicrochip />,
    title: "3. Hardware",
    description:
      "Wir beschaffen und integrieren die passende Hardware entsprechend der technischen Planung.",
  },
  {
    id: 4,
    icon: <FaLaptopCode />,
    title: "4. Design, Softwareentwicklung & Realisierung",
    description:
      "Wir verschmelzen Konzept, Software und Hardware zu einem ganzheitlichen interaktiven Erlebnis. In Feedbackschleifen haben Sie jederzeit Eingriffsmöglichkeiten.",
  },
  {
    id: 5,
    icon: <FaTools />,
    title: "5. Rollout & Integration",
    description:
      "Wir installieren und testen alles bei Ihnen vor Ort und sind erst zufrieden, wenn Sie begeistert sind!",
  },
];

export default function Workflow() {
  return (
    <div className=" bg-gray-100 py-20 px-4 md:px-0">
      <div className=" container mx-auto">
        <h1 className=" text-center text-4xl text-gray-900">UNSER WORKFLOW</h1>
        <div className="mt-20">
          <VerticalTimeline animate={false} lineColor={"#ddd"}>
            {content.map((item) => (
              <VerticalTimelineElement
                key={item.id}
                className="vertical-timeline-element--work"
                iconStyle={{
                  background: "#005D98",
                  color: "#fff",
                  boxShadow: "none",
                }}
                icon={item.icon}
              >
                <h3 className="text-secondary text-xl pb-4 border-b">
                  {item.title}
                </h3>
                <p>{item.description}</p>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
