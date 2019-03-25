import React, { Component } from 'react'
import classnames from 'classnames'
import styles from './deviceOverview.css'

export class DeviceOverview extends Component {
    constructor() {
        super()

        this.state = {
            deviceData: [],
        }
    }

    componentDidMount() {
        fetch('https://iceguard-cosmos-functions.azurewebsites.net/api/measurements?deviceId=simulator')
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    deviceData: data,
                })
            })
    }

    render() {
        return (
            <section className={styles.deviceOverview}>
                {/* {this.state.data.map((device, index) => {
                    return Device(device, index)
                })} */}
                {Device(this.state.deviceData[0], 0)}
            </section>
        )
    }
}

const Device = (device, index) => {
    if (!device) {
        return null
    }

    return (
        <div className={classnames(styles.device)} key={`device-${index}`}>
            <div className={styles.deviceHead}>
                <div className={styles.status}>
                    <div className={styles.statusDot} />
                </div>
                <div className={styles.title}>{device.deviceId}</div>
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
        </div>
    )
}

// const Device = (device, index) => {
//     return (
//         <div className={classnames(styles.device, { [styles.alert]: device.alert })} key={`${device.name}-${index}`}>
//             <div className={styles.deviceHead}>
//                 <div className={styles.status}>
//                     <div className={styles.statusDot} />
//                 </div>
//                 <div className={styles.title}>{device.name}</div>
//             </div>
//             <div className={styles.deviceContent}>
//                 {device.tiles.map((tile, index) => {
//                     return (
//                         <div className={styles.deviceTile} key={`${tile.name}-${index}`}>
//                             <h5 className={styles.tileHeader}>{tile.name}</h5>
//                             <div className={styles.tileInfo}>{tile.value}</div>
//                         </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }
