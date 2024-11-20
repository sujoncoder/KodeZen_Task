import { useState } from "react";
import NotFound from "./ui/NotFound";
import ColorsItems from "./ColorsItems";

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState('Color');


    return (
        <div>
            <div className='py-3 space-x-8 border-b-2'>
                <button
                    onClick={() => setSelectedTab('Color')}
                    className={`${selectedTab === 'Color' ? 'text-xl font-medium text-slate-700' : 'text-xl font-medium text-slate-400'}`}
                >
                    Color
                </button>

                <button
                    onClick={() => setSelectedTab('Typograpy')}
                    className={`${selectedTab === 'Typograpy' ? 'text-xl font-medium text-slate-700' : 'text-xl font-medium text-slate-400'}`}
                >
                    Typograpy
                </button>

                <button
                    onClick={() => setSelectedTab('Shadow')}
                    className={`${selectedTab === 'Shadow' ? 'text-xl font-medium text-slate-700' : 'text-xl font-medium text-slate-400'}`}
                >
                    Shadow
                </button>
            </div>

            {selectedTab === "Color" ? <ColorsItems /> : <NotFound />}
        </div >
    )
}

export default Tabs