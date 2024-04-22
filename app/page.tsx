import Button from "./components/Buttons/Button";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Button>
          <h1 className="text-xl">My Website</h1>
        </Button>
      </main>
    </>
  );
}
