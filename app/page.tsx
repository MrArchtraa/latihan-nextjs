import {
  Button,
  OutlinedButton,
  GhostButton,
  SoftButton
} from "./components/Buttons/Button";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button>
          Press me
        </Button>
        <OutlinedButton>
          Press me
        </OutlinedButton>
        <GhostButton>
          Press me
        </GhostButton>
        <SoftButton>
          Press me
        </SoftButton>
      </main>
    </>
  );
}
