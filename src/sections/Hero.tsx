import Button from "@/src/components/button";
import designExample1Image from '../assets/images/design-example-1.png'
import designExample2Image from '../assets/images/design-example-2.png'
import designExample3Image from '../assets/images/design-example-3.png'
import SearchForm from '../components/SearchForm'
import Image from "next/image";
export default function Hero() {
    return <section className="py-24 flex flex-col items-center">
        <div className="container max-w-screen-xl mx-auto px-4 relative">
            <div className="flex justify-center">
                <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                    🔥 100K Investment raise in 2024
                </div>
            </div>
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-6xl font-medium mt-6 uppercase">
                    Turn Ideas into Reality, Connect with Investors
                </h1>
                <p className="text-xl text-black/50 mt-8">
                    Subscribe to get new investment notifications via email
                </p>
            </div>
            {/*<div className="max-w-lg w-full mx-auto">*/}
            {/*    <SearchForm />*/}
            {/*</div>*/}

            <form className="flex border border-black/15 rounded-full p-2 mt-8 max-w-lg w-full mx-auto">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-transparent px-4 no-underline outline-0 flex-1"
                />
                <Button variant={"primary"} type="submit" className="whitespace-nowrap h-2" size='sm'>
                    Sign Up
                </Button>
            </form>
        </div>

    </section>

}
