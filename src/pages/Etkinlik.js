import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Image, Button } from 'antd'
import { meetDataGet } from '../services/data.services';
import { emptyImage } from '../constant/constant'

export default (props) => {
    const [state, setState] = useState([]);

    useEffect(() => {
        meetDataGet().then(result => {
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
                    <p className="page-title">Etkinliklerimizi takip edin</p>
                    <p className="page-sub-title">
                        Lore ipsem muydu kanka bu tam olarak hatırlamıyorum ne olduğunu ama burakadaki
                        maksat kullanıcı pathwayi görmeden önce ön bilgilendirme alsın
                    </p>
                </Col>
            </Row>
            <br /><br /><br />
            <Row gutter={[60, 120]}>
                {state.map(item => {
                    const imageProps = { height: 240, alt: item.title, src: item.image, fallback: emptyImage };
                    var date = new Date(item.date)
                    const description = (
                        <Row gutter={[32, 16]}>
                            <Col span={24}>{date.toLocaleDateString()}</Col>
                            <Col span={24} style={{ height: '50px', overflow: 'auto' }}>{item.desc}</Col>
                            <Col span={24}><Button onClick={() => onClick(item.url)} type="link">{item.url}</Button></Col>
                        </Row>);
                    return (
                        <Col span={8}>
                            <Card hoverable cover={<Image {...imageProps} />}  >
                                <Card.Meta title={item.title} description={description} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}
