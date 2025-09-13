import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Globe, Users, BookOpen, Award } from "lucide-react";

const Colleges = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedStream, setSelectedStream] = useState("");

  const colleges = [
    {
      name: "Delhi University",
      location: "New Delhi, Delhi",
      type: "Central University",
      established: "1922",
      courses: ["BA", "B.Sc", "B.Com", "BBA", "M.A", "M.Sc"],
      specializations: ["Liberal Arts", "Sciences", "Commerce"],
      cutoff: "85-95%",
      fees: "₹10,000 - ₹50,000/year",
      facilities: ["Library", "Sports Complex", "Hostels", "Research Labs"],
      contact: {
        phone: "+91-11-27666666",
        website: "du.ac.in"
      },
      rating: 4.5
    },
    {
      name: "Jawaharlal Nehru University",
      location: "New Delhi, Delhi",
      type: "Central University",
      established: "1969",
      courses: ["BA", "MA", "M.Phil", "PhD"],
      specializations: ["Social Sciences", "Languages", "International Studies"],
      cutoff: "75-85%",
      fees: "₹5,000 - ₹25,000/year",
      facilities: ["Central Library", "Cultural Center", "Hostels", "Medical Center"],
      contact: {
        phone: "+91-11-26704000",
        website: "jnu.ac.in"
      },
      rating: 4.3
    },
    {
      name: "Indian Institute of Technology, Delhi",
      location: "New Delhi, Delhi",
      type: "Institute of National Importance",
      established: "1961",
      courses: ["B.Tech", "M.Tech", "PhD"],
      specializations: ["Engineering", "Technology", "Computer Science"],
      cutoff: "JEE Advanced Rank 1-2000",
      fees: "₹2,50,000 - ₹3,00,000/year",
      facilities: ["Research Labs", "Industry Interface", "Sports Complex", "Hostels"],
      contact: {
        phone: "+91-11-26596114",
        website: "iitd.ac.in"
      },
      rating: 4.8
    },
    {
      name: "Lady Shri Ram College",
      location: "New Delhi, Delhi",
      type: "Government College",
      established: "1956",
      courses: ["BA", "B.Sc", "B.Com"],
      specializations: ["Arts", "Sciences", "Commerce"],
      cutoff: "95-98%",
      fees: "₹15,000 - ₹30,000/year",
      facilities: ["Library", "Labs", "Auditorium", "Sports"],
      contact: {
        phone: "+91-11-24362991",
        website: "lsr.edu.in"
      },
      rating: 4.6
    },
    {
      name: "Shri Ram College of Commerce",
      location: "New Delhi, Delhi",
      type: "Government College",
      established: "1926",
      courses: ["B.Com", "BBA", "B.A Economics"],
      specializations: ["Commerce", "Economics", "Business"],
      cutoff: "97-99%",
      fees: "₹20,000 - ₹40,000/year",
      facilities: ["Bloomberg Terminal", "Library", "Placement Cell", "Hostels"],
      contact: {
        phone: "+91-11-27666295",
        website: "srcc.edu"
      },
      rating: 4.7
    },
    {
      name: "Hansraj College",
      location: "New Delhi, Delhi",
      type: "Government College",
      established: "1948",
      courses: ["BA", "B.Sc", "B.Com"],
      specializations: ["Science", "Arts", "Commerce"],
      cutoff: "90-96%",
      fees: "₹12,000 - ₈25,000/year",
      facilities: ["Science Labs", "Library", "Sports Ground", "Canteen"],
      contact: {
        phone: "+91-11-27666614",
        website: "hansrajcollege.ac.in"
      },
      rating: 4.4
    }
  ];

  const states = ["All States", "Delhi", "Maharashtra", "Karnataka", "Tamil Nadu", "West Bengal", "Rajasthan"];
  const streams = ["All Streams", "Arts", "Science", "Commerce", "Engineering", "Medical"];

  const filteredColleges = colleges.filter(college => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         college.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "" || selectedState === "All States" || 
                        college.location.includes(selectedState);
    const matchesStream = selectedStream === "" || selectedStream === "All Streams" ||
                         college.specializations.some(spec => 
                           spec.toLowerCase().includes(selectedStream.toLowerCase())
                         );
    
    return matchesSearch && matchesState && matchesStream;
  });

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">College Directory</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover government colleges and universities with detailed information about programs, facilities, and admission requirements.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Search & Filter Colleges</CardTitle>
            <CardDescription>Find colleges that match your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                <Input
                  placeholder="Search by college name or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Stream</label>
                <Select value={selectedStream} onValueChange={setSelectedStream}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select stream" />
                  </SelectTrigger>
                  <SelectContent>
                    {streams.map((stream) => (
                      <SelectItem key={stream} value={stream}>{stream}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing {filteredColleges.length} colleges
          </p>
        </div>

        {/* College Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredColleges.map((college, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                    <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{college.location}</span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>{college.type}</span>
                      <span>Est. {college.established}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="font-medium text-primary">{college.rating}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Courses Offered</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.courses.map((course, courseIndex) => (
                      <Badge key={courseIndex} variant="secondary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    {college.specializations.map((spec, specIndex) => (
                      <Badge key={specIndex} variant="outline">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-foreground">Cut-off: </span>
                    <span className="text-muted-foreground">{college.cutoff}</span>
                  </div>
                  <div>
                    <span className="font-medium text-foreground">Fees: </span>
                    <span className="text-muted-foreground">{college.fees}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Facilities</h4>
                  <div className="flex flex-wrap gap-1">
                    {college.facilities.map((facility, facilityIndex) => (
                      <span key={facilityIndex} className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Phone className="w-4 h-4" />
                      <span>{college.contact.phone}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Globe className="w-4 h-4" />
                      <span>{college.contact.website}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-medium text-foreground mb-2">No colleges found</h3>
            <p className="text-muted-foreground">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Colleges;