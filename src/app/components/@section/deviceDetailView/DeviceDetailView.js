import React, { Component } from 'react'
import styles from './deviceDetailView.css'
import { Chart } from 'chart.js'
import Link from 'next/link'
import WithRouter from '@misc/WithRouter'

export class DeviceDetailView extends Component {
    constructor() {
        super()

        this.chartTemperature = null
        this.chartHumidity = null

        this.chartTemperatureEl = React.createRef()
        this.chartHumidityEl = React.createRef()

        this.updateIntervalFn = null
    }

    fetchData() {
        fetch('https://iceguard-cosmos-functions.azurewebsites.net/api/measurements?deviceId=simulator')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const temperatureData = data.map((d) => d.temperature)
                const temperatureLabels = data.map((d) => (d.timestamp) ? d.timestamp : '')

                const humidityData = data.map((d) => d.humidity)
                const humidityLabels = data.map((d) => (d.timestamp) ? d.timestamp : '')

                this.chartTemperature.data.labels = temperatureLabels
                this.chartTemperature.data.datasets.push({
                    data: temperatureData
                })

                this.chartHumidity.data.labels = humidityLabels
                this.chartHumidity.data.datasets.push({
                    data: humidityData
                })

                this.chartTemperature.update()
                this.chartHumidity.update()
            })
    }

    componentDidMount() {
        this.chartTemperature = new Chart(this.chartTemperatureEl.current, {
            type: 'line',
            data: {
                labels: [],
                datasets: [],
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false
                        }
                    }]
                },
            },
        })

        this.chartHumidity = new Chart(this.chartHumidityEl.current, {
            type: 'line',
            data: {
                labels: [],
                datasets: [],
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            display: false
                        }
                    }]
                },
            },
        })

        this.fetchData()

        // this.updateIntervalFn = setInterval(() => {
        //     this.fetchData()
        // }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.updateIntervalFn)
    }

    render() {
        return (
            <WithRouter>
                {router => {
                    const deviceId = router.query.id
                    return (
                        <>
                            <Link href="/dashboard">
                                <a>Back</a>
                            </Link>
                            <h1 className={styles.title}>{deviceId}</h1>
                            <section className={styles.deviceDetailView}>
                                <div className={styles.chartContainer}>
                                    <h3>Temperature</h3>
                                    <canvas className={styles.deviceStatistic} ref={this.chartTemperatureEl} />
                                </div>
                                <div className={styles.chartContainer}>
                                    <h3>Humidity</h3>
                                    <canvas className={styles.deviceStatistic} ref={this.chartHumidityEl} />
                                </div>
                            </section>
                        </>
                    )
                }}
            </WithRouter>
        )
    }
}
