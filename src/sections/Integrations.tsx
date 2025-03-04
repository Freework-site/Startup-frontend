import Tag from '../components/tag'
import DashLane from '../assets/images/dashlane.svg'
import InstaBase from '../assets/images/instabase.svg'
import LableBox from '../assets/images/labelbox.svg'
import NeighBor from '../assets/images/neighbor.svg'
import Plaid from '../assets/images/plaid.svg'
import Rippling from '../assets/images/rippling.svg'
import React from "react";
import Card from "@/src/components/card";

const integrations = [
    { name: "Dashline", amount: '10,000', Role: "Founder",icon: DashLane, description: "Figma is a collaborative interface design tool." },
    { name: "Instabase", amount: '1,000', Role: "Co-Founder", icon: InstaBase, description: "Notion is an all-in-one workspace for notes and docs." },
    { name: "Lablebox", amount: '9,000', Role: "Senior Manager",icon: LableBox, description: "Slack is a powerful team communication platform." },
    { name: "Neighbor", amount: '22,000', Role: "Marketer", icon: NeighBor, description: "Relume is a no-code website builder and design system." },
    { name: "Plaid", amount: '35,000',Role: "Investor", icon: Plaid, description: "Framer is a professional website prototyping tool." },
    { name: "Rippling", amount: '2,000',Role: "CEO", icon: Rippling, description: "GitHub is the leading platform for code collaboration." },
];

export type IntegrationType = typeof integrations;
export default function Integrations() {
    return <div>
        <section className="py-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                <Tag>Integrations</Tag>
                <h2 className="text-6xl font-medium mt-6">Partnering with <span className="
                text-lime-400">founders</span></h2>
                <p>Own a piece of the startups and small businesses you believe in—starting at just $100.</p>
                    </div>
                    <div>
                <div  className="h-[400px] lg:h-[800px] overflow-hidden mt-8 lg:mt-0 grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent_0%,white_10%,white_90%,transparent_100%)]">
                    <Card integrations={integrations} />
                    <Card integrations={integrations.slice().reverse()}  reverse className="hidden md:flex"/>
                </div>
                    </div>
                </div>
            </div>
        </section>
    </div>;
}