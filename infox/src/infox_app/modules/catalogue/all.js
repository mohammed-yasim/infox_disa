import React from "react";
import { Link } from "react-router-dom";
import { infoxAPI } from "../../etc/api";
class AllProducts extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            products : [],
            pending:true
        }
    }
    componentDidMount(){;
        this.load_allproducts();
    }
    load_allproducts = () =>{
        infoxAPI.get('catalogue/allproducts')
        .then(
            (response)=>{
                this.setState({
                    products : response.data,
                    pending:false
                });
            window.jQuery('#dataTable').DataTable();
            }
        )
    }
    render(){
        return(
            <>
            <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">All Products</h6>
            </div>
            <div className="card-body">
              <div className="table-responsive"></div>
            <table id="dataTable" className="table table-bordered text-center">
                <thead>
                    <tr>
                    <th>S1 No</th>
                    <th>Product Information</th>
                    <th>Reference</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.products.map(
                        (product,i) =>{
                            return(
                                <tr key={product.p_id}>
                                    <td>{i+1}</td>
                                    <td><div className="row">
                                        <div className="col-2">
                                        <img className="img-fluid" alt={product.p_image} src={'https://www.dreamindiaschool.com/product_img/thumb/'+product.p_image}/>
                                        <p className="text-center m-0"><b>{product.p_code}</b></p>
                                        </div>
                                        <div className="col text-left">
                                        <h5><b>{product.p_name}</b></h5>
                                        <p>{product.p_description}</p>
                                        <hr/>
                                        <p><b>Unit : </b> {product.p_unit}</p>
                                        <p><b>Options : </b> {product.p_options}</p>
                                        <p><b>Tags : </b> {product.p_tags}</p>
                                            </div>

                                        </div></td>
                                        <td>
                                            <div className="text-left">
                                            <p><b>Catergory: </b>{product.p_master}</p>
                                            <p><b>Sub Catergory: </b>{product.p_sub}</p>
                                            <p><b>Group: </b>{product.p_group}</p>
                                            <p><b>Alias: </b>{product.p_alias}</p>
                                            <p><b>Reference: </b>{product.p_reference}</p>
                                            <p><b>Remarks: </b>{product.p_remarks}</p>
                                            </div>
                                        </td>
                                    <td><Link to={'/catalogue/edit/'+product.p_id} className="btn btn-sm btn-info"><i className="fa fa-edit"></i> Edit</Link></td>
                                </tr>
                            )
                        }
                    )}
                </tbody>
            </table>
            </div>
            </div>
            </>
        )
    }
}
export default AllProducts