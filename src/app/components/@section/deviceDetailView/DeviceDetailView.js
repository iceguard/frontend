import React, { Component } from 'react'
import styles from './deviceDetailView.css'
import { Chart } from 'chart.js'
import Link from 'next/link'
import { withRouter } from 'next/router'
import { Icon } from '@misc/icon'

class DeviceDetailView extends Component {
    constructor() {
        super()

        this.state = {
            deviceId: '',
            isFetchingData: false,
        }

        this.chartTemperature = null
        this.chartHumidity = null

        this.chartTemperatureEl = React.createRef()
        this.chartHumidityEl = React.createRef()

        this.updateIntervalFn = null
    }

    fetchData(deviceId) {
        this.setState({
            isFetchingData: true,
        })

        fetch(`https://iceguard-cosmos-functions.azurewebsites.net/api/measurements?deviceId=${deviceId}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                const temperatureData = data.map(d => parseFloat(d.measurementValues.temperature).toFixed(2))
                const temperatureLabels = data.map(d => (d.timestamp ? d.timestamp : ''))

                const humidityData = data.map(d => parseFloat(d.measurementValues.humidity).toFixed(2))
                const humidityLabels = data.map(d => (d.timestamp ? d.timestamp : ''))

                this.chartTemperature.data.labels = temperatureLabels.reverse()
                this.chartTemperature.data.datasets = []
                this.chartTemperature.data.datasets.push({
                    data: temperatureData.reverse(),
                })

                this.chartHumidity.data.labels = humidityLabels.reverse()
                this.chartHumidity.data.datasets = []
                this.chartHumidity.data.datasets.push({
                    data: humidityData.reverse(),
                })

                this.chartTemperature.update()
                this.chartHumidity.update()

                this.setState({
                    isFetchingData: false,
                })
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
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                        },
                    ],
                },
                animation: {
                    duration: 0,
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
                    display: false,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                display: false,
                            },
                        },
                    ],
                },
                animation: {
                    duration: 0,
                },
            },
        })

        this.fetchData(this.props.router.query.id)

        this.updateIntervalFn = setInterval(() => {
            this.fetchData(this.props.router.query.id)
        }, 4000)
    }

    componentWillUnmount() {
        clearInterval(this.updateIntervalFn)
    }

    render() {
        const deviceId = this.props.router.query.id

        return (
            <>
                <Link href="/dashboard">
                    <a className={styles.backLink}>
                        <Icon type="back" size="15" />
                        Back
                    </a>
                </Link>
                <h1 className={styles.title}>{deviceId}</h1>
                <section className={styles.deviceDetailView}>
                    <div className={styles.chartContainer}>
                        <h3>Humidity (%)</h3>
                        <canvas className={styles.deviceStatistic} ref={this.chartHumidityEl} />
                    </div>
                    <div className={styles.chartContainer}>
                        <h3>Temperature (°C)</h3>
                        <canvas className={styles.deviceStatistic} ref={this.chartTemperatureEl} />
                    </div>
                </section>
            </>
        )
    }
}

export default withRouter(DeviceDetailView)
