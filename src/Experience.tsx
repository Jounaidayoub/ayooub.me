import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
};

const experienceData: ExperienceItem[] = [
  {
    title: "High-Performance Real-Time Data Processing and Analysis System",
    company: "FSTM and Leyton CognitX Collaboration",
    location: "Morocco",
    period: "2025",
    type: "End-of-Year Project and Internship",
    description: [
      "Developed a high-performance system for processing and analyzing high-throughput financial market data in real time with minimal latency, capable of handling large volumes of data streams using decoupled and distributed components.",
      "Utilized Kafka for high-volume data stream handling, Redis + Celery for distributed real-time processing, FastAPI for building robust APIs, and Elasticsearch for high-performance data storage and indexing.",
      "Built on decoupled, independently scalable components using Docker for containerization, ensuring high availability, low latency, and efficient processing under heavy load.",
      "Gained valuable experience in backend and systems development, distributed architecture, asynchronous task execution, performance optimization, latency reduction, and system design patterns."
    ],
    technologies: ["Apache Kafka", "Redis", "Celery", "FastAPI", "Elasticsearch", "Docker", "Python"]
  }
];

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg border-zinc-200 dark:border-zinc-800">
      <CardHeader className="pb-4">
        <div className="flex flex-col space-y-2">
          <CardTitle className="text-xl font-bold leading-tight">
            {experience.title}
          </CardTitle>
          <div className="flex flex-col space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{experience.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
          </div>
          <Badge variant="secondary" className="w-fit">
            {experience.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {experience.description.map((desc, index) => (
            <p key={index} className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
              {desc}
            </p>
          ))}
        </div>
        
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Experience = () => {
  return (
    <>
      <div
        id="Experience"
        className="px-4 flex min-h-0 w-full flex-col items-center justify-center gap-4"
      >
        <h1 className="text-3xl font-bold">Experience</h1>
        <p className="text-zinc-750 max-w-2xl pb-10 text-center text-lg dark:text-zinc-300">
          Here's my professional experience and internships where I've applied my skills
          in real-world projects and gained valuable industry experience.
        </p>
        <div className="w-full max-w-4xl space-y-6">
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Experience;