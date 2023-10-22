import React from "react";
import Article from "./Article";

const ARTICLES: Parameters<typeof Article>[0][] = [
  {
    id: 1,
    authorID: 1,
    title: "Exciting New Tools For Designers, September 2023",
    description:
      "At the end of another summer, we are all getting ready to knuckle down for some serious work in the fall. But we want to help you work smarter, not harder, so to that end, we'd like to present you with this latest round of exciting new tools for designers and developers.",
    author: "paddi macdonnell",
    imageURL:
      "https://images.pexels.com/photos/18588678/pexels-photo-18588678/free-photo-of-street-sign-in-new-york-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    authorID: 1,
    title: "Elon Musk calls LinkedIn ‘Cringe’—Announces Competitor",
    description:
      "Elon Musk recently announced his intentions to create a direct competitor to LinkedIn. Musk’s grand plan is to make his version more trendy and ‘less cringe’, thereby attracting users who find LinkedIn totally uncool—or something like that.",
    author: "PADDI MACDONNELL",
    imageURL:
      "https://images.pexels.com/photos/15168538/pexels-photo-15168538/free-photo-of-white-swan-swimming-on-a-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    authorID: 1,
    title: "The Future of Web Design Is Content Management",
    description:
      "The future of web design is content management. The future of content management is the future of web design. Sounds like a paradox, right? It’s not. Read on to find out why.",
    author: "simon sterne",
    imageURL:
      "https://images.pexels.com/photos/13488937/pexels-photo-13488937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    authorID: 1,
    title: "Amazon Releases Terrible AI Art for Fallout Movie—Chaos Ensues",
    description:
      "Amazon, one of the world’s largest companies, recently launched a TV poster that many users presume was made with AI art. It’s terrible, it’s weird, and it’s sent the internet into a frenzy. How many strange anomalies can you spot?",
    author: "max walton",
    imageURL:
      "https://images.pexels.com/photos/18696922/pexels-photo-18696922/free-photo-of-geyser.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    authorID: 1,
    title: "Exciting New Tools For Designers, September 2023",
    description:
      "At the end of another summer, we are all getting ready to knuckle down for some serious work in the fall. But we want to help you work smarter, not harder, so to that end, we'd like to present you with this latest round of exciting new tools for designers and developers.",
    author: "paddi macdonnell",
    imageURL:
      "https://images.pexels.com/photos/18454169/pexels-photo-18454169/free-photo-of-a-sign-with-a-bird-on-it-hanging-from-a-pole.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    authorID: 2,
    title: "Elon Musk calls LinkedIn ‘Cringe’—Announces Competitor",
    description:
      "Elon Musk recently announced his intentions to create a direct competitor to LinkedIn. Musk’s grand plan is to make his version more trendy and ‘less cringe’, thereby attracting users who find LinkedIn totally uncool—or something like that.",
    author: "PADDI MACDONNELL",
    imageURL:
      "https://images.pexels.com/photos/1341277/pexels-photo-1341277.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 7,
    authorID: 2,
    title: "The Future of Web Design Is Content Management",
    description:
      "The future of web design is content management. The future of content management is the future of web design. Sounds like a paradox, right? It’s not. Read on to find out why.",
    author: "simon sterne",
    imageURL:
      "https://images.pexels.com/photos/9367323/pexels-photo-9367323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 8,
    authorID: 2,
    title: "Amazon Releases Terrible AI Art for Fallout Movie—Chaos Ensues",
    description:
      "Amazon, one of the world’s largest companies, recently launched a TV poster that many users presume was made with AI art. It’s terrible, it’s weird, and it’s sent the internet into a frenzy. How many strange anomalies can you spot?",
    author: "max walton",
    imageURL:
      "https://images.pexels.com/photos/18749704/pexels-photo-18749704/free-photo-of-a-small-cabin-in-the-snow-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const ArticleList = () => {
  return (
    <React.Fragment>
      <section className="grid grid-cols-1 md:grid-cols-4 gap-5 h-fit first:mt-3 last:mb-3">
        {ARTICLES.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </React.Fragment>
  );
};

export default ArticleList;
