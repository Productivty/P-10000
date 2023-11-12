import React from "react";

import { SocialIcon } from "react-social-icons";

function SayHello() {
  return (
    <div className=" md:mx-64 lg:mx-16" id="contact">
      <h1 className="underline text-center text-2xl font-sans my-8 md:text-center md:my-16 md:text-5xl lg:text-3xl">
        Get in Touch
      </h1>
      <p className="mx-4 font-serif text-xl px-6 md:px-32 md:text-4xl md:my- md:py-8 lg:text-2xl">
        Are you looking for a fast-performing and user-friendly website to
        represent your product or business? or looking for any kind of
        consultation? or want to ask questions? or have some advice for me or
        just want to say "Hi 👋" in any case feel free to Let me know. I will do
        my best to respond back. 😊 The quickest way to reach out to me is via
        an email.
      </p>

      <div className="text-center text-xl font-mono mt-8 md:flex md:flex-col md:item-center">
        <a href="mailto:pradeepthapa236@gmail.com" className="">
          PRADEEPTHAPA236@GMAIL.COM
        </a>

        <div className="text-xl my-8 md:flex md:mx-10 justify-center">
          <SocialIcon
            url="https://twitter.com/Pradeep2368"
            className="mx-4"
            target="_blank"
            data-testid="twitter-icon"
          />
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100080261915660"
            className="mx-4"
            target="_blank"
            data-testid="facebook-icon"
          />
          <SocialIcon
            url="https://github.com/Productivty?tab=repositories"
            className="mx-4"
            target="_blank"
            data-testid="github-icon"
          />
          <SocialIcon
            url="https://www.instagram.com/cool_pr9/"
            className="mx-4"
            target="_blank"
            data-testid="instagram-icon"
          />
        </div>
      </div>
    </div>
  );
}

export default SayHello;
