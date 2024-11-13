"use client"
import Tweet from "./tweets";
const tweets = [
    {
        avatar:
          "https://pbs.twimg.com/profile_images/1653250498127089665/x5RJbLq5_400x400.jpg",
        name: "きょん/kyong",
        id: "kyongshiii06",
        post: "https://x.com/kyongshiii06/status/1753030333128495470?s=20",
        content:
          "I tried Codame, and it was amazing. The portal made it easy to find relevant job opportunities in my field, and I landed an interview within days!",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1741543460115812352/8x4aAI9k_400x400.jpg",
        name: "Shivam Sourav Jha",
        id: "ShivamSouravJha",
        post: "https://x.com/ShivamSouravJha/status/1747517726749286713?s=20",
        content:
          "Codame is incredible! It was so simple to set up my profile and start applying for jobs. I love how easy it is to track my applications and get feedback.",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/837573171427487744/IGQLsM55_400x400.jpg",
        name: "やまもと@視力2.0",
        id: "yamamoto_febc",
        post: "https://x.com/yamamoto_febc/status/1755802346188390531?s=20",
        content:
          "Codame helped me find opportunities that matched my skills perfectly. The suggestions were spot-on, and I’ve never felt more confident in my job search!",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1422864637532332033/mC1Nx0vj_400x400.jpg",
        name: "matsuu@充電期間",
        id: "matsuu",
        post: "https://x.com/matsuu/status/1747448928575099236?s=20",
        content:
          "Thanks to Codame, I got my current job! The recommendations were highly relevant, and I loved the straightforward application process.",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1604797450124144640/6G7KytX8_400x400.jpg",
        name: "あんどーぼんばー",
        id: "AndooBomber",
        post: "https://x.com/AndooBomber/status/1747663021747691808?s=20",
        content:
          "Codame made job searching so much simpler!",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1569793803313201154/Lso5fu1j_400x400.jpg",
        name: "Jay Vasant",
        id: "__alter123",
        post: "https://x.com/__alter123/status/1731985031521014236?s=20",
        content:
          "Maintaining a job search can be tough, but Codame made it easy. The platform has tons of resources, and I found the perfect job match in no time!",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1213737438830452736/5_5zXtXN_400x400.jpg",
        name: "mugi",
        id: "mugi_uno",
        post: "https://x.com/mugi_uno/status/1745726154924003502?s=20",
        content:
          "Codame helped me connect with companies that value my skills. It’s not just a job portal; it’s a career partner.",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1653250498127089665/x5RJbLq5_400x400.jpg",
        name: "きょん/kyong",
        id: "kyongshiii06",
        post: "https://x.com/kyongshiii06/status/1746532217336250821?s=20",
        content:
          "With Codame, finding jobs is so easy. The platform is user-friendly, and I landed a job offer within a few weeks of applying.",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1482259385959464960/1pQMXwj7_400x400.jpg",
        name: "yadon",
        id: "Seipann11",
        post: "https://x.com/Seipann11/status/1755989987039064103?s=20",
        content:
          "Codame has been a game-changer for my job search. ",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1763255658777120770/7SsuKwlS_400x400.jpg",
        name: "Akash Singh",
        id: "Kind_Of_Akash",
        post: "https://x.com/Kind_Of_Akash/status/1754207010470736165?s=20",
        content:
          "My experience with Codame has been wonderful! ",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1712175220176355329/sLXbk_PZ_400x400.jpg",
        name: "TadasG",
        id: "JustADude404",
        post: "https://x.com/JustADude404/status/1746888711491424681?s=20",
        content:
          "Codame is amazing! It connects you with real job opportunities. I found several positions that were exactly what I was looking for.",
      },
      {
        avatar:
          "https://pbs.twimg.com/profile_images/1701251291861712897/PiTZ0UO7_400x400.jpg",
        name: "Junichi.Y🐼@休職中",
        id: "ymnk_8752",
        post: "https://x.com/ymnk_8752/status/1745458928698450057?s=20",
        content:
          "Codame is awesome! It offers so much value, especially for anyone new to the job market. I found roles I hadn’t considered before.",
      },
    
];


const TwitterTestimonials = () => {

  return (
    <>
      <div className="relative mt-20 mb-20">
        <div className=" relative mt-2 mb-8 z-10 px-4 sm:px-6 max-w-6xl mx-auto flex flex-col justify-center">
          <h3 className=" text-center h2 px-10 text-secondary-300">
            We love when users talk about Codame..
          </h3>
          {/* for mobile view */}
          <div className="space-y-5 mt-10 sm:hidden block">
            {tweets?.slice(0, 6).map((tweet) => (
                <Tweet
                key={tweet.id} // Use tweet.id as the unique key
                avatar={tweet.avatar}
                name={tweet.name}
                id={tweet.id}
                post={tweet.post}
                content={tweet.content}
                />
            ))}
            </div>

          {/* sizes above sm(640px) */}
          <div className="sm:columns-2 lg:columns-3 sm:gap-5 space-y-5 mt-10 hidden sm:block">
            {tweets?.map((tweet, index) => (
                <Tweet
                key={`${tweet.id}-${index}`} // Combine id and index to ensure uniqueness
                avatar={tweet.avatar}
                name={tweet.name}
                id={tweet.id}
                post={tweet.post}
                content={tweet.content}
                />
            ))}
            </div>

                    </div>
                </div>
    </>
  );
};

export default TwitterTestimonials;
