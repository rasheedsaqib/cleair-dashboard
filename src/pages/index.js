import axios from "axios";
import Link from "next/link";
import Image from "next/image";

const Home = ({data}) => {
    const {channel} = data;

    return (
        <div className="isolate bg-white">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
                <svg
                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                    viewBox="0 0 1155 678"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                        fillOpacity=".3"
                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                    />
                    <defs>
                        <linearGradient
                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                            x1="1155.49"
                            x2="-78.208"
                            y1=".177"
                            y2="474.645"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#9089FC"/>
                            <stop offset={1} stopColor="#FF80B5"/>
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <main>
                <div className="relative px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
                        <div>
                            <div>
                                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                                    {channel.name}
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                                    {channel.description}
                                </p>
                                <div className="mt-8 flex gap-x-4 sm:justify-center">
                                    <Link
                                        href="/graphs"
                                        className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                                    >
                                        View Graphs
                                    </Link>
                                    <a
                                        href="https://github.com/sharryy/cleair"
                                        target="_blank"
                                        className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                                    >
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                            <div
                                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                                <svg
                                    className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                                    viewBox="0 0 1155 678"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                        fillOpacity=".3"
                                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                            x1="1155.49"
                                            x2="-78.208"
                                            y1=".177"
                                            y2="474.645"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#9089FC"/>
                                            <stop offset={1} stopColor="#FF80B5"/>
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="relative overflow-hidden py-16">
                <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
                    <div className="relative mx-auto h-full max-w-prose text-lg" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full translate-x-32 transform"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"/>
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full -translate-y-1/2 -translate-x-32 transform"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full translate-x-32 transform"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200"
                                          fill="currentColor"/>
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"/>
                        </svg>
                    </div>
                </div>
                <div className="relative px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-prose text-lg">
                        <h1>
                            <span className="block text-center text-lg font-semibold text-indigo-600">Introducing</span>
                            <span
                                className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                              Arduino Smoke Detector System
                            </span>
                        </h1>
                    </div>
                    <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
                        <div>
                            <p>This project
                            uses an ESP32 microcontroller to build a smoke detector system that can detect the presence
                            of smoke and trigger an alarm. Additionally, it can send data to thingspeak where we can
                            visualize the change in data.</p>
                            <h3 id="hardware-components">Hardware Components</h3>
                            <ol start="1">
                                <li>ESP32 (e.g. ESP32-wroom-32)</li>
                                <li>Smoke sensor (e.g. MQ-2 smoke sensor)</li>
                                <li>Buzzer or speaker for the alarm</li>
                            </ol>
                            <h3 id="usage">Usage</h3>
                            <ol start="1">
                                <li>Connect the hardware components according to circuit diagram</li>
                                <li>Upload the code to the microcontroller board.</li>
                                <li>The smoke detector system is now operational. If the smoke sensor detects smoke, the
                                    alarm will be triggered.
                                </li>
                            </ol>
                            <h3 id="how-to-setup-code">How to setup Code?</h3><p>Replace
                                the <code>CHANNEL_NUMBER</code> and <code>API_KEY</code> variables in the code by your
                                actual keys from <a href="https://thingspeak.com/">Thingspeak</a>. Also replace network
                                ssid and password with actual values.</p><h3 id="tinkercad-implementation">TinkerCad
                                Implementation</h3><p>The circuit deigned in TinkerCad is different from the hardware
                                circuit. Esp32 is used in hardware but it is not available in Tinkercad, so circuit on
                                TinkerCad is implemented using Arduino UNO. Moreover, we have used an LCD to display the
                                data being sensed by the sensor. There is one limitation of Tinkercad that we can't use
                                WIFI Module there because of security reasons. Hence we used an LCD to display data.</p>
                            <h3 id="circuit-diagram">Circuit Diagram</h3><p>
                                <Image alt="Circuit Diagram" width={800} height={600}
                                     src="https://raw.githubusercontent.com/sharryy/cleair/main/assets/circuit-diagram.jpeg"/>
                            </p>
                            <h3 id="customization">Customization</h3><p>You can customize the threshold for triggering
                                the alarm by modifying the value in the if statement in the loop function. For example,
                                to increase the sensitivity of the smoke detector, you can lower the threshold
                                value.</p>
                            <pre><code>
                                if (sensor_Aout {'>'} 1000) {`{`}
                                <br/>
                                <span className='opacity-50'>{'   //'} code to execute if sensor value is above threshold</span>
                                <br/>
                                {`}`} else {`{`}
                                <br/>
                                <span className='opacity-50'>{'   //'} code to execute if sensor value is below threshold</span>
                                <br/>
                                {`}`}
                            </code></pre>
                            <h3 id="contribute">Contribute</h3><p>We welcome contributions to this project! If you have
                                an idea for a new feature or have found a bug, please open an issue or submit a pull
                                request.</p></div>
                    </div>
                </div>
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

export default Home
