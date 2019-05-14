import React, {Component, Fragment} from 'react'
import Header from "../header";

class Pilot extends Component {
    state = {
        timeFly: "00:00:00",
        timeButton: "Начать полёт"
    };

    handleClick = () => {
        if (this.state.timeButton === "Начать полёт") {
            this.setState({timeButton: "Завершить полёт"});
            let dateStart = new Date();
            this.update = setInterval(() => {
                let new_date = new Date() - dateStart;
                let sec = Math.abs(Math.floor(new_date / 1000) % 60); //sek
                let min = Math.abs(Math.floor(new_date / 1000 / 60) % 60); //min
                let hours = Math.abs(Math.floor(new_date / 1000 / 60 / 60) % 24); //hours
                if (sec.toString().length === 1) sec = '0' + sec;
                if (min.toString().length === 1) min = '0' + min;
                if (hours.toString().length === 1) hours = '0' + hours;
                this.setState({timeFly: `${hours}:${min}:${sec}`});
            }, 100);
        }
        if (this.state.timeButton === "Завершить полёт") {
            this.setState({timeButton: "Начать полёт"});
            clearInterval(this.update);
            this.setState({timeFly: "00:00:00"});
            let dateStop = new Date();
        }

    };

    render() {
        return (
            <Fragment>
                <Header role={"пилота"}/>
                <div className="container-fluid mt-3 pl-4 pr-4">
                    <div className="row text-right">
                        <p className="col-10 time-fly">{this.state.timeFly}</p>
                        <button className="btn btn-outline-success col-2"
                                onClick={this.handleClick}>{this.state.timeButton}
                        </button>
                    </div>
                    <div className="row">
                        <div className="col-6">

                        </div>
                        <table className="table mt-3 text-center col-6">
                            <thead className="thead-light">
                            <tr className="d-flex">
                                <th className="col">Название рейса</th>
                                <th className="col">Время начала</th>
                                <th className="col">Время окончания</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="d-flex">
                                <td className="col">Новосибирск-Казань</td>
                                <td className="col">21 янв. 2018 01:02:45</td>
                                <td className="col">21 янв. 2018 04:02:45</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <p>Общий налёт:</p>
                                <p className="ml-2">256 часов</p>
                            </div>


                        </div>
                        <table className="table mt-3 text-center col-6">
                            <thead className="thead-light">
                            <tr className="d-flex">
                                <th className="col">Налёт часов</th>
                                <th className="col">Кол-во календарных дней дополнительного отпуска</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="d-flex">
                                <td className="col">vfvf</td>
                                <td className="col">Кол-во объектов</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default Pilot
