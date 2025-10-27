import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="h-20 rounded-sm flex justify-between items-center max-w-[75em] px-10 mx-auto">
      <div className="flex gap-5">
        <div className="font-semibold">Study</div>
      </div>
      <div className="hidden sm:flex gap-5">
        <Button variant="outline">Log in</Button>
        <Button variant="outline" className="bg-stone-800 text-white">
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
