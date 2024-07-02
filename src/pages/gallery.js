import React from "react";
import { useState, useEffect } from "react";
import { Button, Table } from "antd";
import axios from "axios";
 
const Gallery = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [photos,setPhotos]=useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "title",
    },
    {
      title: "Thumbnail",
      dataIndex: "thumbnailUrl",
      render: (text) => <img src={text}></img>,
    },                                                                                                                                                                                
  ];
  const data = [];
  for (let i = 0; i < 46; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }
  axios
    .get("https://jsonplaceholder.typicode.com/photos")
    .then(function (response) {
     setPhotos(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
 
 
  return (
    <>
      <h3><b>Gallery</b></h3>
      <Table rowSelection={rowSelection} columns={columns} dataSource={photos} />;
    </>
  );
};
 
export default Gallery;