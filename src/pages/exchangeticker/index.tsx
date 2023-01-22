import { Button, Card, Col, Row, Spin, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Ticker } from "../../model/Ticker";
import { getTickerFetch } from "../../redux/actions/action";
import { RootState } from "../../sagas/createMiddleware";
import "../../scss/main.scss";

const { Text } = Typography;
const buttons = [
  { id: "btc_thb", name: "BTC/THB", path: "BTC_THB" },
  { id: "busd_thb", name: "BUSD/THB", path: "BUSD_THB" },
  { id: "usdt_thb", name: "USDT/THB", path: "USDT_THB" },
];

const formatter = Intl.NumberFormat();

export function ExchangeTickerScreen() {
  const [seletedExchange, setSelectedExchange] = useState(buttons[0]);

  const dispatch = useDispatch();
  const ticker = useSelector((state: RootState) => {
    console.log(state);
    return state.myFirstReducer.ticker;
  });

  let navigate = useNavigate();
  let { symbol } = useParams();

  React.useEffect(() => {
    const fetch = () => {
      dispatch(getTickerFetch({ symbol: seletedExchange?.id }));
    };

    fetch();
    const timer = setInterval(fetch, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [seletedExchange]);

  return (
    <Card
      className="body"
      style={{
        width: "100%",
        height: "100%",
        margin: 8,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text
          className="text"
          style={{ fontSize: 24, fontWeight: 600, margin: 8 }}
        >
          Latest Exchange Rate
        </Text>
      </div>

      <Row gutter={[8, 8]} style={{ display: "flex", alignItems: "center" }}>
        <Col span={12}>
          {buttons?.map((button) => (
            <Col key={button.id} span={24}>
              <Button
                className={
                  button.id == seletedExchange?.id
                    ? "selected-btn"
                    : "unselected-btn"
                }
                id={button.id}
                style={{ width: 100, margin: 8 }}
                onClick={() => {
                  setSelectedExchange(button);
                  navigate("/market/" + button.path);
                }}
              >
                {button.name}
              </Button>
            </Col>
          ))}
        </Col>

        <Col span={12}>
          <Card
            className="card"
            style={{
              width: 260,
            }}
          >
            <Row gutter={[8, 8]}>
              <Text className="text" style={{ fontSize: 16, fontWeight: 400 }}>
                {seletedExchange?.name}
              </Text>
            </Row>
            {ticker?.type == "loading" && (
              <Row>
                <Spin />
              </Row>
            )}

            {ticker?.type == "success" && ticker?.data && (
              <>
                <Row gutter={[8, 8]}>
                  <Text
                    className="text"
                    style={{ fontSize: 20, fontWeight: 600 }}
                  >
                    {formatter.format(
                      ticker.data.lastPrice as unknown as number
                    )}
                  </Text>
                </Row>

                <Row gutter={[8, 8]}>
                  <Text
                    className="text"
                    style={{ fontSize: 14, fontWeight: 600 }}
                  >
                    Volume:
                    {formatter.format(
                      ticker?.data?.volume as unknown as number
                    )}
                  </Text>
                </Row>
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Card>
  );
}
