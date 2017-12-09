import React from 'react';
import PropTypes from 'prop-types';
import {Table,Popconfirm,Button}from 'antd';

const ProductList =({onDelete,profucts})=>{
  const columns=[
    {title:'Name',
    dataIndex:'name',
    },{
    title:'Actions',
      render:(text,record)=>{
      return(
        <Popconfirm title="Delete?" onConfirm={()=>onDelete(record.id)}>
        <Button>Delete</Button>
        </Popconfirm>
      );
      },
    }
  ];
        return(
          <Table dataSource={profucts} columns={columns} />
        );
};

ProductList.prototype={
  onDelete:PropTypes.func.isRequired,
  products:PropTypes.array.isRequired,
};

export default ProductList;
