import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CrystalPure Cleaning - South Yorkshire</title>
        <meta name="description" content="Professional cleaning services in South Yorkshire" />
      </Head>
      <main className="p-6 text-center">
        <h1 className="text-4xl font-bold text-brand">CrystalPure Cleaning Limited</h1>
        <p className="mt-4 text-lg">Your trusted partner for spotless cleaning in South Yorkshire.</p>
      </main>
    </>
  );
}