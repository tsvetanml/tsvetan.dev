import LatestPosts from "./components/latestsPosts";
import Welcome from "./components/welcome";
export default function Home() {

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Welcome />
        <LatestPosts />
      </div>
    </>
  );
}
