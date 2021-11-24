import React from "react";
import { withRouter } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
class QuotationPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotation: null,
            no: ''

        }
    }
    loadData = () => {
        infoxAPI.get(`/quotation/preview/${this.props.match.params.id}`).then(
            (response) => {
                this.setState({
                    quotation: JSON.parse(response.data.blob),
                    no: response.data.no
                });
            });
    }
    goBack = () => {
        this.props.history.goBack();
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        let quotation = this.state.quotation
        return (<>
            <div className="d-print-none">
                <h4><button onClick={this.goBack}
                    className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Quotation Preview <button onClick={()=>{
                        window.print();
                    }} className="btn btn-sm btn-primary shadow-sm float-right"><i className="fa fa-print"></i> Print</button></h4>
            </div>
            {quotation !== null ?
                <div>
                    <div className="text-center">
                        <img alt="header" width="100%" src="https://www.adobe.com/express/create/media_1319c302e16d1d18f8dc4a3e887778ef8959c12a6.jpeg?width=2000&format=webply&optimize=medium" className="img-fluid" />
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-8">
                            <div className="col-md-10">
                                <h5 className="ml-2"><b>To</b></h5>
                                <div className="ml-2">
                                    <p>{quotation.party_name}</p>
                                    <p>{quotation.party_address.split(/\r?\n/).map(a => { return <>{a}<br /></> })}</p>
                                    <p>{quotation.party_phone}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h5>&nbsp;</h5>
                            <table className="table table-bordered table-sm">
                                <tbody>
                                    <tr>
                                        <th>Quotation No. </th><td className="text-center">{this.state.no}</td>
                                    </tr>
                                    <tr>
                                        <th>Date </th><td className="text-center">{quotation.date}</td>
                                    </tr>
                                    <tr>
                                        <th>Validity </th><td className="text-center">{quotation.validity}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center"> <h3 className="text-uppercase"><b>Quotation</b></h3></div>
                    <table className="table table-bordered mt-3">
                        <thead className="thead-light text-center">
                            <tr>
                                <td>SINo</td>
                                <td>Item</td>
                                <td>Rate</td>
                                <td>Quantity</td>
                                <td>Amount</td>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {quotation.items.map((item, i) => {
                                return (
                                    <tr className="">
                                        <th style={{ width: '5%' }}>{i + 1}</th>
                                        <td className="text-left" style={{ width: '55%' }}>{item.name}</td>
                                        <td style={{ width: '10%' }}>{item.rate}</td>
                                        <td style={{ width: '10%' }}>{item.qty}</td>
                                        <td className="text-right" style={{ width: '20%' }}>{item.amount}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot className="text-right">
                            <tr>
                                <th  colSpan={4}> Sub Total : </th><th>&#8377; {quotation.total} </th>
                            </tr>
                            <tr>
                                <th colSpan={4}> Discount(%): </th><th>{quotation.discount}</th>
                            </tr>
                            <tr>
                                <th colSpan={4}> Grand Total : </th><th>&#8377; {parseInt(quotation.total) - ((parseInt(quotation.total) * (parseInt(quotation.discount) / 100)))} </th>
                            </tr>
                        </tfoot>
                    </table>
                    <div>
                        <p>
                        WE HOPE YOU WILL FIND OUR ABOVE OFFER SUITABLE AND FAVOUR US WITH YOUR VALUED
                        ORDERS.</p>
                        <p className="text-left">THANK YOU FOR YOUR BUSINESS!</p>
                    </div>
                </div> : null}
        </>)
    }
}
export default withRouter(QuotationPreview)