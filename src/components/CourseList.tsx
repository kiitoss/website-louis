import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface CourseData {
  titleKey: "introductionToProbability" | "measureTheory" | "introductionToStatistics"
  level: string
  role: "instructor" | "ta"
  institution: string
}

const courseTitles: Record<string, Record<CourseData["titleKey"], string>> = {
  en: {
    introductionToProbability: "Introduction to probability theory",
    measureTheory: "Measure theory",
    introductionToStatistics: "Introduction to statistics",
  },
  fr: {
    introductionToProbability: "Introduction aux probabilités",
    measureTheory: "Théorie de la mesure",
    introductionToStatistics: "Introduction aux statistiques",
  },
}

const courseData: CourseData[] = [
  {
    titleKey: "introductionToProbability",
    level: "L2, TD/TP (46h)",
    role: "ta",
    institution: "Institut de Mathématiques de Toulouse",
  },
  {
    titleKey: "measureTheory",
    level: "L3, TD (28h)",
    role: "ta",
    institution: "Institut de Mathématiques de Toulouse",
  },
  {
    titleKey: "introductionToProbability",
    level: "L2, TD/TP (46h)",
    role: "ta",
    institution: "Institut de Mathématiques de Toulouse",
  },
  {
    titleKey: "introductionToStatistics",
    level: "L2, lecture/TD (18h)",
    role: "ta",
    institution: "Institut de Mathématiques de Toulouse",
  },
]

interface CourseListProps {
  roleLabels: { instructor: string; ta: string }
  lang?: string
}

export function CourseList({ roleLabels, lang = "fr" }: CourseListProps) {
  const titles = courseTitles[lang] ?? courseTitles.fr

  return (
    <div className="flex flex-col gap-5">
      {courseData.map((course, index) => (
        <Card
          key={index}
          className="gap-3 p-6 rounded-lg shadow-none"
        >
          <div className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-base font-semibold text-foreground">
                {titles[course.titleKey]}
              </h2>
              <p className="text-sm text-muted-foreground">{course.institution}</p>
            </div>
            <div className="flex items-center gap-2 mt-1 sm:mt-0 shrink-0">
              <Badge
                variant={course.role === "instructor" ? "default" : "secondary"}
                className="rounded-md"
              >
                {course.role === "instructor" ? roleLabels.instructor : roleLabels.ta}
              </Badge>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                {course.level}
              </span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
