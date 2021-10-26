import {GENRES} from "../constants/Constant";
import {Col, Tabs} from "antd";
import {useCallback} from "react";

const {TabPane} = Tabs;

function GenresTab({onTabSwitch}) {
  const handleInputChange = useCallback(key => {
    onTabSwitch(key)
  }, [onTabSwitch])

  return (
    <Col span={15} offset={8}>
      <Tabs defaultActiveKey='ALL' onChange={handleInputChange}>
        <TabPane tab='All' key='ALL'/>
        {
          GENRES.map(genre => <TabPane tab={genre} key={GENRES.indexOf(genre)}/>)
        }
      </Tabs>
    </Col>
  )
}

export default GenresTab