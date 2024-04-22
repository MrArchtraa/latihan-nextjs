import Button from "./components/Buttons/Button";
import OutlinedButton from "./components/Buttons/OutlinedButton";
import CancelButton from "./components/Buttons/CancelButton";
import OutlinedCancelButton from "./components/Buttons/OutlinedCancelButton";
import Card from "./components/Cards/Card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button>
        Press me
      </Button>
      <OutlinedButton>
        Press me
      </OutlinedButton>
      <CancelButton>
        Press me
      </CancelButton>
      <OutlinedCancelButton>
        Press me
      </OutlinedCancelButton>
      <Card>
        Hello
      </Card>
    </main>
  );
}
