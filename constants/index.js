import { useSelector } from "react-redux";

export const HOST = "https://solcurate-api.onrender.com/api/v1";
export const geminiUrl =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyB7tOSEZvM3Vq253Ef4kCuQXcSjeifaxKs";
export const shortenAddress = (address) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

export const cardList = [
  {
    title: "Twitter (X) Post Generation",
    subtitle:
      "Compose impactful Twitter posts that cut through the noise and drive meaningful interactions.",
    imageUrl: "/icons/3dtwitter.svg",
    route: "/twitter",
  },
  {
    title: "Instagram Caption Generation",
    subtitle:
      "Create captivating Instagram captions that resonate with your audience and boost engagement.",
    imageUrl: "/icons/3dinstagram.svg",
    route: "/instagram",
  },
  {
    title: "Facebook Content Generation",
    subtitle:
      "Generate compelling Facebook posts that spark conversations and drive community engagement.",
    imageUrl: "/icons/3dfacebook.svg",
    route: "/facebook",
  },
  {
    title: "LinkedIn Post Generation",
    subtitle:
      "Develop professional LinkedIn posts that establish authority and connect with industry leaders.",
    imageUrl: "/icons/linkedin.svg",
    route: "/linkedin",
  },
  {
    title: "TikTok Scripting Generation",
    subtitle:
      "Craft viral TikTok scripts that capture attention and keep viewers hooked from start to finish",
    imageUrl: "/icons/3dtiktok.svg",
    route: "/tiktok",
  },
  {
    title: "YouTube Scripting Generation",
    subtitle:
      "Write engaging YouTube scripts that keep viewers watching and coming back for more.h",
    imageUrl: "/icons/youtube.svg",
    route: "/youtube",
  },
];

export const websiteLinks = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Features",
    route: "#features",
  },
  {
    label: "How it works",
    route: "#howitworks",
  },
];

export const sidebarLinks = [
  {
    label: "Dashboard",
    route: "",
    imgUrl: "/icons/home.svg",
    status: "active",
  },
  // {
  //     label: 'Search',
  //     route: '/search',
  //     imgUrl: '/icons/search.svg',
  //     status: 'active',
  // },
  {
    label: "Content Creation",
    route: "/content",
    imgUrl: "/icons/ai-book.svg",
    status: "active",
  },
  {
    label: "Solana Community",
    route: "/solana-community",
    imgUrl: "/icons/solana.svg",
    status: "active",
  },
  {
    label: "Earning Points",
    route: "/earning-points",
    imgUrl: "/icons/coin.svg",
    status: "active",
  },
  // {
  //     label: 'AI Editor',
  //     route: '/ai-editor',
  //     imgUrl: '/icons/input-ai.svg',
  //     status: 'inactive',
  // },
  // {
  //     label: 'Audience Interaction',
  //     route: '/audience-interaction',
  //     imgUrl: '/icons/touch.svg',
  //     status: 'inactive',
  // },
  // {
  //     label: 'Brand Tailoring',
  //     route: '/brand-tailoring',
  //     imgUrl: '/icons/settings-2.svg',
  //     status: 'inactive',
  // },
  // {
  //     label: 'Strategy Crafting',
  //     route: '/strategy',
  //     imgUrl: '/icons/create.svg',
  //     status: 'inactive',
  // },
  // {
  //     label: 'Platform Setup',
  //     route: '/platform',
  //     imgUrl: '/icons/platform.svg',
  //     status: 'inactive',
  // },
  // {
  //     label: 'Media Creation',
  //     route: '/media',
  //     imgUrl: '/icons/photo-ai.svg',
  //     status: 'inactive',
  // },
  {
    label: "Settings",
    route: "/settings",
    imgUrl: "/icons/settings.svg",
    status: "active",
  },
];

export const settingLinks = [
  {
    label: "Edit Profile",
    route: "",
    imgUrl: "/icons/user.svg",
    status: "active",
  },
  {
    label: "Password",
    route: "/password",
    imgUrl: "/icons/keyhole.svg",
    status: "active",
  },
  {
    label: "Notifications",
    route: "/notifications",
    imgUrl: "/icons/bell.svg",
    status: "active",
  },
  {
    label: "Wallets",
    route: "/wallets",
    imgUrl: "/icons/container.svg",
    status: "active",
  },
  {
    label: "Appearance",
    route: "/appearance",
    imgUrl: "/icons/sun.svg",
    status: "active",
  },
];

export const deductGenerationCount = async () => {
  const { accessToken } = useSelector((state) => state.user);
  try {
    const response = await fetch(
      `${HOST}/User/Subscribe/DeductGenerationCount`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({}),
      }
    );

    const data = await response.json();

    let count = parseInt(localStorage.getItem("freeTrialCount") || "0");
    if (count > 0) {
      count--;
      localStorage.setItem("freeTrialCount", count.toString());
    }
    console.log(count);
    // Return the updated count
    return count;
  } catch (error) {
    console.log("Error deducting count", error);
    // In case of an error, return the current count without deducting
    return parseInt(localStorage.getItem("freeTrialCount") || "0");
  }
};
