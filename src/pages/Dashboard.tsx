import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { User, BookOpen, Target, Calendar, TrendingUp, Award, MapPin, Bell } from "lucide-react";

const Dashboard = () => {
  const [profile, setProfile] = useState({
    name: "Rahul Kumar",
    class: "12th",
    stream: "Science",
    interests: ["Technology", "Medicine", "Research"],
    location: "New Delhi",
    targetExams: ["JEE Main", "NEET"],
    preferredCareers: ["Engineering", "Medicine"]
  });

  const [isEditing, setIsEditing] = useState(false);

  const recommendations = [
    {
      type: "Course",
      title: "B.Tech Computer Science",
      description: "Based on your interest in technology and strong aptitude scores",
      match: 95,
      colleges: ["IIT Delhi", "DTU", "NSIT"],
      action: "View Details"
    },
    {
      type: "Course",
      title: "MBBS",
      description: "Your interest in medicine and science background make this ideal",
      match: 88,
      colleges: ["AIIMS", "MAMC", "LHMC"],
      action: "View Details"
    },
    {
      type: "Scholarship",
      title: "Merit-cum-Means Scholarship",
      description: "Government scholarship for SC/ST/OBC students",
      match: 85,
      deadline: "March 31, 2025",
      action: "Apply Now"
    }
  ];

  const upcomingEvents = [
    {
      title: "JEE Main Registration",
      date: "Nov 1, 2024",
      daysLeft: 15,
      priority: "High"
    },
    {
      title: "NEET Application",
      date: "Dec 15, 2024",
      daysLeft: 59,
      priority: "High"
    },
    {
      title: "Board Practical Exams",
      date: "Jan 20, 2025",
      daysLeft: 95,
      priority: "Medium"
    }
  ];

  const studyProgress = [
    { subject: "Physics", progress: 75, target: 90 },
    { subject: "Chemistry", progress: 68, target: 85 },
    { subject: "Mathematics", progress: 82, target: 95 },
    { subject: "Biology", progress: 71, target: 88 }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Personal Dashboard</h1>
          <p className="text-muted-foreground">
            Your personalized education and career guidance center
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Progress */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <User className="w-5 h-5" />
                    <span>Student Profile</span>
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? "Save" : "Edit"}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {isEditing ? (
                  <>
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="class">Class</Label>
                      <Select value={profile.class}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10th">10th Grade</SelectItem>
                          <SelectItem value="11th">11th Grade</SelectItem>
                          <SelectItem value="12th">12th Grade</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Name</Label>
                      <p className="text-foreground">{profile.name}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Class</Label>
                      <p className="text-foreground">{profile.class} Grade</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Stream</Label>
                      <Badge variant="secondary">{profile.stream}</Badge>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Location</Label>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span className="text-foreground">{profile.location}</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Interests</Label>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {profile.interests.map((interest, index) => (
                          <Badge key={index} variant="outline">{interest}</Badge>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Study Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Study Progress</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {studyProgress.map((subject, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{subject.subject}</span>
                      <span className="text-sm text-muted-foreground">
                        {subject.progress}% / {subject.target}%
                      </span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Recommendations & Events */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personalized Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="w-5 h-5" />
                  <span>Personalized Recommendations</span>
                </CardTitle>
                <CardDescription>
                  AI-powered suggestions based on your profile and preferences
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recommendations.map((rec, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <Badge variant="secondary">{rec.type}</Badge>
                            <span className="text-sm font-medium text-primary">
                              {rec.match}% match
                            </span>
                          </div>
                          <h3 className="font-semibold text-foreground">{rec.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {rec.description}
                          </p>
                        </div>
                        <Button variant="outline" size="sm">
                          {rec.action}
                        </Button>
                      </div>
                      
                      {rec.colleges && (
                        <div className="mt-3">
                          <span className="text-xs font-medium text-muted-foreground">
                            Top Colleges: 
                          </span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {rec.colleges.map((college, collegeIndex) => (
                              <Badge key={collegeIndex} variant="outline" className="text-xs">
                                {college}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {rec.deadline && (
                        <div className="mt-2 text-xs text-destructive">
                          Deadline: {rec.deadline}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Upcoming Events</span>
                </CardTitle>
                <CardDescription>
                  Important dates and deadlines for your target exams
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <h4 className="font-medium text-foreground">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.date}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-primary">
                          {event.daysLeft} days left
                        </div>
                        <Badge 
                          variant={event.priority === "High" ? "destructive" : "secondary"}
                          className="text-xs"
                        >
                          {event.priority}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                    <Target className="w-6 h-6" />
                    <span className="text-sm">Retake Quiz</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                    <MapPin className="w-6 h-6" />
                    <span className="text-sm">Find Colleges</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                    <Award className="w-6 h-6" />
                    <span className="text-sm">Scholarships</span>
                  </Button>
                  <Button variant="outline" className="h-auto p-4 flex flex-col items-center space-y-2">
                    <Bell className="w-6 h-6" />
                    <span className="text-sm">Set Alerts</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;