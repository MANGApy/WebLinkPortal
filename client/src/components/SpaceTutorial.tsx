import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TutorialStep {
  title: string;
  description: string;
  targetId: string;
}

const tutorialSteps: TutorialStep[] = [
  {
    title: "Welcome to INJU!",
    description: "Let's take a quick tour of your space control center.",
    targetId: "title",
  },
  {
    title: "Main Website",
    description: "Click here to access the main INJU.CC website and get started.",
    targetId: "button-1",
  },
  {
    title: "Join Our Community",
    description: "Connect with others through our Discord server.",
    targetId: "button-2",
  },
  {
    title: "Tools & Features",
    description: "Explore various tools and features available to you.",
    targetId: "button-3",
  },
  {
    title: "Stay Updated",
    description: "Keep your session fresh and secure.",
    targetId: "button-4",
  },
  {
    title: "Need Help?",
    description: "Access troubleshooting guides and support.",
    targetId: "button-5",
  },
];

interface TutorialContextType {
  isOpen: boolean;
  startTutorial: () => void;
  closeTutorial: () => void;
}

const TutorialContext = createContext<TutorialContextType | undefined>(undefined);

export function TutorialProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true); // Start tutorial by default
  const [currentStep, setCurrentStep] = useState(0);

  const startTutorial = () => setIsOpen(true);
  const closeTutorial = () => setIsOpen(false);

  return (
    <TutorialContext.Provider value={{ isOpen, startTutorial, closeTutorial }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
          >
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-96 bg-black border-2 border-white rounded-lg p-6 text-white"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button
                onClick={closeTutorial}
                className="absolute top-2 right-2 text-white/60 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold mb-2">
                {tutorialSteps[currentStep].title}
              </h3>
              <p className="text-white/80 mb-4">
                {tutorialSteps[currentStep].description}
              </p>

              <div className="flex justify-between items-center">
                <div className="space-x-1">
                  {tutorialSteps.map((_, index) => (
                    <span
                      key={index}
                      className={`inline-block w-2 h-2 rounded-full ${
                        index === currentStep ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeTutorial}
                  >
                    Skip
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => {
                      if (currentStep === tutorialSteps.length - 1) {
                        closeTutorial();
                      } else {
                        setCurrentStep((prev) => prev + 1);
                      }
                    }}
                  >
                    {currentStep === tutorialSteps.length - 1 ? (
                      "Finish"
                    ) : (
                      <>
                        Next
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </TutorialContext.Provider>
  );
}

export function useTutorial() {
  const context = useContext(TutorialContext);
  if (context === undefined) {
    throw new Error("useTutorial must be used within a TutorialProvider");
  }
  return context;
}
