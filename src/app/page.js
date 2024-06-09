export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <input type="text" placeholder="API Key" className="p-4 border border-gray-300 rounded-lg" />
      <button className="p-4 bg-blue-500 text-white rounded-lg">Login With Google</button>
    </main>
  );
}
