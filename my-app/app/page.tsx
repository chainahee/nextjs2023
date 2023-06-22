

export default function Home() {
  return (
    <div className="flex items-center gap-16">
      <div className="flex-1 flex-col flex gap-14">
        <h1 className="lg:text-6xl text-4xl font-bold bg-gradient-to-b from-purple-500 to-pink-500 bg-clip-text text-transparent pb-3">Borrow & Return System.</h1>
        <p className="text-xl font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, reiciendis! Lorem ipsum dolor sit amet consectetur 
        </p>
        <button className="p-4 cursor-pointer rounded-lg bg-pink-500 max-w-max text-white">See function</button>
      </div>
      <div className="">
        <img
          src=
            "https://images.unsplash.com/photo-1685513733856-6770dd79a805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
           alt="img" className="w-[700px] h-auto object-cover"
        />
      </div>
    </div>
  );
}
