import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CrownIcon, ZapIcon, RocketIcon, StarIcon } from "lucide-react";
import Confetti from "react-confetti";

export default function ProUpgradeAlert({ isOpen = true, onClose = () => {} }) {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateWindowSize();
    window.addEventListener("resize", updateWindowSize);
    return () => window.removeEventListener("resize", updateWindowSize);
  }, []);

  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="max-w-md bg-black-2 p-10">
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
        <AlertDialogHeader>
          <AlertDialogTitle className="text-2xl font-bold text-center mb-2">
            <CrownIcon className="inline-block w-8 h-8 text-yellow-400 mr-2" />
            Welcome to Pro!
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center text-lg font-medium mb-4">
            Congratulations! You've unlocked premium features.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="space-y-4">
          <div className="flex items-center space-x-3 text-green-400">
            <ZapIcon className="w-5 h-5" />
            <span>Lightning-fast performance</span>
          </div>
          <div className="flex items-center space-x-3 text-blue-400">
            <RocketIcon className="w-5 h-5" />
            <span>Advanced analytics tools</span>
          </div>
          <div className="flex items-center space-x-3 text-purple-400">
            <StarIcon className="w-5 h-5" />
            <span>Exclusive pro-only features</span>
          </div>
        </div>
        <AlertDialogFooter className="mt-6">
          <Button
            onClick={onClose}
            className="w-full  main-gradient text-white font-semibold"
          >
            Start Exploring Pro
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
