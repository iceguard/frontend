import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './deviceOverview.scss'
import deviceData from './deviceData'

export class DeviceOverview extends Component {
    constructor() {
        super()

        this.state = {
            devices: deviceData,
        }
    }
    render() {
        return (
            <section className={styles.deviceOverview}>
                {this.state.devices.map((device, index) => {
                    return Device(device, index)
                })}
            </section>
        )
    }
}

const Device = (device, index) => {
    return (
        <div className={classnames(styles.device, { [styles.alert]: device.alert })} key={`${device.name}-${index}`}>
            <div className={styles.deviceHead}>
                <div className={styles.status}>
                    <div className={styles.statusDot} />
                </div>
                <div className={styles.title}>{device.name}</div>
            </div>
            <div className={styles.deviceContent}>
                {device.tiles.map((tile, index) => {
                    return (
                        <div className={styles.deviceTile} key={`${tile.name}-${index}`}>
                            <h5 className={styles.tileHeader}>{tile.name}</h5>
                            <div className={styles.tileInfo}>{tile.value}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
