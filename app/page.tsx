import Header from "./_coponents/Header";

import LoginForm from "./_coponents/LoginForm";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col ">
      <Header />
      <div className="h-screen flex flex-1 items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
