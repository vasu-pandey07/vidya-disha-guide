import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Users, MapPin, Calendar, BarChart3, UserCheck } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Aptitude & Interest Quiz",
      description: "Discover your strengths and interests through comprehensive assessments",
      link: "/quiz"
    },
    {
      icon: BookOpen,
      title: "Course-to-Career Mapping",
      description: "Visual guide showing how different courses lead to career opportunities",
      link: "/career-mapping"
    },
    {
      icon: MapPin,
      title: "College Directory",
      description: "Find nearby colleges with detailed information about programs and facilities",
      link: "/colleges"
    },
    {
      icon: Calendar,
      title: "Timeline Tracker",
      description: "Stay updated with important admission dates, scholarships, and exam schedules",
      link: "/timeline"
    },
    {
      icon: UserCheck,
      title: "Personalized Dashboard",
      description: "Get customized recommendations based on your profile and preferences",
      link: "/dashboard"
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Access resources and information from education and career experts",
      link: "/about"
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to Vidya Disha
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Guiding Students Towards the Right Path in Education & Career
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-foreground/80">
            A comprehensive platform by the Government of India to help students make informed decisions about their educational journey and career paths.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/quiz">Take Aptitude Quiz</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/dashboard">View Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources to guide your educational and career decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={feature.link}>Get Started</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Students Guided</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Partner Colleges</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Career Paths</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Shape Your Future?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Start your journey with our comprehensive career guidance tools and expert recommendations.
          </p>
          <Button asChild size="lg">
            <Link to="/quiz">Begin Your Assessment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;