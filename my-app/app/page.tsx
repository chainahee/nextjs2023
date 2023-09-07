import CardDevice from "@/components/dashboard/CardDevice";
import CardEmployee from "@/components/dashboard/CardEmployee";

export default function Home() {
  return (
    <div className="items-center gap-16">
      <div className="flex-1 flex-col flex gap-14">
        <h1 className="lg:text-5xl text-4xl font-bold bg-gradient-to-b from-indigo-500 to-indigo-300 bg-clip-text text-transparent pb-3">
          Borrow & Return System.
        </h1>
      </div>
      <div className="flex mt-5 w-full border rounded-md shadow-md overflow-hidden">
        <CardEmployee />
        <CardDevice />
      </div>
    </div>
  );
}
