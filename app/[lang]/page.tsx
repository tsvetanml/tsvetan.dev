import LatestPosts from "../components/latestsPosts";
import Welcome from "../components/welcome";
import { getDictionary, Locale } from "./dictionaries";

export default async function Home({ params }: { params: { lang: string } }) {
  const getDict = await getDictionary(params.lang as Locale);
  const lang = await getDict();

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Welcome lang={lang} />
        <LatestPosts />
      </div>
    </>
  );
}
