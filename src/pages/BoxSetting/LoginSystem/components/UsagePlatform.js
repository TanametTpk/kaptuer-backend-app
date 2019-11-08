import React from 'react'
import styled from 'styled-components'
import { Card } from 'antd';
import { Other } from '../../../../asset/svg'

const Container = styled(Card)`

    height: 200px;
    width: 200px;

    transition: all .2s ease-in-out;

    &:hover {

        transform: scale(1.1);

    }

    .title {

        font-size: 24px;

    }

    span {
        color: #9E9E9E;
    }

    .subtitle {

        color: rgba(0, 0, 0, 0.24);

    }

    .ant-card-body {
        height: 100%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        text-align: center;

        .icon {
            margin: 8px 20%;

            .icon-image, img{
                height:100%;
                width: 100%;
                object-fit: cover;
            }
            
        }

    }

    &.active {

        .ant-card-body {
            background-color: #2196F3;
            box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);

            span {
                color: white;
            }

            .subtitle {

                color: rgba(250,250,250, 0.9);

            }

        }

    }

`

const UsagePlatform = ({ platform, margin, active, onClick, ...props}) => {

    return (
        <Container onClick={() => onClick(platform)} className={active ? "active" : ""} style={{marginRight: margin}} >
            <div className="icon">
                { 
                    platform ?  <platform.icon className="icon-image" fill={ active ? "white" : "#9E9E9E" } />
                    :
                    <img src={Other} alt="usage" />
                }
            </div>
            <span className="title">
                {platform && platform.name}
            </span>
            <span className="subtitle">
                {platform && platform.type}
            </span>
        </Container>
    )
}

export default UsagePlatform