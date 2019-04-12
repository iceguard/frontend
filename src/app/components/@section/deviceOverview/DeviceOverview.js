import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './deviceOverview.css'
import { Icon } from '@misc/icon'
import Link from 'next/link'

export class DeviceOverview extends Component {
    constructor() {
        super()

        this.updateIntervalFn = null

        this.state = {
            deviceData: [],
        }
    }

    fetchData() {
        fetch('https://iceguard-cosmos-functions.azurewebsites.net/api/latest?deviceIds=simulator,simulator2')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    deviceData: data,
                })
            })
    }

    componentDidMount() {
        this.fetchData()

        this.updateIntervalFn = setInterval(() => {
            this.fetchData()
        }, 2000)
    }

    componentWillUnmount() {
        clearInterval(this.updateIntervalFn)
    }

    render() {
        return (
            <section className={styles.deviceOverview}>
                {this.state.deviceData.map((device, index) => {
                    return Device(device, index)
                })}
            </section>
        )
    }
}

const Device = (device, index) => {
    return (
        <div className={classnames(styles.device, { [styles.alert]: device.temperature < 25 })} key={`${device.deviceId}-${index}`}>
            <div className={styles.deviceHead}>
                <div className={styles.status}>
                    <div className={styles.statusDot} />
                </div>
                <div className={styles.title}>{device.deviceId}</div>
                <div className={styles.showDetailLink}>
                    <Link href={{ pathname: '/device', query: { id: device.deviceId } }}>
                        <a>
                            <Icon type="settings" size="25" />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.deviceContent}>
                <div className={styles.deviceTile}>
                    <h5 className={styles.tileHeader}>Humidity</h5>
                    <div className={styles.tileInfo}>{parseFloat(device.humidity).toFixed(2)} %</div>
                </div>
                <div className={styles.deviceTile}>
                    <h5 className={styles.tileHeader}>Temperature</h5>
                    <div className={styles.tileInfo}>{parseFloat(device.temperature).toFixed(2)} °C</div>
                </div>
            </div>
            <div className={styles.deviceFoot}>
                <div className={styles.deviceTile}>
                    <h5 className={styles.tileHeader}>Last Update</h5>
                    <div className={styles.tileInfo}>{device.timestamp}</div>
                </div>
            </div>
        </div>
    )
}
