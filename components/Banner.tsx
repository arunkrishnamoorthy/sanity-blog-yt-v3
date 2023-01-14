export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-5 justify-between font-bold px-16 py-5 mb-10">
      <div>
        <h1 className="text-2xl md:text-7xl">Arun Krishnamoorthy Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            Every Developers
          </span>{" "}
          {""}
          favourite blog in devosphere
        </h2>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        New Product Features | Latest Technologies | The weekly debugging
        nightmare and more!!!
      </p>
    </div>
  );
}
