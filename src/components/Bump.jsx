import { ResponsiveBump } from '@nivo/bump'

const Bump = ({ dataBump }) => {
    return (
        <div className='h-[300px]'>
            <ResponsiveBump
                data={dataBump}
                colors={{ scheme: 'spectral' }}
                lineWidth={3}
                activeLineWidth={6}
                inactiveLineWidth={3}
                inactiveOpacity={0.15}
                startLabel={true}
                startLabelPadding={27}
                startLabelTextColor={{ from: 'color', modifiers: [] }}
                endLabel={false}
                pointSize={10}
                activePointSize={16}
                inactivePointSize={0}
                pointColor={{ from: 'serie.color', modifiers: [] }}
                pointBorderWidth={3}
                activePointBorderWidth={3}
                pointBorderColor={{ from: 'serie.color', modifiers: [] }}
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -36
                }}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'ranking',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                margin={{ top: 70, right: 70, bottom: 70, left: 70 }}
                axisRight={null}
            />
        </div>
    )
}

export default Bump