import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Users, Target, Award, Globe, BookOpen, Heart, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Personalized Guidance",
      description: "AI-powered recommendations based on individual student profiles, interests, and academic performance"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Extensive database of courses, colleges, scholarships, and career opportunities across India"
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Guidance from qualified counselors and education experts with years of experience"
    },
    {
      icon: Shield,
      title: "Government Backed",
      description: "Official government platform ensuring authentic and verified information for all students"
    },
    {
      icon: Globe,
      title: "Nationwide Coverage",
      description: "Information about educational opportunities across all states and union territories"
    },
    {
      icon: Heart,
      title: "Student-Centric",
      description: "Designed with students' needs in mind, making career decisions easier and more informed"
    }
  ];

  const team = [
    {
      name: "Dr. Anita Sharma",
      role: "Director, Educational Guidance",
      qualification: "PhD in Educational Psychology",
      experience: "15+ years in student counseling"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "Career Counseling Expert",
      qualification: "M.Ed, Career Guidance Specialist",
      experience: "12+ years in career development"
    },
    {
      name: "Ms. Priya Gupta",
      role: "Technology Lead",
      qualification: "M.Tech in Computer Science",
      experience: "10+ years in EdTech solutions"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Students Guided" },
    { number: "500+", label: "Partner Institutions" },
    { number: "50+", label: "Career Paths" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6">About Vidya Disha</h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Vidya Disha is the Government of India's comprehensive digital platform designed to guide students 
            towards making informed decisions about their educational journey and career paths. Our mission is 
            to democratize access to quality career guidance and ensure every student can pursue their dreams.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                <Target className="w-6 h-6" />
                <span>Our Mission</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide every Indian student with personalized, accessible, and comprehensive career guidance 
                that empowers them to make informed educational choices and achieve their full potential in their 
                chosen career paths.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                <Award className="w-6 h-6" />
                <span>Our Vision</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become India's most trusted and comprehensive career guidance ecosystem, bridging the gap 
                between student aspirations and educational opportunities while fostering a skilled and 
                knowledgeable workforce for the nation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expert Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <CardDescription className="text-center">{member.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-2">
                  <Badge variant="secondary">{member.qualification}</Badge>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Government Partnerships */}
        <Card className="mb-16 bg-muted">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Government Partnerships</CardTitle>
            <CardDescription className="text-center">
              Collaborating with key government institutions for authentic and comprehensive guidance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-lg font-semibold text-foreground">Ministry of Education</div>
                <p className="text-sm text-muted-foreground">Policy guidance and curriculum insights</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-foreground">NCERT</div>
                <p className="text-sm text-muted-foreground">Educational research and development</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-foreground">UGC</div>
                <p className="text-sm text-muted-foreground">Higher education regulations</p>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-semibold text-foreground">State Education Boards</div>
                <p className="text-sm text-muted-foreground">Regional educational requirements</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
            <CardDescription className="text-center">
              Get in touch with our support team for any queries or assistance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Email Support</h3>
                  <p className="text-muted-foreground">info@vidyadisha.gov.in</p>
                  <p className="text-muted-foreground">support@vidyadisha.gov.in</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Phone Support</h3>
                  <p className="text-muted-foreground">1800-XXX-XXXX (Toll Free)</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Office Address</h3>
                  <p className="text-muted-foreground">
                    Ministry of Education<br />
                    Shastri Bhawan, New Delhi<br />
                    110001, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg">
                Contact Support Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;