import React, { useEffect, useState } from 'react';
import { Row, Col, Button } from 'antd'
import { roadMapDataGet } from '../services/data.services';

export default (props) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        roadMapDataGet().then(result => {
            setState(result);
        })
    }, [])

    const onClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <>
            <Row gutter={[80, 80]} >
                <Col span={24} className="text-center">
                    <p className="page-title">Sizin için bir yol haritası hazırladık</p>
                    <p className="page-sub-title">
                        Lore ipsem muydu kanka bu tam olarak hatırlamıyorum ne olduğunu ama burakadaki
                        maksat kullanıcı pathwayi görmeden önce ön bilgilendirme alsın
                    </p>
                </Col>
            </Row>
            <br /><br /><br />
            <Row gutter={[16, 160]}>
                <Col span={12}>
                    <Row gutter={[16, 160]}>
                        {state.map(item =>
                            <>
                                <Col span={24}>
                                    <p className="page-title">
                                        {item.title}
                                    </p>
                                    {item.lines?.map(child =>
                                        <p className="page-sub-title">
                                            {child.title}
                                            <Button onClick={() => onClick(child.url)} type="link">{child.url}</Button>
                                        </p>

                                    )}
                                </Col>
                            </>
                        )}
                    </Row>
                </Col>
                <Col span={12} className="ogren-card">
                </Col>
            </Row>
        </>
    );
}
