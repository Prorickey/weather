import Image from 'next/image'

export default function TemperatureGraph() {

    const data = {
        currentTemperature: "58°",
        currentType: "cloud",
        high: "71°",
        low: "47°"
    }

    return (
        <div className="bg-[#853175] rounded-2xl p-5">
            <div className='flex flex-row justify-between'>
                <div>
                    <div className='flex flex-row gap-x-2'>
                        <h1 className="text-2xl font-bold text-stone50">{data.currentTemperature}</h1>
                        <Image 
                            src={"/cloud.svg"}
                            alt={"Clouds"}
                            height={30}
                            width={30}
                        />
                    </div>
                    <p className='text-stone-200 font-semibold'>Hi: {data.high} Lo: {data.low}</p>
                </div>
                <div className='m-2 px-2 rounded-4xl bg-[#d57e00] flex flex-row'>
                    <Image 
                        src={"/cloud.svg"}
                        alt={"Clouds"}
                        height={30}
                        width={30}
                    />
                    <Image 
                        src={"/down-arrow.svg"}
                        alt={"Down Arrow"}
                        height={30}
                        width={30}
                    />
                </div>
            </div>
        </div>
    )
}