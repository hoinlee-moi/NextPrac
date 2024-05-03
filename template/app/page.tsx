import ButtonTestFiled from "@/components/ButtonTestFiled";
import ToastTestFiled from "@/components/ToastTestFiled";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ButtonTestFiled />
      <hr className="mt-3 border-2 border-slate-500 border-solid" />
      <ToastTestFiled />
    </main>
  );
}
