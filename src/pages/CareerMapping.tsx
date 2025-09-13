import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, GraduationCap, Briefcase, TrendingUp } from "lucide-react";

const CareerMapping = () => {
  const careerMaps = [
    {
      stream: "Arts/Humanities",
      color: "bg-blue-50 border-blue-200",
      courses: [
        {
          name: "Bachelor of Arts (BA)",
          subjects: ["English", "History", "Psychology", "Political Science", "Sociology"],
          careers: [
            { name: "Civil Services (IAS/IPS)", salary: "₹56,000 - ₹2,50,000/month", growth: "High" },
            { name: "Journalism & Media", salary: "₹25,000 - ₹1,00,000/month", growth: "Medium" },
            { name: "Teaching & Education", salary: "₹30,000 - ₹80,000/month", growth: "Stable" },
            { name: "Content Writing", salary: "₹20,000 - ₹60,000/month", growth: "High" }
          ]
        },
        {
          name: "Bachelor of Fine Arts (BFA)",
          subjects: ["Visual Arts", "Performing Arts", "Design"],
          careers: [
            { name: "Graphic Designer", salary: "₹25,000 - ₹75,000/month", growth: "High" },
            { name: "Art Director", salary: "₹40,000 - ₹1,20,000/month", growth: "Medium" },
            { name: "Animation Artist", salary: "₹30,000 - ₹90,000/month", growth: "High" }
          ]
        }
      ]
    },
    {
      stream: "Science",
      color: "bg-green-50 border-green-200",
      courses: [
        {
          name: "Bachelor of Technology (B.Tech)",
          subjects: ["Computer Science", "Mechanical", "Electrical", "Civil"],
          careers: [
            { name: "Software Engineer", salary: "₹40,000 - ₹2,00,000/month", growth: "Very High" },
            { name: "Data Scientist", salary: "₹60,000 - ₹3,00,000/month", growth: "Very High" },
            { name: "Mechanical Engineer", salary: "₹35,000 - ₹1,20,000/month", growth: "Medium" }
          ]
        },
        {
          name: "MBBS",
          subjects: ["Medicine", "Surgery", "Anatomy", "Physiology"],
          careers: [
            { name: "Doctor (General)", salary: "₹50,000 - ₹2,00,000/month", growth: "High" },
            { name: "Specialist Doctor", salary: "₹1,00,000 - ₹5,00,000/month", growth: "High" },
            { name: "Medical Researcher", salary: "₹40,000 - ₹1,50,000/month", growth: "Medium" }
          ]
        }
      ]
    },
    {
      stream: "Commerce",
      color: "bg-amber-50 border-amber-200",
      courses: [
        {
          name: "Bachelor of Commerce (B.Com)",
          subjects: ["Accounting", "Economics", "Business Studies", "Statistics"],
          careers: [
            { name: "Chartered Accountant", salary: "₹40,000 - ₹2,00,000/month", growth: "High" },
            { name: "Financial Analyst", salary: "₹35,000 - ₹1,50,000/month", growth: "High" },
            { name: "Banking Professional", salary: "₹30,000 - ₹1,20,000/month", growth: "Medium" }
          ]
        },
        {
          name: "Bachelor of Business Administration (BBA)",
          subjects: ["Management", "Marketing", "Finance", "HR"],
          careers: [
            { name: "Business Manager", salary: "₹40,000 - ₹2,50,000/month", growth: "High" },
            { name: "Marketing Executive", salary: "₹25,000 - ₹1,00,000/month", growth: "High" },
            { name: "HR Specialist", salary: "₹30,000 - ₹1,20,000/month", growth: "Medium" }
          ]
        }
      ]
    }
  ];

  const getGrowthColor = (growth: string) => {
    switch (growth) {
      case "Very High": return "bg-green-100 text-green-800";
      case "High": return "bg-blue-100 text-blue-800";
      case "Medium": return "bg-yellow-100 text-yellow-800";
      case "Stable": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-foreground mb-4">Course-to-Career Mapping</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore how different educational streams and courses lead to various career opportunities. 
            Understand the salary ranges and growth prospects for each path.
          </p>
        </div>

        <div className="space-y-12">
          {careerMaps.map((stream, streamIndex) => (
            <div key={streamIndex} className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-primary mb-2">{stream.stream}</h2>
                <div className="w-24 h-1 bg-primary mx-auto rounded"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {stream.courses.map((course, courseIndex) => (
                  <Card key={courseIndex} className={`${stream.color} transition-all duration-200 hover:shadow-lg`}>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="w-6 h-6 text-primary" />
                        <CardTitle className="text-xl">{course.name}</CardTitle>
                      </div>
                      <CardDescription>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {course.subjects.map((subject, index) => (
                            <Badge key={index} variant="secondary" className="text-xs">
                              {subject}
                            </Badge>
                          ))}
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <ArrowRight className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">Career Opportunities</span>
                        </div>
                        
                        <div className="space-y-3">
                          {course.careers.map((career, careerIndex) => (
                            <div key={careerIndex} className="bg-white/50 rounded-lg p-4 border border-white/20">
                              <div className="flex items-start justify-between mb-2">
                                <div className="flex items-center space-x-2">
                                  <Briefcase className="w-4 h-4 text-primary" />
                                  <span className="font-medium text-foreground">{career.name}</span>
                                </div>
                                <Badge className={getGrowthColor(career.growth)}>
                                  <TrendingUp className="w-3 h-3 mr-1" />
                                  {career.growth}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{career.salary}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-muted rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">Need Personalized Guidance?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Take our aptitude quiz to get recommendations tailored specifically to your interests and strengths.
          </p>
          <Button size="lg">
            Take Aptitude Quiz
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareerMapping;