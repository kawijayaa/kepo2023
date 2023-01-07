import Link from "next/link";

export default function Navbar() {
    return (
      <div>
        <div className="shadow-xl fixed flex justify-between top-8 left-10 rounded-full bg-white py-2 px-8 w-[calc(100vw-100px)]">
              <Link href="/"><img src="/logo_simple.png" className="w-12"></img></Link>

            <ul className="flex items-center gap-8 text-xl">
              <li>
                <Link href="/infoptn">Info PTN</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
            </ul>
        </div>
      </div>
    )
}