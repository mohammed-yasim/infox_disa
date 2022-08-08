import React from "react";
import { withRouter } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
import $ from 'jquery';
import QRCode from "react-qr-code";
import html2pdf from 'html2pdf.js';
import { ToWords } from 'to-words';
import './style.css';
class QuotationPreview extends React.Component {
    constructor(props) {
        super(props);
        this.toWords = new ToWords();
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
            <div id="paper" className="shadow" style={{ maxWidth: '297mm' }}>
                {quotation !== null && this.state.data.firm === 'dream_india' ?
                    <div id="print-area" className="text-dark bg-white p-5">
                        <div className="text-center">
                            <img alt="header" style={{ minWidth: '100%' }} src={`${process.env.PUBLIC_URL}/img/${this.state.data.firm}.png`} className="img-fluid" />
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
                                {parseInt(quotation.discount) > 0 ?
                                    <tr>
                                        <th colSpan={4}> Discount({quotation.discount}%): </th><th>&#8377; {quotation.discount_amount}</th>
                                    </tr>
                                    : null}
                                {parseInt(quotation.shipping_charge) > 0 ?
                                    <tr>
                                        <th colSpan={4}> Freight Charge : </th><th>&#8377; {quotation.shipping_charge}</th>
                                    </tr>
                                    : null}
                                <tr>
                                    <th colSpan={4}> Grand Total : </th><th>&#8377; {(parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2)} </th>
                                </tr>
                            </tfoot>
                        </table>
                        <h5 className="p p-3">
                            {quotation.additional_information}
                        </h5>
                        <div>
                            <p>
                                WE HOPE YOU WILL FIND OUR ABOVE OFFER SUITABLE AND FAVOUR US WITH YOUR VALUED
                                ORDERS.</p>
                            <p className="text-left">THANK YOU FOR YOUR BUSINESS!</p>
                        </div>

                        <div className="text-left mb-2"><QRCode size={100} level='L' value={this.state.data.id} /></div>
                        <p className="small text-left">Generated on {new Date().toString()} &copy; Azba india </p>
                    </div> : quotation !== null && this.state.data.firm === 'dream_india_tl' ?
                        <div id="print-area" className="ditl text-dark bg-white p-5">
                            <p className="small text-center" style={{ fontSize: '6pt' }}>Generated on {new Date().toString()} &copy; Azba india </p>
                            <h3 className="bg-gradient-primary p-3 text-white">DREAM INDIA TRADE LINKS
                                <span className="float-right text-uppercase"><i>Quotation</i></span></h3>
                            <table className="table text-gray-900 text-lg">
                                <tr>
                                    <th>
                                        D26, GROUND FLOOR, 62/5011,<br />
                                        IYYATTIL JUNCTION, HOSPITAL ROAD,<br />
                                        ERNAKULAM, KERALA - 682011
                                    </th>
                                    <th>
                                        GSTIN  : 32ANFPN2133F2ZI<br />
                                        PHONE : 09947086528<br />
                                        E-MAIL : dreamindiatl@gmail.com<br />

                                    </th>
                                </tr>
                            </table>
                            <div className="row mt-2">
                                <div className="col-md-6">
                                    <table className="table table-bordered table-sm text-gray-900">
                                        <thead>
                                            <tr><th colSpan={2} className="bg-gradient-primary text-white">&nbsp;<b>To</b></th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th rowSpan={5}>
                                                    <p>{quotation.party_name}</p>
                                                    <p>{quotation.party_address.split(/\r?\n/).map(a => { return <>{a}<br /></> })}</p>
                                                    <p>{quotation.party_phone}</p>
                                                </th>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col-md-6">
                                    <table className="table table-bordered table-sm text-gray-900">
                                        <thead>
                                            <tr><th colSpan={2} className="bg-gradient-primary">&nbsp;</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th>QUOTATION NO. </th><td className="text-center">{this.state.data.no}</td>
                                            </tr>
                                            <tr>
                                                <th>QUOTATION DATE </th><td className="text-center">{quotation.date}</td>
                                            </tr>
                                            <tr>
                                                <th>VALID UNTIL </th><td className="text-center">{quotation.validity}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <table className="table table-bordered mt-3 table-md text-gray-900" >
                                <thead className="thead text-center">
                                    <tr>
                                        <th className="text-white bg-gradient-primary ">DESCRIPTION OF GOODS / SERVICE</th>
                                        <th className="text-white bg-gradient-primary">RATE</th>
                                        <th className="text-white bg-gradient-primary" >QTY</th>
                                        <th className="text-white bg-gradient-primary" >AMOUNT</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {quotation.items.map((item, i) => {
                                        return (
                                            <tr className="">
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
                                        <th className="text-left" rowSpan={4}>
                                            <p>WE WILL PROVIDE YOU THE SAME  SAMPLE ITEMS.<br />
                                                ALL THE ITEMS SHOWN ABOVE ARE INCLUSIVE OF ALL TAXES.<br />
                                                WE HAVE COMPLETE RESPONSIBILITY FOR THE ITEMS WE PROVIDE.<br />
                                                WE WILL DELIVER ALL THE ITEMS IN ONE CENTRE WHICH YOU PREFER.<br />
                                            </p>
                                        </th>
                                        <th className="bg-gradient-primary text-white" colSpan={2}> Total : </th><th className="bg-gradient-primary text-white">&#8377; {quotation.total} </th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}> Discount({quotation.discount}%): </th><th>&#8377; {quotation.discount_amount}</th>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}> Freight charges: </th><th>&#8377; {quotation.shipping_charge}</th>
                                    </tr>
                                    <tr>
                                        <th className="bg-gradient-primary text-white" colSpan={2}> Grand Total : </th><th className="bg-gradient-primary text-white">&#8377; {(parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2)} </th>
                                    </tr>
                                    <tr>
                                        <th className="bg-gradient-primary text-white" colSpan={5}>
                                            Amount in Words : &nbsp;
                                            <b>{this.toWords.convert((parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2), { currency: true })}
                                            </b>
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            <h5 className="p p-3">
                                {quotation.additional_information}
                            </h5>
                            <div>
                                Please Make the Cheque in Favour of "DREAM INDIA TRADE LINKS"<br />
                                <p style={{ textAlign: 'right' }}><b>For Dream India Trade Links</b> <br />Authorized Signatory</p>
                            </div>
                        </div>
                        : quotation !== null && this.state.data.firm === 'dream_india_vns' ?
                            <div id="print-area" className="text-dark bg-white p-5">
                                <div className="vns">
                                    <div style={{ minHeight: '25px' }}>
                                        <span className="float-left h5"> MOB : 9188571354</span>
                                        <span className="float-right h5">GSTIN: 32DKCPS4689Q1Z8</span>
                                    </div>
                                    <div className="text-center">
                                        <hr />
                                        <h1 className="h1">V.N.S SCHOOL ALL IN SHOP</h1>
                                        (Dealers in Books, Lab, Sports &amp; Teaching Aids)
                                        <hr />
                                        <h5>KANJIRAPPALLY P.O, KANJIRAPPALLY-686507-Kottayam Dist-Kerala </h5>
                                        E-MAIL:vnskerala@gmail.com
                                    </div>
                                    <table className="table  table-bordered table-sm">
                                        <tbody>
                                            <tr>
                                                <td width="65%" className="p-3">
                                                    <i>BILL TO</i><br />
                                                    <b>{quotation.party_name}</b><br />
                                                    {quotation.party_address.split(/\r?\n/).map(a => { return <>{a}<br /></> })}<br />
                                                    {quotation.party_phone}<br />
                                                </td>
                                                <td className="text-center">
                                                    <table className="table borderless">
                                                        <tbody>
                                                            <tr>
                                                                <th>DATE :-</th><td>{quotation.date}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>QT. NO :-</th><td> {this.state.data.no}</td>
                                                            </tr>

                                                            <tr>
                                                                <th>VALIDITY UNTIL :-</th><td> {quotation.validity}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="text-center"> <h3 className="text-uppercase"><b>Quotation</b></h3></div>
                                    <table className="table table-bordered mt-3 table-md" >
                                        <thead className="thead-light text-center text-uppercase">
                                            <tr>
                                                <th>SINo</th>
                                                <th>ITEM NAME</th>
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
                                            {parseInt(quotation.discount) > 0 ?
                                                <tr>
                                                    <th colSpan={4}> Discount({quotation.discount}%): </th><th>&#8377; {quotation.discount_amount}</th>
                                                </tr>
                                                : null}
                                            {parseInt(quotation.shipping_charge) > 0 ?
                                                <tr>
                                                    <th colSpan={4}> Freight Charge : </th><th>&#8377; {quotation.shipping_charge}</th>
                                                </tr>
                                                : null}
                                            <tr>
                                                <th colSpan={4}> Grand Total : </th><th>&#8377; {(parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2)} </th>
                                            </tr>
                                            <tr>
                                                <th className="text-left" colSpan={5}>
                                                    Amount in Words : &nbsp;
                                                    {this.toWords.convert((parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2), { currency: true })}

                                                </th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <h5 className="p p-3">
                                        {quotation.additional_information}
                                    </h5>

                                    <p>WE HOPE YOU WILL FIND OUR ABOVE OFFER SUITABLE AND FAVOUR US WITH YOUR VALUED ORDERS.</p>
                                    <div>
                                        <u><b>TERMS &amp; CONDITIONS</b></u><br />
                                        * WE WILL DELIVER ALL THE ITEMS IN ONE CENTRE WHICH YOU PREFER<br />
                                        * WE WILL PROVIDE YOU THE SAME SAMPLE ITEMS<br />
                                        * PAYMENT:- 100% AGAINST DELIVERY OF MATERIALS.<br />
                                        * WE HAVE COMPLETE RESPONSIBILITY FOR THE ITEMS WE PROVIDE<br />
                                        *IT IS YOUR RESPONSIBILITY TO CHECK THE ITEMS DURING THE TIME OF DELIVERY<br />
                                        *ALL DISPUTES ARE SUBJECT TO KANJIRAPALLY JURIDICTION<br />
                                    </div>
                                    <p style={{ fontSize: '7pt' }} className="p-1 small text-center">Generated on {new Date().toString()} &copy; Azba india </p>
                                </div>
                            </div>
                            : quotation !== null && this.state.data.firm === 'dream_india_vt' ?
                                <div id="print-area" className="text-dark bg-white p-5">
                                    <div className="vns">
                                        <div style={{ minHeight: '30px' }}>
                                            <span className="float-left p font-italic">GSTIN: 32BHHPA4275Q1Z4</span>

                                            <span className="float-right p font-italic"> Phone: 04828-205354 <br />
                                                Mob: 09747177280</span>
                                        </div>
                                        <div className="text-center">
                                            <h1 className="h1 text-success">V.T. SCHOOL LAND &amp; PUBLISHERS</h1>
                                            Near Post Office Anakkallu, ANAKKALLU P.O -686508,Kottayam Dist Kerala<br />
                                            E-MAIL:vtskerala@gmail.com
                                            <hr className="new2" />
                                        </div>
                                        <table className="table  table-bordered table-sm">
                                            <tbody>
                                                <tr>
                                                    <td colSpan={6} className="p-3">
                                                        <i>BILL TO</i><br />
                                                        <b>{quotation.party_name}</b><br />
                                                        {quotation.party_address.split(/\r?\n/).map(a => { return <>{a}<br /></> })}<br />
                                                        {quotation.party_phone}<br />
                                                    </td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>QT. NO :-</th><td> {this.state.data.no}</td>
                                                    <th>DATE :-</th><td>{quotation.date}</td>
                                                    <th>VALID UNTIL :-</th><td> {quotation.validity}</td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <div className="text-center"> <h3 className="text-uppercase"><u><b>Quotation</b></u></h3></div>
                                        <table className="table table-bordered mt-3 table-md" >
                                            <thead className="thead-light text-center text-uppercase">
                                                <tr>
                                                    <th>SINo</th>
                                                    <th>ITEM NAME</th>
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
                                                {parseInt(quotation.discount) > 0 ?
                                                    <tr>
                                                        <th colSpan={4}> Discount({quotation.discount}%): </th><th>&#8377; {quotation.discount_amount}</th>
                                                    </tr>
                                                    : null}
                                                {parseInt(quotation.shipping_charge) > 0 ?
                                                    <tr>
                                                        <th colSpan={4}> Freight Charge : </th><th>&#8377; {quotation.shipping_charge}</th>
                                                    </tr>
                                                    : null}
                                                <tr>
                                                    <th colSpan={4}> Grand Total : </th><th>&#8377; {(parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2)} </th>
                                                </tr>
                                                <tr>
                                                    <th className="text-left" colSpan={5}>
                                                        Amount in Words : &nbsp;
                                                        {this.toWords.convert((parseFloat(quotation.total) - parseFloat(quotation.discount_amount) + parseFloat(quotation.shipping_charge)).toFixed(2), { currency: true })}

                                                    </th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <h5 className="p p-3">
                                            {quotation.additional_information}
                                        </h5>
                                        <div>
                                            <b>TERMS &amp; CONDITIONS</b><br />
                                            * ALL THE ITEMS SHOWN ABOVE ARE INCLUSIVE OF ALL TAXES <br />
                                            * WE WILL DELIVER ALL THE ITEMS IN ONE CENTRE WHICH YOU PREFER<br />
                                            * WE WILL PROVIDE YOU THE SAME SAMPLE ITEMS<br />
                                            * WE HAVE COMPLETE RESPONSIBILITY FOR THE ITEMS WE PROVIDE<br />
                                        </div>
                                        <p style={{ fontSize: '7pt', position: "fixed", bottom: 0, left: 0, right: 0 }} className="p-1 small text-center">Generated on {new Date().toString()} &copy; Azba india </p>
                                    </div>
                                </div> : null}
            </div>
        </>)
    }
}
export default withRouter(QuotationPreview);