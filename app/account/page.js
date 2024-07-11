import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest Area",
};

export default async function Page() {
  const session = await auth();
  const firstName = session.user.name.split(" ").at(0);
  return (
    <h2 className="text-2xl font-semibold text-accent-400 mb-7">
      Welcome, {firstName}
    </h2>
  );
}
