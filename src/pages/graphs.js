import React from 'react';
import axios from "axios";
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import('@/components/bar-chart'), {
    ssr: false
})

const AreaChart = dynamic(() => import('@/components/area-chart'), {
    ssr: false
})

const Graphs = ({data}) => {
    const {feeds} = data;

    return(
        <div className='max-w-7xl mx-auto my-12'>
            <div className="mt-2 mb-6 md:flex md:items-center md:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Graphs
                    </h2>
                </div>
            </div>

            <div className='max-w-3xl mx-auto mt-12'>
                <h2 className="text-2xl mb-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Bar Chart
                </h2>
                <BarChart feed={feeds}/>
                <div className='mt-6'/>
                <h2 className="text-2xl mb-4 font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                    Area Chart
                </h2>
                <AreaChart feed={feeds}/>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const {data} = await axios.get(`https://api.thingspeak.com/channels/1992567/feeds.json?api_key=${process.env.THNGSPEAK_KEY}`);

    return {
        props: {
            data
        },
        revalidate: 60
    }
}

export default Graphs
