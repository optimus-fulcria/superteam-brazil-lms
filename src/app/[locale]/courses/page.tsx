"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  Clock,
  Users,
  Star,
  ChevronRight,
  Search,
  Filter,
  BookOpen,
  Zap,
  Shield,
  Coins,
  Layers
} from "lucide-react";
import Link from "next/link";

// Mock course data - will be replaced with CMS data
const courses = [
  {
    id: "solana-101",
    slug: "solana-101",
    title: "Solana 101: Getting Started",
    description: "Your first steps into Solana development. Learn the basics of accounts, transactions, and the Solana runtime.",
    level: "beginner",
    duration: "4 hours",
    lessons: 12,
    students: 1250,
    rating: 4.8,
    xpReward: 500,
    tags: ["fundamentals", "wallets", "transactions"],
    image: "/courses/solana-101.png",
    instructor: "Superteam Brazil",
    featured: true
  },
  {
    id: "anchor-basics",
    slug: "anchor-basics",
    title: "Anchor Framework Fundamentals",
    description: "Master the Anchor framework for building Solana programs. PDAs, instructions, and account validation.",
    level: "intermediate",
    duration: "8 hours",
    lessons: 20,
    students: 890,
    rating: 4.9,
    xpReward: 1200,
    tags: ["anchor", "rust", "programs"],
    image: "/courses/anchor.png",
    instructor: "Superteam Brazil",
    featured: true
  },
  {
    id: "token-2022",
    slug: "token-2022",
    title: "Token-2022 Extensions Deep Dive",
    description: "Explore advanced token features: transfer fees, interest-bearing tokens, permanent delegates, and more.",
    level: "advanced",
    duration: "6 hours",
    lessons: 15,
    students: 420,
    rating: 4.7,
    xpReward: 1500,
    tags: ["tokens", "SPL", "extensions"],
    image: "/courses/token-2022.png",
    instructor: "Superteam Brazil",
    featured: false
  },
  {
    id: "wallet-integration",
    slug: "wallet-integration",
    title: "Wallet Integration with React",
    description: "Build seamless wallet connections in your dApps. Support Phantom, Solflare, Backpack, and more.",
    level: "beginner",
    duration: "3 hours",
    lessons: 8,
    students: 1100,
    rating: 4.6,
    xpReward: 400,
    tags: ["react", "wallets", "frontend"],
    image: "/courses/wallets.png",
    instructor: "Superteam Brazil",
    featured: false
  },
  {
    id: "defi-fundamentals",
    slug: "defi-fundamentals",
    title: "DeFi on Solana: AMMs & Liquidity",
    description: "Understand decentralized finance primitives. Build your own AMM and liquidity pool from scratch.",
    level: "advanced",
    duration: "10 hours",
    lessons: 25,
    students: 380,
    rating: 4.9,
    xpReward: 2000,
    tags: ["defi", "amm", "liquidity"],
    image: "/courses/defi.png",
    instructor: "Superteam Brazil",
    featured: true
  },
  {
    id: "compressed-nfts",
    slug: "compressed-nfts",
    title: "Compressed NFTs & State Compression",
    description: "Scale your NFT collections with Bubblegum. Learn state compression and merkle trees.",
    level: "intermediate",
    duration: "5 hours",
    lessons: 12,
    students: 560,
    rating: 4.8,
    xpReward: 1000,
    tags: ["nfts", "compression", "metaplex"],
    image: "/courses/cnfts.png",
    instructor: "Superteam Brazil",
    featured: false
  }
];

const levelConfig = {
  beginner: { color: "bg-green-500", textColor: "text-green-500", borderColor: "border-green-500/30" },
  intermediate: { color: "bg-yellow-500", textColor: "text-yellow-500", borderColor: "border-yellow-500/30" },
  advanced: { color: "bg-red-500", textColor: "text-red-500", borderColor: "border-red-500/30" }
};

function CourseCard({ course }: { course: typeof courses[0] }) {
  const level = levelConfig[course.level as keyof typeof levelConfig];

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${level.borderColor} overflow-hidden`}>
      <div className="h-40 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
        <Code2 className="h-16 w-16 text-primary/30" />
      </div>
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Badge className={level.color}>{course.level}</Badge>
          {course.featured && (
            <Badge variant="outline" className="border-yellow-500 text-yellow-500">
              <Star className="h-3 w-3 mr-1 fill-yellow-500" />
              Featured
            </Badge>
          )}
        </div>
        <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {course.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-1 mb-4">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {course.duration}
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {course.lessons} lessons
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            {course.students.toLocaleString()}
          </div>
          <div className="flex items-center gap-1">
            <Zap className="h-4 w-4 text-yellow-500" />
            {course.xpReward} XP
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
          <span className="font-medium">{course.rating}</span>
        </div>
        <Button asChild size="sm" className="gap-1">
          <Link href={`/courses/${course.slug}`}>
            Start Course
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default function CoursesPage() {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesFilter = filter === "all" || course.level === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredCourses = filteredCourses.filter(c => c.featured);
  const regularCourses = filteredCourses.filter(c => !c.featured);

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
            <Link href="/courses" className="font-medium text-foreground">
              Courses
            </Link>
            <Link href="/leaderboard" className="text-muted-foreground hover:text-foreground transition-colors">
              Leaderboard
            </Link>
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="ml-auto">
            <Button>Connect Wallet</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b bg-muted/30">
        <div className="container py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Course Catalog
          </h1>
          <p className="text-muted-foreground max-w-2xl mb-8">
            From your first transaction to building complex DeFi protocols.
            Choose your path and start earning on-chain credentials.
          </p>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <Tabs value={filter} onValueChange={setFilter} className="w-full sm:w-auto">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="beginner" className="text-green-600">Beginner</TabsTrigger>
                <TabsTrigger value="intermediate" className="text-yellow-600">Intermediate</TabsTrigger>
                <TabsTrigger value="advanced" className="text-red-600">Advanced</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Course Grid */}
      <main className="container py-8 flex-1">
        {/* Featured Section */}
        {featuredCourses.length > 0 && filter === "all" && !searchQuery && (
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <h2 className="text-xl font-semibold">Featured Courses</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </section>
        )}

        {/* All Courses */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">
              {filter === "all" && !searchQuery ? "All Courses" : `${filteredCourses.length} courses found`}
            </h2>
            <span className="text-sm text-muted-foreground">
              {filteredCourses.length} courses
            </span>
          </div>

          {filteredCourses.length === 0 ? (
            <Card className="p-12 text-center">
              <p className="text-muted-foreground">
                No courses found matching your criteria. Try adjusting your search or filter.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => { setFilter("all"); setSearchQuery(""); }}
              >
                Clear filters
              </Button>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(filter === "all" && !searchQuery ? regularCourses : filteredCourses).map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          )}
        </section>

        {/* Learning Path Suggestion */}
        <section className="mt-16 p-8 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Not sure where to start?</h3>
              <p className="text-muted-foreground">
                Take our quick assessment to get a personalized learning path based on your experience level and goals.
              </p>
            </div>
            <Button size="lg" className="gap-2 shrink-0">
              <Zap className="h-4 w-4" />
              Take Assessment
            </Button>
          </div>
        </section>
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
