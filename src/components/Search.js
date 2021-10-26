import {Col, Input} from 'antd';
import {useCallback} from "react";

function Search({onNameSearch}) {

  const handleInputChange = useCallback(event => {
    onNameSearch(event.target.value)
  }, [onNameSearch])

  return (
    <Col span={10} offset={10}>
      <Input onChange={handleInputChange}/>
    </Col>
  );
}

export default Search;