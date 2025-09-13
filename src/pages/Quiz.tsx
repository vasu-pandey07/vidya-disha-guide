import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { CheckCircle } from "lucide-react";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which activity do you enjoy most in your free time?",
      options: [
        { value: "reading", label: "Reading books and articles", stream: "arts" },
        { value: "experiments", label: "Conducting experiments or building things", stream: "science" },
        { value: "numbers", label: "Working with numbers and calculations", stream: "commerce" },
        { value: "creative", label: "Creative activities like art or music", stream: "arts" }
      ]
    },
    {
      id: 2,
      question: "What subject interests you the most?",
      options: [
        { value: "literature", label: "Literature and Languages", stream: "arts" },
        { value: "physics", label: "Physics and Chemistry", stream: "science" },
        { value: "economics", label: "Economics and Business Studies", stream: "commerce" },
        { value: "biology", label: "Biology and Environmental Science", stream: "science" }
      ]
    },
    {
      id: 3,
      question: "What type of career appeals to you?",
      options: [
        { value: "teaching", label: "Teaching and Education", stream: "arts" },
        { value: "research", label: "Research and Development", stream: "science" },
        { value: "business", label: "Business and Finance", stream: "commerce" },
        { value: "healthcare", label: "Healthcare and Medicine", stream: "science" }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to solve problems?",
      options: [
        { value: "discussion", label: "Through discussion and analysis", stream: "arts" },
        { value: "logical", label: "Using logical reasoning and data", stream: "science" },
        { value: "practical", label: "Finding practical business solutions", stream: "commerce" },
        { value: "systematic", label: "Following systematic procedures", stream: "science" }
      ]
    },
    {
      id: 5,
      question: "What motivates you the most?",
      options: [
        { value: "helping", label: "Helping others and making a difference", stream: "arts" },
        { value: "discovery", label: "Making new discoveries", stream: "science" },
        { value: "success", label: "Achieving financial success", stream: "commerce" },
        { value: "innovation", label: "Creating innovative solutions", stream: "science" }
      ]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const streamCounts = { arts: 0, science: 0, commerce: 0 };
    
    Object.values(answers).forEach((answer) => {
      questions.forEach((q) => {
        const option = q.options.find(opt => opt.value === answer);
        if (option) {
          streamCounts[option.stream as keyof typeof streamCounts]++;
        }
      });
    });

    const sortedStreams = Object.entries(streamCounts)
      .sort(([,a], [,b]) => b - a)
      .map(([stream, count]) => ({ stream, count }));

    return sortedStreams;
  };

  const getStreamInfo = (stream: string) => {
    const streamData = {
      arts: {
        name: "Arts/Humanities",
        description: "Perfect for creative minds and those interested in human culture, society, and communication.",
        courses: ["BA English", "BA History", "BA Psychology", "BA Political Science", "BA Sociology"],
        careers: ["Teaching", "Journalism", "Civil Services", "Social Work", "Content Writing"]
      },
      science: {
        name: "Science",
        description: "Ideal for analytical thinkers who enjoy problem-solving and understanding how things work.",
        courses: ["B.Sc Physics", "B.Sc Chemistry", "B.Sc Biology", "B.Tech Engineering", "MBBS"],
        careers: ["Engineering", "Medicine", "Research", "IT Professional", "Scientist"]
      },
      commerce: {
        name: "Commerce",
        description: "Great for those interested in business, finance, and understanding economic systems.",
        courses: ["B.Com", "BBA", "CA", "CS", "CMA"],
        careers: ["Chartered Accountant", "Business Manager", "Banker", "Financial Analyst", "Entrepreneur"]
      }
    };
    return streamData[stream as keyof typeof streamData];
  };

  if (showResults) {
    const results = calculateResults();
    const topStream = results[0];
    const streamInfo = getStreamInfo(topStream.stream);

    return (
      <div className="min-h-screen bg-background py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-foreground mb-2">Quiz Completed!</h1>
            <p className="text-muted-foreground">Here are your personalized recommendations</p>
          </div>

          <Card className="mb-6">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">{streamInfo.name}</CardTitle>
              <CardDescription className="text-lg">{streamInfo.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Recommended Courses:</h3>
                <div className="flex flex-wrap gap-2">
                  {streamInfo.courses.map((course, index) => (
                    <span key={index} className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Career Opportunities:</h3>
                <div className="flex flex-wrap gap-2">
                  {streamInfo.careers.map((career, index) => (
                    <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {career}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {results.map((result, index) => {
              const info = getStreamInfo(result.stream);
              return (
                <Card key={result.stream} className={index === 0 ? "border-primary" : ""}>
                  <CardHeader>
                    <CardTitle className="text-lg">{info.name}</CardTitle>
                    <div className="text-2xl font-bold text-primary">{result.count}/5</div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          <div className="text-center space-y-4">
            <Button onClick={() => {
              setCurrentQuestion(0);
              setAnswers({});
              setShowResults(false);
            }}>
              Retake Quiz
            </Button>
            <p className="text-sm text-muted-foreground">
              Want more detailed guidance? Visit your dashboard for personalized recommendations.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Aptitude & Interest Quiz</h1>
          <p className="text-muted-foreground text-center mb-6">
            Answer these questions to discover your ideal educational stream
          </p>
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-muted-foreground text-center mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">{questions[currentQuestion].question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion] || ""}
              onValueChange={handleAnswerChange}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer py-2">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion]}
              >
                {currentQuestion === questions.length - 1 ? "View Results" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;