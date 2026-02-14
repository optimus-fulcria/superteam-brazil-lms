"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Clock,
  Users,
  Star,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Zap,
  CheckCircle,
  Circle,
  Lock,
  PlayCircle,
  FileCode,
  Trophy,
  Share2,
  Bookmark
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// Mock course data
const course = {
  id: "solana-101",
  slug: "solana-101",
  title: "Solana 101: Getting Started",
  description: "Your first steps into Solana development. Learn the basics of accounts, transactions, and the Solana runtime. By the end of this course, you'll understand the core concepts that make Solana unique and be ready to build your first dApp.",
  level: "beginner",
  duration: "4 hours",
  totalLessons: 12,
  students: 1250,
  rating: 4.8,
  reviews: 234,
  xpReward: 500,
  tags: ["fundamentals", "wallets", "transactions", "accounts"],
  instructor: {
    name: "Superteam Brazil",
    avatar: "/avatars/superteam.png",
    courses: 6
  },
  prerequisites: [],
  whatYouWillLearn: [
    "Understand the Solana account model and how data is stored on-chain",
    "Create and sign transactions using popular wallets",
    "Read and write data to Solana accounts",
    "Use the Solana CLI and web3.js library",
    "Deploy your first program to devnet"
  ],
  modules: [
    {
      id: "mod-1",
      title: "Introduction to Solana",
      lessons: [
        { id: "les-1", title: "What Makes Solana Different", duration: "10 min", type: "video", completed: true },
        { id: "les-2", title: "The Account Model Explained", duration: "15 min", type: "article", completed: true },
        { id: "les-3", title: "Quiz: Solana Basics", duration: "5 min", type: "quiz", completed: false }
      ]
    },
    {
      id: "mod-2",
      title: "Setting Up Your Environment",
      lessons: [
        { id: "les-4", title: "Installing the Solana CLI", duration: "12 min", type: "video", completed: false },
        { id: "les-5", title: "Configuring Your Wallet", duration: "8 min", type: "article", completed: false },
        { id: "les-6", title: "Practice: Create a Keypair", duration: "10 min", type: "code", completed: false }
      ]
    },
    {
      id: "mod-3",
      title: "Your First Transaction",
      lessons: [
        { id: "les-7", title: "Anatomy of a Transaction", duration: "15 min", type: "video", completed: false },
        { id: "les-8", title: "Building Transactions with web3.js", duration: "20 min", type: "code", completed: false },
        { id: "les-9", title: "Challenge: Send SOL", duration: "15 min", type: "code", completed: false }
      ]
    },
    {
      id: "mod-4",
      title: "Working with Accounts",
      lessons: [
        { id: "les-10", title: "Account Data Layout", duration: "18 min", type: "article", completed: false },
        { id: "les-11", title: "Reading Account Data", duration: "15 min", type: "code", completed: false },
        { id: "les-12", title: "Final Project: Token Balance Viewer", duration: "30 min", type: "project", completed: false }
      ]
    }
  ]
};

const lessonTypeIcons = {
  video: PlayCircle,
  article: BookOpen,
  code: FileCode,
  quiz: Zap,
  project: Trophy
};

const levelConfig = {
  beginner: { color: "bg-green-500", textColor: "text-green-500" },
  intermediate: { color: "bg-yellow-500", textColor: "text-yellow-500" },
  advanced: { color: "bg-red-500", textColor: "text-red-500" }
};

export default function CourseDetailPage() {
  const [expandedModules, setExpandedModules] = useState<string[]>(["mod-1"]);

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev =>
      prev.includes(moduleId)
        ? prev.filter(id => id !== moduleId)
        : [...prev, moduleId]
    );
  };

  const completedLessons = course.modules
    .flatMap(m => m.lessons)
    .filter(l => l.completed).length;
  const progress = Math.round((completedLessons / course.totalLessons) * 100);

  const level = levelConfig[course.level as keyof typeof levelConfig];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code2 className="h-6 w-6 text-primary" />
            <span>Superteam Academy</span>
          </Link>
          <nav className="flex items-center gap-6 ml-8 text-sm">
            <Link href="/courses" className="text-muted-foreground hover:text-foreground transition-colors">
              Courses
            </Link>
            <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Leaderboard
            </Link>
          </nav>
          <div className="ml-auto">
            <Button>Connect Wallet</Button>
          </div>
        </div>
      </header>

      {/* Course Header */}
      <section className="border-b bg-muted/30">
        <div className="container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Course Info */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <Link href="/courses" className="text-sm text-muted-foreground hover:text-foreground">
                  Courses
                </Link>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{course.title}</span>
              </div>

              <div className="flex items-center gap-2 mb-4">
                <Badge className={level.color}>{course.level}</Badge>
                {course.tags.slice(0, 3).map(tag => (
                  <Badge key={tag} variant="secondary">{tag}</Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-muted-foreground mb-6 max-w-2xl">{course.description}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  {course.totalLessons} lessons
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {course.students.toLocaleString()} enrolled
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  {course.rating} ({course.reviews} reviews)
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-yellow-500" />
                  {course.xpReward} XP
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button size="lg" className="gap-2">
                  <PlayCircle className="h-5 w-5" />
                  Continue Learning
                </Button>
                <Button variant="outline" size="lg">
                  <Bookmark className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Progress Card */}
            <Card className="lg:w-80 shrink-0">
              <CardHeader>
                <CardTitle className="text-lg">Your Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>{completedLessons} of {course.totalLessons} lessons</span>
                    <span className="font-medium">{progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary transition-all"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">XP Earned</span>
                    <span className="font-medium flex items-center gap-1">
                      <Zap className="h-4 w-4 text-yellow-500" />
                      {Math.round(course.xpReward * (progress / 100))} / {course.xpReward}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Time Spent</span>
                    <span className="font-medium">45 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Current Streak</span>
                    <span className="font-medium">3 days</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <main className="container py-8 flex-1">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Curriculum */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="curriculum">
              <TabsList className="mb-6">
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="curriculum" className="space-y-4">
                {course.modules.map((module, moduleIndex) => {
                  const isExpanded = expandedModules.includes(module.id);
                  const moduleCompleted = module.lessons.filter(l => l.completed).length;

                  return (
                    <Card key={module.id}>
                      <button
                        className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-colors rounded-t-lg"
                        onClick={() => toggleModule(module.id)}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-medium">
                            {moduleIndex + 1}
                          </div>
                          <div className="text-left">
                            <h3 className="font-medium">{module.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {moduleCompleted}/{module.lessons.length} lessons completed
                            </p>
                          </div>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-muted-foreground transition-transform ${isExpanded ? "rotate-180" : ""}`}
                        />
                      </button>

                      {isExpanded && (
                        <CardContent className="pt-0">
                          <div className="space-y-1 border-t pt-4">
                            {module.lessons.map((lesson) => {
                              const LessonIcon = lessonTypeIcons[lesson.type as keyof typeof lessonTypeIcons];
                              return (
                                <Link
                                  key={lesson.id}
                                  href={`/courses/${course.slug}/${lesson.id}`}
                                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                >
                                  <div className="flex items-center justify-center w-8 h-8">
                                    {lesson.completed ? (
                                      <CheckCircle className="h-5 w-5 text-green-500" />
                                    ) : (
                                      <Circle className="h-5 w-5 text-muted-foreground" />
                                    )}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                                      {lesson.title}
                                    </h4>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <LessonIcon className="h-3 w-3" />
                                      <span>{lesson.type}</span>
                                      <span>•</span>
                                      <span>{lesson.duration}</span>
                                    </div>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                                </Link>
                              );
                            })}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </TabsContent>

              <TabsContent value="overview">
                <Card>
                  <CardHeader>
                    <CardTitle>What You&apos;ll Learn</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {course.whatYouWillLearn.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="p-6 text-center text-muted-foreground">
                  <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <p>Reviews coming soon...</p>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Instructor Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Instructor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Code2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{course.instructor.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {course.instructor.courses} courses
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certificate Card */}
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Earn a Credential
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                <p>
                  Complete this course to earn a verifiable on-chain credential (cNFT)
                  that proves your skills to employers and collaborators.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold">Superteam Academy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Built by Superteam Brazil
          </p>
        </div>
      </footer>
    </div>
  );
}
