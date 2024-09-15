import { useOAuth } from "@/lib/useOAuth"
import { cn } from "@/lib/utils"

function SignUpCTA() {
  const { login, isLoggedIn } = useOAuth({ debug: false })
  if (isLoggedIn) { return null }
  return (
    <div className={cn(
      `print:hidden`,
      `fixed flex flex-col items-center bottom-24 top-28 right-2 md:top-17 md:right-6 z-10`,
    )}>
      <div className="font-bold text-sm pb-2 text-stone-600 bg-stone-50  dark:text-stone-600 dark:bg-stone-50 p-1 rounded-sm">
         <span
          onClick={login}
          className="underline underline-offset-2 cursor-pointer  text-sky-800 dark:text-sky-800 hover:text-sky-700 hover:dark:text-sky-700"
        ></span>!
      </div>
    </div>
  )
}

export default SignUpCTA