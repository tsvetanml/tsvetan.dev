import LatestPosts from "../components/latestsPosts";
import Welcome from "../components/welcome";
import { getDictionary } from "./dictionaries";



export default async function Home({ params, }: { params: Promise<{ lang: 'es' | 'en' }> }) {
  const lang = (await params).lang
  const dict = await getDictionary(lang)

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Welcome dict={dict} />
        <LatestPosts />
      </div>
    </>
  );
}
