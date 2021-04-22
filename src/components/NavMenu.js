import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd'
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <Row>
                <Col span={24}>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" light>
                        <Col flex="none" style={{ padding: '25px' }}>
                            <NavbarBrand tag={Link} to="/">
                                <div className="site-baslik">coingeciyomu?</div>
                                <div className="site-alt-baslik">blockchain geliştiricileri topluluğu</div>
                            </NavbarBrand>
                        </Col>
                        <Col flex="auto" style={{ marginTop: '85px' }}>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/topluluk">topluluk</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/ogren">öğren</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/etkinlik">etkinlik</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/blog">blog</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-light" to="/hakkimizda">hakkımızda</NavLink>
                                    </NavItem>
                                </ul>
                            </Collapse>
                        </Col>
                    </Navbar>
                </Col>
            </Row>
        );
    }
}
