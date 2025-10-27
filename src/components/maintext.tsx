import { Button } from "@/components/ui/button";

const MainText = () => {
  return (
    <div>
      <div className="pt-25 h-150 bg-[#FAFCFC]">
        <div className="font-bold flex justify-center text-5xl max-w-[75em] px-10">
          Notes and Flashcards that Learn with You
        </div>
        <div className="flex justify-center mt-7 text-xl">
          Lorem ipsum dolor sit amet consectetur.
        </div>
        <div>
          <Button
            variant="outline"
            className="bg-[#015d67] text-white rounded-2xl h-10 flex mx-auto mt-5"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="bg-[#015d67] h-150"></div>
    </div>
  );
};

export default MainText;
