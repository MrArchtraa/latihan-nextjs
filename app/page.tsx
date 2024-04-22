import Button from "./components/Buttons/Button";
import OutlinedButton from "./components/Buttons/OutlinedButton";
import CancelButton from "./components/Buttons/CancelButton";
import OutlinedCancelButton from "./components/Buttons/OutlinedCancelButton";

import Card from "./components/Cards/Card";
import CardHeader from "./components/Cards/CardHeader";
import CardBody from "./components/Cards/CardBody";
import CardFooter from "./components/Cards/CardFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card>
        <CardHeader>
          <h3 className="text-lg font-bold">Simple Card</h3>
        </CardHeader>
        <CardBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a hendrerit ipsum.
            Pellentesque consectetur odio diam, sit amet dapibus turpis dapibus non.
            Curabitur laoreet euismod bibendum.
          </p>
        </CardBody>
        <CardFooter>
          <Button>
            Press me
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
