import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { FaClock, FaFolderOpen } from "react-icons/fa";

export enum NavigationItemType {
  ACTION = 'action',
  DIVIDER = 'divider',
  LINK = 'link',
}

const actions: any = [
  {
    type: NavigationItemType.LINK,
    href: '/timeline',
    icon: <FaClock className="mb-1 mr-2" />,
    text: 'Timeline',
  },
  {
    type: NavigationItemType.LINK,
    href: '/projects',
    icon: <FaFolderOpen className="mb-1 mr-2" />,
    text: 'Projects',
  },
  {
    type: NavigationItemType.LINK,
    external: true,
    href: 'https://github.com/tsvetanml',
    icon: <AiOutlineGithub className="mb-1 mr-2" />,
    text: 'GitHub',
  },
];
export default function Home() {


  const description = `I am a full-stack developer specializing in web and mobile applications.`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12">

      <div className="justify-center flex items-center">
        <img src="/memoji.png" className="w-52 h-52 rounded-full" />
      </div>
      <div className="max-w-lg sm:max-w-xl md:sm:max-w-3xl lg:sm:max-w-4xl w-full space-y-8 text-center">


        <h1 className="text-blue-700 text-5xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight font-extrabold">Hey
          <span className="inline-block origin-70">👋</span>
          I&apos;m Tsvetan, <br className="hidden sm:block" />a{' '}
          <div className="inline-flex px-3 lg:px-5 py-2 md:pb-4 bg-blue-200 bg-opacity-15 text-blue-700 text-opacity-70 rounded-lg">
            developer.</div>
        </h1>
        <p className="max-w-xs mt-4 md:mt-8 mx-auto text-base text-gray-600 sm:text-lg md:text-xl md:max-w-3xl">{description}</p>

        <div key="links" className="flex flex-col sm:flex-row items-center justify-center my-8 sm:space-x-4 space-y-4 sm:space-y-0 w-full mt-8 sm:mt-4">
          {actions.map((action: any, index: number) => {
            if (action.type === NavigationItemType.LINK) {
              return (
                <>

                  <Link className="inline-flex items-center bg-blue-600 bg-opacity-80 text-white font-semibold justify-center backdrop-filter backdrop-blur-sm rounded-lg cursor-pointer px-8 py-2 border-2 border-blue-900 border-opacity-60" href={action.href}>
                    {action.icon}
                    {action.text}
                  </Link>

                </>
              )
            }
          })}
        </div>
      </div>
    </div>


  );
}
