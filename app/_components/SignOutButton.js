import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex items-center w-full gap-4 px-5 py-3 font-semibold transition-colors hover:bg-primary-900 hover:text-primary-100 text-primary-200">
        <ArrowRightStartOnRectangleIcon className="w-5 h-5 text-primary-600" />
        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
