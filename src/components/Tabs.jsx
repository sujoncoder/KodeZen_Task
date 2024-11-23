import { useState } from "react";
import NotFound from "./ui/NotFound";
import ColorsItems from "./ColorsItems";

const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState('Color');

    return (
        <div>
            <div className="py-3 border-b-2 flex flex-wrap gap-4 sm:gap-8">
                {/* COLOR BTN */}
                <button
                    onClick={() => setSelectedTab('Color')}
                    className={`${selectedTab === 'Color'
                        ? 'text-xl font-medium text-slate-700'
                        : 'text-xl font-medium text-slate-400'
                        }`}
                >
                    Color
                </button>

                {/* TYPOGRAPHY BTN */}
                <button
                    onClick={() => setSelectedTab('Typograpy')}
                    className={`${selectedTab === 'Typograpy'
                        ? 'text-xl font-medium text-slate-700'
                        : 'text-xl font-medium text-slate-400'
                        }`}
                >
                    Typography
                </button>

                {/* SHADOW BTN */}
                <button
                    onClick={() => setSelectedTab('Shadow')}
                    className={`${selectedTab === 'Shadow'
                        ? 'text-xl font-medium text-slate-700'
                        : 'text-xl font-medium text-slate-400'
                        }`}
                >
                    Shadow
                </button>
            </div>

            {/* COLORSITEMS COMPONENTS OR NOTFOUND COMPONENTS */}
            {selectedTab === 'Color' ? <ColorsItems /> : <NotFound />}
        </div>
    );
};

export default Tabs;
