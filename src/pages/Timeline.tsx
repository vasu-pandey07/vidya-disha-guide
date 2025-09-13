import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Bell, AlertCircle, CheckCircle2 } from "lucide-react";

const Timeline = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const events = [
    {
      id: 1,
      title: "CBSE Board Exam Registration",
      date: new Date(2024, 8, 15), // September 15, 2024
      category: "Board Exams",
      description: "Registration deadline for CBSE Class 12 board examinations",
      type: "deadline",
      importance: "high"
    },
    {
      id: 2,
      title: "JEE Main Application Opens",
      date: new Date(2024, 10, 1), // November 1, 2024
      category: "Entrance Exams",
      description: "Joint Entrance Examination (Main) application process begins",
      type: "application",
      importance: "high"
    },
    {
      id: 3,
      title: "NEET Registration Starts",
      date: new Date(2024, 11, 15), // December 15, 2024
      category: "Medical Entrance",
      description: "National Eligibility cum Entrance Test registration opens",
      type: "application",
      importance: "high"
    },
    {
      id: 4,
      title: "Delhi University Admission Notice",
      date: new Date(2025, 0, 10), // January 10, 2025
      category: "College Admissions",
      description: "DU releases admission notification for undergraduate programs",
      type: "announcement",
      importance: "medium"
    },
    {
      id: 5,
      title: "CBSE Board Practical Exams",
      date: new Date(2025, 0, 20), // January 20, 2025
      category: "Board Exams",
      description: "Practical examinations begin for Class 12 students",
      type: "exam",
      importance: "high"
    },
    {
      id: 6,
      title: "JEE Main Session 1",
      date: new Date(2025, 0, 24), // January 24, 2025
      category: "Entrance Exams",
      description: "First session of JEE Main examination",
      type: "exam",
      importance: "high"
    },
    {
      id: 7,
      title: "CBSE Board Theory Exams Begin",
      date: new Date(2025, 1, 15), // February 15, 2025
      category: "Board Exams",
      description: "Class 12 theory examinations commence",
      type: "exam",
      importance: "high"
    },
    {
      id: 8,
      title: "Scholarship Applications Open",
      date: new Date(2025, 2, 1), // March 1, 2025
      category: "Scholarships",
      description: "Various government scholarship schemes open for applications",
      type: "application",
      importance: "medium"
    },
    {
      id: 9,
      title: "JEE Advanced Registration",
      date: new Date(2025, 3, 10), // April 10, 2025
      category: "Entrance Exams",
      description: "Registration for JEE Advanced begins for qualified candidates",
      type: "application",
      importance: "high"
    },
    {
      id: 10,
      title: "CBSE Result Declaration",
      date: new Date(2025, 4, 15), // May 15, 2025
      category: "Results",
      description: "CBSE Class 12 board examination results announced",
      type: "result",
      importance: "high"
    }
  ];

  const getEventStatus = (eventDate: Date) => {
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { status: "past", text: "Completed", color: "text-muted-foreground" };
    if (diffDays === 0) return { status: "today", text: "Today", color: "text-primary" };
    if (diffDays <= 7) return { status: "urgent", text: `${diffDays} days left`, color: "text-destructive" };
    if (diffDays <= 30) return { status: "soon", text: `${diffDays} days left`, color: "text-warning" };
    return { status: "future", text: `${diffDays} days left`, color: "text-muted-foreground" };
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "deadline": return AlertCircle;
      case "application": return Calendar;
      case "exam": return Clock;
      case "result": return CheckCircle2;
      case "announcement": return Bell;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Board Exams": return "bg-blue-100 text-blue-800";
      case "Entrance Exams": return "bg-green-100 text-green-800";
      case "Medical Entrance": return "bg-red-100 text-red-800";
      case "College Admissions": return "bg-purple-100 text-purple-800";
      case "Scholarships": return "bg-yellow-100 text-yellow-800";
      case "Results": return "bg-indigo-100 text-indigo-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getImportanceBadge = (importance: string) => {
    switch (importance) {
      case "high": return "bg-red-100 text-red-800";
      case "medium": return "bg-yellow-100 text-yellow-800";
      case "low": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const sortedEvents = events.sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Timeline Tracker & Alerts</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with important dates for admissions, scholarships, exams, and other key educational milestones.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <AlertCircle className="w-8 h-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold text-destructive">
                {sortedEvents.filter(event => getEventStatus(event.date).status === "urgent").length}
              </div>
              <div className="text-sm text-muted-foreground">Urgent (This Week)</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-warning">
                {sortedEvents.filter(event => getEventStatus(event.date).status === "soon").length}
              </div>
              <div className="text-sm text-muted-foreground">This Month</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle2 className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-2xl font-bold text-success">
                {sortedEvents.filter(event => getEventStatus(event.date).status === "past").length}
              </div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Bell className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary">{sortedEvents.length}</div>
              <div className="text-sm text-muted-foreground">Total Events</div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {sortedEvents.map((event, index) => {
            const status = getEventStatus(event.date);
            const IconComponent = getEventIcon(event.type);
            
            return (
              <Card key={event.id} className={`hover:shadow-lg transition-shadow duration-200 ${
                status.status === "urgent" ? "border-destructive" : 
                status.status === "today" ? "border-primary" : ""
              }`}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-2 rounded-lg ${
                        status.status === "urgent" ? "bg-destructive/10" :
                        status.status === "today" ? "bg-primary/10" :
                        status.status === "past" ? "bg-muted" : "bg-accent"
                      }`}>
                        <IconComponent className={`w-5 h-5 ${
                          status.status === "urgent" ? "text-destructive" :
                          status.status === "today" ? "text-primary" :
                          status.status === "past" ? "text-muted-foreground" : "text-accent-foreground"
                        }`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-sm text-muted-foreground">
                            {event.date.toLocaleDateString('en-IN', { 
                              day: 'numeric', 
                              month: 'long', 
                              year: 'numeric' 
                            })}
                          </span>
                          <Badge className={getCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                          <Badge className={getImportanceBadge(event.importance)}>
                            {event.importance} priority
                          </Badge>
                        </div>
                        <CardDescription>{event.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm font-medium ${status.color}`}>
                        {status.text}
                      </div>
                      {status.status === "urgent" && (
                        <Button size="sm" variant="destructive" className="mt-2">
                          Set Reminder
                        </Button>
                      )}
                      {status.status === "soon" && (
                        <Button size="sm" variant="outline" className="mt-2">
                          Set Reminder
                        </Button>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-muted rounded-lg p-8">
          <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">Never Miss Important Dates</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Create your personalized dashboard to get customized reminders and notifications based on your educational goals.
          </p>
          <Button size="lg">
            Setup Personal Alerts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Timeline;