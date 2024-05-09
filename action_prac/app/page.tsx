import { auth } from "./_action/auth/auth";
import Form from "./_client/form";

export default async function Home() {
  const session = await auth();
  console.log("server", session);
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-96 bg-slate-300">
        <Form session={session} />
      </div>
      <div className="w-96 bg-slate-300 mt-10">
        {/* <form action={signup} className="text-center p-3">
          <input
            className=" w-2/5 px-2 py-3 mr-2 outline-none rounded focus:shadow-sm focus:shadow-blue-200"
            type="text"
            name="name"
            placeholder="name"
          />
          <input
            className="w-2/5 px-2 py-3 outline-none rounded focus:shadow-sm focus:shadow-blue-200"
            type="text"
            name="pw"
            placeholder="pw"
          />
          <button
            className="block mx-auto py-2 px-4 mt-3 bg-purple-300 rounded"
            type="submit"
          >
            SignUp
          </button>
        </form> */}
      </div>
    </main>
  );
}
