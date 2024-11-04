import { signIn } from "@/auth";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
    >
      <button type="submit">
        <span className="max-sm:hidden text-gray-200 hover:text-sky-600">
          Login
        </span>
      </button>
    </form>
  );
}
