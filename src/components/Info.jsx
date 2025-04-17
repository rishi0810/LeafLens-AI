import React from "react";

const Info = () => {
  return (
    <>
      <div>
        <div className="max-w-6xl px-4 xl:px-0 py-10 lg:py-20 mx-auto font-geist">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="font-semibold text-2xl md:text-4xl md:leading-tight">
              The Approach
            </h2>
            <p className="mt-1 text-neutral-700">
              Explore the in-depth technicalities of LeafLens - from simple
              image to a multi-dimension backend combining two AI endpoints
              providing information about potential diseases and general trivia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
            <div>
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1497250681960-ef046c08a56e"
                alt="Features Image"
              />
            </div>

            <div>
              <div className="mb-4">
                <h3 className="text-md font-bold uppercase ">Levels</h3>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-700">
                    <span className="mr-1 font-bold">
                     Image Upload:
                    </span>
                    Identification of target image and subsequent upload. 
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm lg:text-base text-neutral-700">
                    <span className="mr-1 font-bold">
                      HF Inference API call:
                    </span>
                    A MULTER backend receives the image and converts it into binary JSON data from a buffer after which AI is called from HF infererence API to identify top 5 diseases possible ranked according to score.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full">
                      3
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-700">
                    <span className="mr-1 font-bold">
                      Gemini API call:
                    </span>
                    The top result from the HF inference API is sent to Gemini as a prompt and information is fetched in the backend.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden">

                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex shrink-0 justify-center items-center size-8 border border-neutral-800 font-semibold text-xs uppercase rounded-full">
                      4
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8 sm:pb-12">
                  <p className="text-sm md:text-base text-neutral-700">
                    <span className="mr-1 font-bold">
                     Frontend Updation:
                    </span>
                    The fetched data from the backend is received and displayed on the frontend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
