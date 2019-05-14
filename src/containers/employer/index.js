import React, {Component, Fragment} from 'react'
import Header from "../header";

class Employer extends Component {
    render() {
        return (
            <Fragment>
                <Header role={"работодателя"}/>
                <div className="container-fluid mt-3 pl-4 pr-4">
                    <div className="row">
                        <table className="table mt-3 text-center">
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

export default Employer
