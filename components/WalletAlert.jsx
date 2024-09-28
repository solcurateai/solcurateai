import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { WalletIcon } from "lucide-react";

export default function WalletAlert({
  isOpen = true,
  onClose = () => {},
  onConnect = () => {},
}) {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-black-2 h-60 p-10">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center text-2xl gap-2">
            <WalletIcon className="h-8 w-8 text-[#FF7D20]" />
            Wallet Not Connected
          </AlertDialogTitle>
          <AlertDialogDescription className="text-lg">
            Your wallet is not connected. Please connect your wallet to continue
            using the application.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button
              variant="default"
              onClick={() => {
                document
                  .querySelector(".wallet-adapter-button-trigger")
                  .click();
                onClose();
              }}
            >
              Connect Wallet
            </Button>
          </AlertDialogAction>
          <AlertDialogAction asChild>
            <Button variant="primary" onClick={onClose}>
              Close
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
