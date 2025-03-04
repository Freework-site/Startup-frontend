import Image from "next/image";
import React from "react";
import {type IntegrationType} from '../sections/Integrations'
import {twMerge} from "tailwind-merge";
export default function Card(props: {integrations: IntegrationType;
className?: string;})
{
    const {integrations, className} = props;
    return(
        <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
            {integrations.map((integration) => (
                <div key={integration.name} className="
                        bg-neutral-100 border border-black/10 rounded-3xl p-6">
                    <div className="flex justify-center">
                        <Image className="size-24" src={integration.icon} alt={`$integration.name} icon` } width="20" height="20"/>
                    </div>
                    <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
                    <p className="text-center text-black/50 mt-2">{integration.description}</p>
                    <div className="h-px bg-gray-200 mb-4"></div>
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="text-xs text-gray-500 font-medium">INVESTED</p>
                            <p className="text-sm font-bold text-gray-800">${integration.amount.toLocaleString()}</p>
                        </div>

                        <div className="bg-indigo-50 px-3 py-1 rounded-full">
                            <p className="text-xs font-medium text-indigo-600">{integration.Role}</p>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
}