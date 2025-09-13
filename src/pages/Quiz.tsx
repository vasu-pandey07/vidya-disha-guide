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
      question: "Which subject do you enjoy studying the most?",
      options: [
        { value: "mathematics", label: "Mathematics", stream: "science" },
        { value: "science", label: "Science (Physics, Chemistry, Biology)", stream: "science" },
        { value: "literature", label: "Literature / Languages / History", stream: "arts" },
        { value: "business", label: "Business Studies / Economics", stream: "commerce" },
        { value: "technical", label: "Hands-on Technical Skills (IT, Electronics, Mechanics)", stream: "technical" }
      ]
    },
    {
      id: 2,
      question: "When faced with a problem, how do you prefer to solve it?",
      options: [
        { value: "formulas", label: "By applying formulas and logical reasoning", stream: "science" },
        { value: "experimenting", label: "By experimenting and observing results", stream: "science" },
        { value: "discussing", label: "By discussing and expressing ideas in words", stream: "arts" },
        { value: "analyzing", label: "By analyzing market trends or financial data", stream: "commerce" },
        { value: "creating", label: "By creating or fixing something practically", stream: "technical" }
      ]
    },
    {
      id: 3,
      question: "Which activity excites you the most?",
      options: [
        { value: "puzzles", label: "Solving puzzles or logical problems", stream: "science" },
        { value: "experiments", label: "Conducting science experiments", stream: "science" },
        { value: "writing", label: "Writing stories, essays, or speeches", stream: "arts" },
        { value: "planning", label: "Planning a budget or business idea", stream: "commerce" },
        { value: "building", label: "Building or repairing gadgets/machines", stream: "technical" }
      ]
    },
    {
      id: 4,
      question: "Which of these careers sounds most appealing to you?",
      options: [
        { value: "engineer", label: "Engineer, Data Scientist", stream: "science" },
        { value: "doctor", label: "Doctor, Researcher, Biologist", stream: "science" },
        { value: "writer", label: "Writer, Lawyer, Teacher, Journalist", stream: "arts" },
        { value: "accountant", label: "Chartered Accountant, Manager, Entrepreneur", stream: "commerce" },
        { value: "technician", label: "Technician, Designer, Skilled Professional", stream: "technical" }
      ]
    },
    {
      id: 5,
      question: "How do you usually make decisions?",
      options: [
        { value: "logic", label: "Based on logic and numbers", stream: "science" },
        { value: "facts", label: "Based on scientific facts and analysis", stream: "science" },
        { value: "creativity", label: "Based on feelings, creativity, or opinions", stream: "arts" },
        { value: "profit", label: "Based on money/profit and practical benefits", stream: "commerce" },
        { value: "testing", label: "Based on hands-on testing and real-world use", stream: "technical" }
      ]
    },
    {
      id: 6,
      question: "What type of environment do you prefer working in?",
      options: [
        { value: "technical", label: "Solving technical problems independently", stream: "science" },
        { value: "research", label: "Research labs, hospitals, or experiments", stream: "science" },
        { value: "creative", label: "Classrooms, libraries, stage, or media rooms", stream: "arts" },
        { value: "corporate", label: "Corporate offices, startups, or finance sector", stream: "commerce" },
        { value: "workshop", label: "Workshops, studios, or field-based jobs", stream: "technical" }
      ]
    },
    {
      id: 7,
      question: "Which school subject do you find the hardest to focus on?",
      options: [
        { value: "languages", label: "Languages", stream: "science" },
        { value: "science_exp", label: "Science experiments", stream: "arts" },
        { value: "mathematics", label: "Mathematics", stream: "arts" },
        { value: "history", label: "History / Social Studies", stream: "science" },
        { value: "theory", label: "None – I like practical learning more than theory", stream: "technical" }
      ]
    },
    {
      id: 8,
      question: "Which skill do you think defines you best?",
      options: [
        { value: "analytical", label: "Analytical and logical thinking", stream: "science" },
        { value: "observing", label: "Observing, experimenting, and problem-solving", stream: "science" },
        { value: "communication", label: "Creativity and communication", stream: "arts" },
        { value: "planning", label: "Planning, organizing, and money management", stream: "commerce" },
        { value: "technical_skill", label: "Technical know-how and practical work", stream: "technical" }
      ]
    },
    {
      id: 9,
      question: "If you had to choose one hobby for life, what would it be?",
      options: [
        { value: "sudoku", label: "Solving Sudoku, coding, or chess", stream: "science" },
        { value: "science_projects", label: "Doing science projects, exploring nature", stream: "science" },
        { value: "reading", label: "Reading books, debating, acting, writing", stream: "arts" },
        { value: "business_hobby", label: "Running a small business, trading, organizing events", stream: "commerce" },
        { value: "crafting", label: "Crafting, repairing, designing, or DIY projects", stream: "technical" }
      ]
    },
    {
      id: 10,
      question: "Which goal matches your ambition the most?",
      options: [
        { value: "innovating", label: "Innovating new technologies", stream: "science" },
        { value: "research_contrib", label: "Contributing to medical or scientific research", stream: "science" },
        { value: "influencing", label: "Influencing society with words, art, or law", stream: "arts" },
        { value: "financial", label: "Becoming financially independent through business or finance", stream: "commerce" },
        { value: "mastering", label: "Mastering a skill/trade and becoming a professional expert", stream: "technical" }
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
    const streamCounts = { arts: 0, science: 0, commerce: 0, technical: 0 };
    
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
      },
      technical: {
        name: "Technical/Vocational",
        description: "Perfect for hands-on learners who enjoy practical work and technical skills.",
        courses: ["B.Tech", "Diploma in Engineering", "ITI Courses", "B.Sc IT", "BCA"],
        careers: ["Software Developer", "Technician", "Designer", "IT Professional", "Skilled Craftsman"]
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
            <div className="space-x-4">
              <Button onClick={() => {
                setCurrentQuestion(0);
                setAnswers({});
                setShowResults(false);
              }}>
                Retake Quiz
              </Button>
              <Button variant="outline" onClick={() => window.location.href = '/dashboard'}>
                View Dashboard
              </Button>
            </div>
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