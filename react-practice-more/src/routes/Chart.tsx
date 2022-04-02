import { useQuery } from "react-query"
import { useOutletContext } from "react-router"
import { fetchCoinHistory } from "./api"
import ApexChart from "react-apexcharts"

interface ChartProps {
  coinId: string
  isDark: boolean
}

interface IHistorical {
  time_open: string
  time_close: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  market_cap: number
}

function Chart() {
  const coinId = useOutletContext<ChartProps>()
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(`${coinId}`),
    {
      refetchInterval: 100001
    }
  )

  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "price",
              data: data?.map((price) => price.close) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
              //mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 500,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "transparent",
            },
            grid: {
              show: false,
            },
            yaxis: {
              show: false,
            },
            xaxis: {
              labels: { show: false },
              axisTicks: { show: false },
              axisBorder: { show: false },
              type: "datetime",
              categories: data?.map((price) => price.time_close) as string[]
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
            },
            colors: ["red"],
            tooltip: {
              y: {
                formatter: value => `${value.toFixed(2)}`
              }
            },
            stroke: {
              curve: "smooth",
              width: 5,
            },
          }}
        />
      )}
    </div>
  )
}

export default Chart
