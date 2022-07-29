import React from "react";
import { withRouter } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
import $ from 'jquery';
import QRCode from "react-qr-code";
import html2pdf from 'html2pdf.js';
import './style.css';
class QuotationPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quotation: null,
            no: '',
            data: []

        }
    }
    loadData = () => {
        infoxAPI.get(`/quotation/preview/${this.props.match.params.id}`).then(
            (response) => {
                this.setState({
                    quotation: JSON.parse(response.data.blob),
                    data: response.data
                });
            });
    }
    goBack = () => {
        this.props.history.goBack();
    }
    componentDidMount() {
        this.loadData();
    }
    print_window = () => {
        let element = document.getElementById("print-area")
        $(element).removeClass('p-5');
        window.print();
    }
    print = () => {
        let element = document.getElementById("print-area")
        $(element).addClass('p-5');
        let opt = {
            margin: 0.1,
            filename: this.state.data.name,
            image: { type: 'jpeg', quality: 1 },
            pagebreak: { mode: ['css', 'legacy'] },
            html2canvas: { scale: 10 },
            jsPDF: { unit: 'in', format: 'A4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    }
    render() {
        let quotation = this.state.quotation
        return (<>
            <div className="d-print-none">
                <h4><button onClick={this.goBack}
                    className="btn btn-link btn-lg"><i className="fa fa-arrow-left"></i></button>Quotation Preview <button onClick={this.print_window} className="btn btn-sm btn-primary shadow-sm float-right m-1"><i className="fa fa-print"></i> Print</button>
                    <button onClick={() => {
                        this.print();
                    }} className="btn btn-sm btn-primary shadow-sm float-right m-1"><i className="fa fa-download"></i></button>
                </h4>
            </div>
            {quotation !== null && this.state.data.firm === 'dream_india' ?
                <div id="paper" className="shadow" style={{ maxWidth: '297mm' }}>
                    <div id="print-area" className="text-dark bg-white p-5">
                        <div className="text-center">
                            <img alt="header" style={{minWidth:'100%'}} src={`${process.env.PUBLIC_URL}/img/${this.state.data.firm}.png`} className="img-fluid" />
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
                                            <th>Quotation No. </th><td className="text-center">{this.state.data.no}</td>
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
                        <table className="table table-bordered mt-3 table-md" >
                            <thead className="thead-light text-center">
                                <tr>
                                    <th>SINo</th>
                                    <th>Item</th>
                                    <th>Rate</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
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
                                    <th colSpan={4}> Sub Total : </th><th>&#8377; {quotation.total} </th>
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

                        <div className="text-left mb-2"><QRCode size={100} level='L' value={this.state.data.id} /></div>
                        <p className="small text-left">Generated on {new Date().toString()} &copy; Azba india </p>
                    </div>
                </div> : null}
        </>)
    }
}
export default withRouter(QuotationPreview)