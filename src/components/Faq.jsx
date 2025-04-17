import React from "react";
import { Link } from "react-router-dom";
import qsvg from "../assets/qsvg.svg";
const Faq = () => {
  return (
    <>
      <div className="max-w-6xl px-4 py-10 sm:px-6 lg:px-5 lg:py-14 mx-auto font-geist">
        <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
          <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
            You might be wondering...
          </h2>
        </div>

        <div className="max-w-2xl mx-auto divide-y divide-gray-200">
          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <img src={qsvg} className="shrink-0 size-8" alt="q-mark" />

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  Which formats are supported?
                </h3>
                <p className="mt-1 text-gray-500">
                  All of them, including PNG, JPEG, WEBP etc. But please
                  don't upload PDF or other non-image format files, it is quite
                  painful to add error handling in backend :(
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <img src={qsvg} className="shrink-0 size-8" alt="q-mark" />

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  How does the AI work?
                </h3>
                <p className="mt-1 text-gray-500">
                  LeafLens AI is based on a MobileNet V2 model trained on an Imagenet-1k
                  dataset hosted on{" "}
                  <Link to={"https://huggingface.co/"} className="font-semibold underline text-black">HuggingFace</Link>. It
                  can identify all types of plants and diseases and accurately
                  provide top five possible diseases a crop could have. Credit
                  goes to brilliant people at{" "}
                  <Link to={"https://huggingface.co/"} className="font-semibold underline text-black">HuggingFace</Link> namely{" "}
                  <span className="font-semibold">Mark Sandler</span>,{" "}
                  <span className="font-semibold">Andrew Howard</span>,{" "}
                  <span className="font-semibold">Menglong Zhu</span>,
                  <span className="font-semibold">Andrey Zhmoginov</span> and{" "}
                  <span className="font-semibold">Liang-Chieh Chen</span>.
                </p>
              </div>
            </div>
          </div>

          <div className="py-8 first:pt-0 last:pb-0">
            <div className="flex gap-x-5">
              <img src={qsvg} className="shrink-0 size-8" alt="q-mark" />

              <div className="grow">
                <h3 className="md:text-lg font-semibold text-gray-800">
                  How do you fetch information on the specific disease?
                </h3>
                <p className="mt-1 text-gray-500">
                  The highest scoring disease by the AI is sent as a prompt to Gemini, where the response is provided. I wish Google had procedural transfer of tokens, making it look like an LLM... :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
