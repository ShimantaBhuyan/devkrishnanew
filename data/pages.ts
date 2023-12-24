export const pages = {
  work: {
    id: 0,
    to: "/space/work",
    img: "/assets/work-image.png",
    superImg: "https://ik.imagekit.io/colorContrast/devkrishna-super-images/work-image_pznSct7btH.png",
    placeholder: "/assets/blurred/work-image.png",
    title: "Work",
    description:
      "I love building and shipping projects. Here you can find more about my 4+ years of professional work and my personal projects.",
    //   date: "Published on May 19, 2018",
    width: "512",
    height: "768",
  },
  skills: {
    id: 1,
    to: "/space/skills",
    img: "/assets/think-image.png",
    superImg: "https://ik.imagekit.io/colorContrast/devkrishna-super-images/think-image_dHm1PHudO.png",
    placeholder: "/assets/blurred/think-image.png",
    title: "Skills",
    description: "These are the skills I have developed over the years.",
    //   date: "Published on May 19, 2018",
    width: "512",
    height: "768",
  },
  random: {
    id: 2,
    to: "/space/random",
    img: "/assets/chill-image.png",
    superImg: "https://ik.imagekit.io/colorContrast/devkrishna-super-images/chill-image_0gew3YuAH4.png",
    placeholder: "/assets/blurred/chill-image.png",
    title: "#Random",
    description:
      "My head is a bag full of random thoughts, ideas and experiences. Dig deep into the rabbit hole that my mind is!",
    //   date: "Published on May 19, 2018",
    width: "512",
    height: "768",
  },
  myspace: {
    id: 3,
    to: "/space/myspace",
    img: "/assets/base-image.png",
    superImg: "https://ik.imagekit.io/colorContrast/devkrishna-super-images/base-image_2i3gTHgBS.png",
    placeholder: "/assets/blurred/base-image.png",
    title: "About me",
    description:
      "I am Shimanta and this is my space in the World Wide Web. It is a place where I share my knowledge and experiences. I love to learn new things and share them with others.",
    //   date: "Published on May 19, 2018",
    width: "512",
    height: "768",
  },
  "for-chronicle": {
    id: 4,
    to: "/space/for-chronicle",
    img: "/assets/chronicle-image.png",
    superImg: "https://ik.imagekit.io/colorContrast/devkrishna-super-images/chronicle-image_IsKeNiEUw.png",
    placeholder: "/assets/blurred/chronicle-image.png",
    title: "For Chronicle",
    description:
      "I found out about Chronicle on Twitter and upon checking out their site, became absolutely intrigued by the product and the company. This is my way to get their attention and hopefully a role to build the product!",
    //   date: "Published on May 19, 2018",
    width: "512",
    height: "768",
  },
  contact: {
    id: 5,
    to: "/space/contact",
    img: "/assets/contact-image.png",
    superImg: "https://ik.imagekit.io/colorContrast/devkrishna-super-images/contact-image_CkCSY0m80V.png",
    placeholder: "/assets/blurred/contact-image.png",
    title: "Contact me",
    description: "I am active on these social media platforms. Contact me for brainstorming, collab, or anything else.",
    meta: {
      socials: {
        twitter: "https://twitter.com/AllDevThings",
        github: "https://github.com/ShimantaBhuyan",
        email: "mailto:shimantakb@gmail.com",
        linkedin: "https://www.linkedin.com/in/shimantabhuyan",
        pinterest: "https://in.pinterest.com/shimantabhuyan/",
      },
    },
    //   date: "Published on May 19, 2018",
    width: "512",
    height: "768",
  },
};

export type PAGE_TYPE = {
  id: number;
  to: string;
  img: string;
  superImg: string;
  placeholder: string;
  title: string;
  description: string;
  link?: string;
  author?: string;
  location?: string;
  meta?: any;
  date?: string;
  width: string;
  height: string;
  hidden?: boolean;
};
