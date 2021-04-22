import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd'
import DiscortPng from '../img/discort.png';
import TelegramPng from '../img/telegram.png';
import { LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';
import { socialDataGet } from '../services/data.services';

export default (props) => {
    const [state, setState] = useState({});

    useEffect(() => {
        socialDataGet().then(result => {
            setState(result);
        })
    }, [])

    return (
        <>
            <Row gutter={[80, 80]} >
                <Col span={24} className="text-center">
                    <p className="page-title">Birlikte öğrenen dinamik ve abcd bir topluluk</p>
                    <p className="page-sub-title">
                        Topluluğa katılmak, blockchain teknolojileri öğrenmek ve blabla balbablab alb alb bal
                        balb alalblab lablablab dlablda blda blsd aşağıdaki bağlantıları takip edin!
                    </p>
                </Col>
            </Row>
            <br /><br /><br />
            <Row gutter={[16, 160]} >

                {/*******************************************************************************/}
                {/*twitter*/}
                <Col span={10} className="topluluk-card-title">
                    <div class="flex-center">
                        <TwitterOutlined style={{ fontSize: '64px' }} />
                        <p>
                            Topluluk hakkında gelişmeleri ve
                            buraları dolduracak bişey henüz
                            bulamadım ama bulurum
                        </p>
                    </div>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={12} className="topluluk-card-description">
                    <div class="flex-center">
                        {state.twitter?.map(item =>
                            <div>
                                <span>{item.username}</span>
                                <span> : </span>
                                <span>{item.status}</span>
                            </div>
                        )}
                    </div>
                </Col>

                {/*******************************************************************************/}
                {/*linkedin*/}
                <Col span={10} className="topluluk-card-title">
                    <div class="flex-center">
                        <LinkedinOutlined style={{ fontSize: '64px' }} />
                        <p>
                            Topluluk hakkında gelişmeleri ve
                            buraları dolduracak bişey henüz
                            bulamadım ama bulurum
                        </p>
                    </div>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={12} className="topluluk-card-description">
                    <div class="flex-center">
                        {state.linkedin?.map(item =>
                            <div>
                                <span>{item.username}</span>
                                <span> : </span>
                                <span>{item.status}</span>
                            </div>
                        )}
                    </div>
                </Col>

                {/*******************************************************************************/}
                {/*telegram*/}
                <Col span={10} className="topluluk-card-title">
                    <div class="flex-center">
                        <p>
                            <img alt="telegram" className="topluluk-icon" src={TelegramPng} />
                        </p>
                        <p>
                            Topluluk hakkında gelişmeleri ve
                            buraları dolduracak bişey henüz
                            bulamadım ama bulurum
                        </p>
                    </div>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={12} className="topluluk-card-description">
                    <div class="flex-center">
                        {state.telegram?.map(item =>
                            <div>
                                <span>{item.username}</span>
                                <span> : </span>
                                <span>{item.status}</span>
                            </div>
                        )}
                    </div>
                </Col>

                {/*******************************************************************************/}
                {/*discort*/}
                <Col span={10} className="topluluk-card-title">
                    <div class="flex-center">
                        <p>
                            <img alt="discort" className="topluluk-icon" src={DiscortPng} />
                        </p>
                        <p>
                            Topluluk hakkında gelişmeleri ve
                            buraları dolduracak bişey henüz
                            bulamadım ama bulurum
                        </p>
                    </div>
                </Col>
                <Col span={2}>
                </Col>
                <Col span={12} className="topluluk-card-description">
                    <div class="flex-center">
                        {state.discort?.map(item =>
                            <div>
                                <span>{item.username}</span>
                                <span> : </span>
                                <span>{item.status}</span>
                            </div>
                        )}
                    </div>
                </Col>

            </Row>
        </>
    );
}
