

export default function Home() {
  return (
    <div className="flex items-center gap-24">
      <div className="flex-1 flex-col flex gap-16">
        <h1 className="text-6xl font-bold bg-red-50">Borrow and Return System.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis
          repudiandae aspernatur dignissimos laudantium voluptates enim quod ex
          atque, quae consequatur.
        </p>
        <button>See function</button>
      </div>
      <div className="">
        <img
          src=
            "https://images.unsplash.com/photo-1685513733856-6770dd79a805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
           alt="img" className="w-[900px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
