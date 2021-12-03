import React from 'react';
import { withRouter } from 'react-router-dom'
import { infoxAPI } from '../../etc/api';
import './_.scss';
class AdvancedQuotationTool extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product_data: [],
            p_master: 'plaything',
            p_sub: '',
            p_group: '',
            p_input: ''
        }
    }
    load_products = () => {
        infoxAPI.get('/catalogue/list').then(response => {
            let data = response.data
            //data = data.concat(response.data)
            this.setState({ product_data: data })
        });
    }
    componentDidMount() {
        this.load_products();
    }
    filter = (data) => {
        return data.filter(function (item, pos) { return data.indexOf(item) === pos; })
            .map(p => {
                return { name: p.replace(/_/g, " ").toProperCase(), value: p }
            })
    }
    onChange = (e) => {
        let state = []
        let element = e.target.getAttribute('name');
        state[element] = e.target.value;
        if (element === 'p_master') { state['p_sub'] = ''; state['p_group'] = ''; state['p_input'] = '' }
        if (element === 'p_sub') { state['p_group'] = ''; state['p_input'] = '' }
        this.setState(state);
    }
    render() {
        let p_master = []
        let p_sub = []
        let p_group = []
        let p_count = 0
        let products = []
        if (this.state.product_data.length > 0) {
            p_master = this.state.product_data.map(p => { return p.p_master });
            p_sub = this.state.product_data.filter((p) => { return p.p_master === this.state.p_master }).map(p => { return p.p_sub });
            p_group = this.state.product_data.filter((p) => { return p.p_master === this.state.p_master && p.p_sub === this.state.p_sub }).map(p => { return p.p_group });
            p_master = this.filter(p_master);
            p_sub = this.filter(p_sub);
            p_group = this.filter(p_group);
            p_count = this.state.product_data.length
            products = this.state.product_data.filter(
                p => {
                    if (this.state.p_master && !this.state.p_sub && !this.state.p_group) {
                        return p.p_master === this.state.p_master
                    }
                    else if (this.state.p_master !== '' && this.state.p_sub === '' && this.state.p_group === '') {
                        return p.p_master === this.state.p_master
                    }
                    else if (this.state.p_master !== '' && this.state.p_sub !== '' && this.state.p_group === '') {
                        return p.p_master === this.state.p_master && p.p_sub === this.state.p_sub
                    }
                    else if (this.state.p_master !== '' && this.state.p_sub !== '' && this.state.p_group !== '') {
                        return p.p_master === this.state.p_master && p.p_sub === this.state.p_sub && p.p_group === this.state.p_group
                    }
                    return false
                }
            ).sort((a, b) => {
                if (a.p_name < b.p_name) { return -1; }
                if (a.p_name > b.p_name) { return 1; }
                return 0;
            }).filter(p => {
                if (this.state.p_input) {
                    return p.p_name.toLowerCase().indexOf(this.state.p_input.toLowerCase()) >= 0;
                }
                return p
            })
        }
        return (
            <>
                <div>
                    <div className="bottom-bar shadow">
                        <div className="form-inline">
                            <select name="p_master" value={this.state.p_master} onChange={this.onChange} className="form-control form-control-sm col">
                                <option value="">Category</option>
                                {p_master.map(option => <option value={option.value}>{option.name}</option>)}
                            </select>
                            <select name="p_sub" value={this.state.p_sub} onChange={this.onChange} className="form-control form-control-sm col">
                                <option value="">Sub Category</option>
                                {p_sub.map(option => <option value={option.value}>{option.name}</option>)}

                            </select>
                            <select name="p_group" value={this.state.p_group} onChange={this.onChange} className="form-control form-control-sm col">
                                <option value="">Group</option>
                                {p_group.map(option => <option value={option.value}>{option.name}</option>)}
                            </select>
                        </div>
                        <div>
                            <input type="text" name="p_input" value={this.state.p_input} onChange={this.onChange} placeholder="filter by Name" className="form-control form-control-sm col" />
                        </div>
                    </div>
                    <p className="mt-1 mb-2">{products.filter(p => { return p.p_image !== '' }).length} result with image from {products.length} out of {p_count}</p>
                    <div className="row justify-content-center">
                        {products.filter(p => { return p.p_image !== '' }).map(p => {
                            return (<div className="col-12 col-sm-6 col-md-4" key={p.p_id}>
                                <div className="card mb-2 text-center">
                                    <div className="card-body row">
                                        <div className="col-10">
                                            <b>{p.p_code}</b><br/>
                                            <img style={{ height: '100px' }} className="img-fluid" alt={p.p_image} src={'https://www.dreamindiaschool.com/infox_image_server/thumb/' + p.p_image} />
                                            <br />
                                            <b> {p.p_name}</b>
                                            <p>{p.p_reference}</p>
                                        </div>
                                        <div className="col-2">
                                            <button className="btn btn-sm btn-primary">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default withRouter(AdvancedQuotationTool);
